$(document).ready(function(){
    $("#find-movie").on("click",function(event) {

        event.preventDefault();

        var movie = $("#movie-input").val();

        var queryURL = "https://www.omdbapi.com/?t=" + movie + "&y=&plot=short&apikey=trilogy";
       
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function(response){
            $("#movie-view").text(JSON.stringify(response));
            console.log(response)
        });
        
        

    });
})