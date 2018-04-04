$(".button").on("click", function() {

    var topics = [];
  
    var animal = $(this).attr("add");

   
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + animal + "&api_key=gWZSEQ1xhkMi45Yh4BIKCUXRVRJBzjkB&q=animal&limit=10offset=0&rating=G&lang=en";

    
    $.ajax({
        url: queryURL,
        method: "GET"
      }).then(function(response) {
        console.log(queryURL);

        console.log(response);
        
        var results = response.data;

          for (var i = 0; i < results.length; i++) {

            var animalDiv = $("<div>");

            var rating = results[i].rating;

            var p = $("<p>").text("Rating: " + results[i].rating);

            var giphy = $("<img>");
            
            giphy.attr("src", results[i].images.fixed_height.url);

            animalDiv.append(p);
            animalDiv.append(giphy);

            $("#gif").prepend(animalDiv);
          }
        });
    });
