

  	var topics = ["Cakes", "Cupcakes", "Pastries", "Cookies", "Chocolates", "Breads"];
    
        

  	function displayDessert() {
	
  	//$(".dessert").on("click", function() {
  		var dessertName = $(this).attr("data-name");

  		var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + dessertName + "&api_key=dc6zaTOxFJmzC&limit=10&rating=g";

        $.ajax({
      		url: queryURL,
      		method: "GET"
    	  }).done(function(response) {
    	
            //console.log(response);
      		

	  		   $("#images0").empty();
           $("#images1").empty();
           $("#images2").empty();
           $("#images3").empty();
           $("#images4").empty();
           $("#images5").empty();
           $("#images6").empty();
           $("#images7").empty();
           $("#images8").empty();
           $("#images9").empty();
      
	  		   //Load 10 images relating to the button clicked
      		for(var y = 0; y <10; y++) {

            var image0 = true;
            var image1 = true;
            var image2 = true;
            var image3 = true;
            var image4 = true;
            var image5 = true;
            var image6 = true;
            var image7 = true;
            var image8 = true;
            var image9 = true;


      			//Store still images
            var dessertImage = response.data[y].images.downsized_still.url;

            //Store animated images
            //var dessertMovingImage = response.data[y].images.downsized.url;
      			
            $("#images" + y).append("<img src='" + dessertImage + "' height='200' width='300'>");
            
      			
            
              if(y===0) {

                $("#images" + 0).click(function() {
                  if(image0 === true){
                    $("#images" + 0).html("<img src='" + response.data[0].images.downsized.url + "'height='200' width='300'>"); 
                    image0 = false;
                    
                  }
                  else if (image0 === false) {
                    $("#images" + 0).html("<img src='" + response.data[0].images.downsized_still.url + "'height='200' width='300'>");
                  image0 = true;

                  }  
                });
                             
              }
            

              if(y===1) {
                $("#images" + 1).click(function() {
                  if(image1 === true){
                    $("#images" + 1).html("<img src='" + response.data[1].images.downsized.url + "'height='200' width='300'>"); 
                    image1 = false;
                    
                  }
                  else if (image1 === false) {
                    $("#images" + 1).html("<img src='" + response.data[1].images.downsized_still.url + "'height='200' width='300'>");
                  image1 = true;
                  } 
                               
               });
              }
              else if(y===2) {
                $("#images" + 2).click(function() {
                  if(image2 === true){
                    $("#images" + 2).html("<img src='" + response.data[2].images.downsized.url + "'height='200' width='300'>"); 
                    image2 = false;
                   
                  }
                  else if (image2 === false) {
                    $("#images" + 2).html("<img src='" + response.data[2].images.downsized_still.url + "'height='200' width='300'>");
                  image2 = true;
                  } 
               });
              }
              else if(y===3) {
                $("#images" + 3).click(function() {
                  if(image3 === true){
                    $("#images" + 3).html("<img src='" + response.data[3].images.downsized.url + "'height='200' width='300'>"); 
                    image3 = false;
                    
                  }
                  else if (image3 === false) {
                    $("#images" + 3).html("<img src='" + response.data[3].images.downsized_still.url + "'height='200' width='300'>");
                  image3 = true;
                  } 
               });
              }
              else if(y===4) {
                $("#images" + 4).click(function() {
                  if(image4 === true){
                    $("#images" + 4).html("<img src='" + response.data[4].images.downsized.url + "'height='200' width='300'>"); 
                    image4 = false;
                    
                  }
                  else if (image4 === false) {
                    $("#images" + 4).html("<img src='" + response.data[4].images.downsized_still.url + "'height='200' width='300'>");
                  image4 = true;
                  } 
               });
              }
              else if(y===5) {
                $("#images" + 5).click(function() {
                 if(image5 === true){
                    $("#images" + 5).html("<img src='" + response.data[5].images.downsized.url + "'height='200' width='300'>"); 
                    image5 = false;
                    
                  }
                  else if (image5 === false) {
                    $("#images" + 5).html("<img src='" + response.data[5].images.downsized_still.url + "'height='200' width='300'>");
                  image5 = true;
                  }             
               });
              }
              else if(y===6) {
                $("#images" + 6).click(function() {
                  if(image6 === true){
                    $("#images" + 6).html("<img src='" + response.data[6].images.downsized.url + "'height='200' width='300'>"); 
                    image6 = false;
                    
                  }
                  else if (image6 === false) {
                    $("#images" + 6).html("<img src='" + response.data[6].images.downsized_still.url + "'height='200' width='300'>");
                  image6 = true;
                  }             
               });
              }
              else if(y===7) {
                $("#images" + 7).click(function() {
                  if(image7 === true){
                    $("#images" + 7).html("<img src='" + response.data[7].images.downsized.url + "'height='200' width='300'>"); 
                    image7 = false;
                    
                  }
                  else if (image7 === false) {
                    $("#images" + 7).html("<img src='" + response.data[7].images.downsized_still.url + "'height='200' width='300'>");
                  image7 = true;
                  }           
               });
              }
              else if(y===8) {
                $("#images" + 8).click(function() {
                  if(image8 === true){
                    $("#images" + 8).html("<img src='" + response.data[8].images.downsized.url + "'height='200' width='300'>"); 
                    image8 = false;
                    
                  }
                  else if (image8 === false) {
                    $("#images" + 8).html("<img src='" + response.data[8].images.downsized_still.url + "'height='200' width='300'>");
                  image8 = true;
                  }         
               });
              }
              else if(y===9) {
                $("#images" + 9).click(function() {
                  if(image9 === true){
                    $("#images" + 9).html("<img src='" + response.data[9].images.downsized.url + "'height='200' width='300'>"); 
                    image9 = false;
                   
                  }
                  else if (image9 === false) {
                    $("#images" + 9).html("<img src='" + response.data[9].images.downsized_still.url + "'height='200' width='300'>");
                  image9 = true;
                  }           
               });
              };

         };
        
  });
 
};

    function renderButtons() {
  		$("#dessertBtns").empty();
  		for(var i = 0; i < topics.length; i++) {
  			var btn = $("<button>");
  			btn.addClass("dessert");
  			btn.attr("data-name", topics[i]).text(topics[i]);
  			$("#dessertBtns").append(btn);
   	 	}
   	 }
   	
    $("#add-dessert").on("click", function(event) {
        event.preventDefault();
        // This line of code will grab the input from the textbox
        var dessert = $("#dessert-input").val().trim();

        // The movie from the textbox is then added to our array
        topics.push(dessert);

        // Calling renderButtons which handles the processing of our movie array
        renderButtons();
      });

    	$(document).on("click", ".dessert", displayDessert);
    	

    	renderButtons();
   
