$(document).ready(function() {
    var apiKey = "Or5al7f1CgXYK7AwGfbpH9sFH0viHQs6"; //Aplicacion Ticket Master
    
    
    $("#search").click(function(){
        console.log("boton de search clicleado");
        var search= $("#search").val();
        var $characters= $("#characters");
        $characters.html("<h1>searching</h1>")

        $.ajax({
            type:"GET",
            url:"//app.ticketmaster.com/discovery/v2/events.json?apikey=Or5al7f1CgXYK7AwGfbpH9sFH0viHQs6&city=zapopan"+search,
            async:true,
            dataType: "json",
            success: function(json) {
                        console.log(json);
                        // Parse the response.
                        // Do other things.
                     },
            error: function(xhr, status, err) {
                        // This time, we do not end up here!
                     }
          });
    });

});


       /* $.ajax({
            url: "https://gateway.marvel.com:443/v1/public/characters?apikey=" + apiKey+"&nameStartsWith"+search,
            success: function(response) {
                
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
            }
        });
    });
});



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
}*/
$(document).ready(function(){

     setTimeout(function () {
    $('#splash').fadeOut(500);
}, 2000);


    $('.modal').modal();
  });
 

 
