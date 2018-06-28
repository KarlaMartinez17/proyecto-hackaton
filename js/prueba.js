$(document).ready(function(){
    $('select').formSelect();
  });
 
  var selectOption= document.getElementById('optionSelect')
  selectOption.addEventListener("change", rescueValue);

  function rescueValue(){
    console.log(selectOption);
    var selectedValue = selectOption.options[selectOption.selectedIndex].text;
    console.log(selectedValue);

    $.ajax({
        type:"GET",
        url:"http://app.ticketmaster.com/discovery/v2/events.json?apikey=Or5al7f1CgXYK7AwGfbpH9sFH0viHQs6&city=" + selectedValue,
        async:true,
        dataType: "json",
        success: function(json) {
            console.log(json);
            var template = document.getElementById("template-content").innerHTML;
            console.log(template);
            var $eventsgeneral= $("#eventsgenerals");
            $eventsgeneral.html("");
            json._embedded.events.forEach(function(event){
                var data= {
                    eventName:event.name,
                    date:event.dates.start.localDate,
                    img: event.images[0].url,
                    eventPlace:event._embedded.venues[0].name
                }
            
            console.log(data);
            var filledTemplate=fillTemplate(template, data);
                   console.log(filledTemplate);
                   $eventsgeneral.append(filledTemplate);
            });

        }

   });
}

function fillTemplate(template, data) {
    for(var index in data){
        var value = data[index];
        template = template.replace(new RegExp('{{'+index+'}}', 'g'), escapeHtml(value) );
    };
    return template;
}

function escapeHtml(str) {
    var div = document.createElement('div');
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
}

/*

  var template = document.getElementById("template-content").innerHTML;
  console.log(template);
  var $characters= $("#characters");
  $characterts.html("");
  response.data.results.forEach(function(character) {
      console.log(character);
      console.log(character.name);
      var data =  {
          name: character.name,
          description: character.description,
          img: character.thumbnail.path + "."+character.thumbnail.extension,
      }
      console.log(data);
      var filledTemplate=fillTemplate(template, data);
      console.log(filledTemplate);
      $characters.append(filledTemplate);
  });

*/