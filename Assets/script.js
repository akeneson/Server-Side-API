console.log("script is linked")

$(document).ready(function () {
  // to hold an array of past searched cities
  var userCities = ["Dallas", "Oklahoma City"];

  function renderButtons() {
    $("#searchHistory").empty();
    console.log("submit btn function working");

    // looping through the array of cities
    for(var i = 0; i< userCities.length; i++){
      console.log("forloop working");
      // generating a button for every city searched
      var newCities = $("<br><buttons>");
      
      // adding class
      newCities.addClass("btn btn-info");
      console.log("class for new cities added");
      // adding a data-attribute with a value of the citie at index i
      newCities.attr("data-name", userCities[i]);
      console.log("attribute for new cities data name added");
      // providing the button's text with a value of the movie at index i
      newCities.text(userCities[i]);
      console.log("text for new cities added");

    
      // adding the button to the HTML
      $("#searchHistory").append(newCities);
      console.log("end of renderButton function");
    }
  }

  // This function handles events where one button is clicked
  $("#searchBtn").on("click", function(event){
    // prevents the form from trying to sumbit itself.
    event.preventDefault();

    console.log("search button working");
    // grab text from search nbox
    var userCity = $("#userSearch").val().trim();
    console.log(userCity);
    userCities.push(userCity);
    console.log(userCities);
    // call renderButtons
    renderButtons();
  })

  // call renderButtons to display the initial list of movies
  renderButtons();







  // -------------obtaining objects from site----------------
  var APIKey = "";

  // Here we are building the URL we need to query the database
  var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=Bujumbura,Burundi&appid=" + APIKey;

  // We then created an AJAX call
  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {

    // Create CODE HERE to Log the queryURL
    // Create CODE HERE to log the resulting object
    // Create CODE HERE to calculate the temperature (converted from Kelvin)
    // Create CODE HERE to transfer content to HTML
    // Hint: To convert from Kelvin to Fahrenheit: F = (K - 273.15) * 1.80 + 32
    // Create CODE HERE to dump the temperature content into HTML

  });




})



// ---------------ajax for pictures----------------

// $("button").on("click", function(){
//   var person = $(this).attr("data-person");
//   var queryURL = $("https://" + city + "etc");

//   $.ajax({
//       url: queryURL,
//       method: "GET"
//   })
//   .then(function(reponse){
//       var results = response.data;

//       for(var i=0; i< results.length; i++){
//         var gifDiv = $("<div>");
//         var rating = results [i].rating;
//         var p = $("<p>").text("rating: " + rating);
//         var personImage = $("<img>");
//         person.Image.attr("src", results[i].images.fixed_height.url);

//         gifDiv.prepend(p);
//         gifDiv.prepend
//       }
//   })
// })

