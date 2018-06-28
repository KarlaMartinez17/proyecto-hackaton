$(document).ready(function(){
    $('select').formSelect();
   
  });


  $(document).ready(function(){
    var apiKey = "AIzaSyCV3H7vcvA4wIKlbZi40PEDZQvOdbwO2c8";
    var artista = "shakira"

    $.ajax({
        url: "https://www.googleapis.com/youtube/v3/search?type=video&q=" + artista + "&key=AIzaSyCV3H7vcvA4wIKlbZi40PEDZQvOdbwO2c8&part=snippet&maxResults=5",
        success: function(response){
            console.log(response);

           // console.log(response.data.results);

            var template = $("#template-video").html();
            var $video = $("#video-container");
            response.items.forEach( function(item){
                //console.log(videoId);
               var data = {
                    videoId: item.id.videoId,
                }

                //console.log(character)
                console.log(data)

                var filledTemplate = fillTemplate(template,data);
                console.log(filledTemplate);
                $video.append(filledTemplate);

            });
            
        }
            
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
}