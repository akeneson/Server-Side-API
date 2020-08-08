console.log("script is linked")

$(document).ready(function () {
  // to hold an array of past searched cities
  var APIKey = "4ab7f69c784205860e8d9a2ad7356f8a";

  var userCities = ["Dallas", "Oklahoma City"];

  function renderButtons() {
    $("#searchHistory").empty();
    console.log("submit btn function working");

    // looping through the array of cities
    for(var i = 0; i< userCities.length; i++){
      console.log("forloop working");
      // generating a button for every city searched
      var newCities = $("<br><button>");
      
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
    
    var apiURL= `https://api.openweathermap.org/data/2.5/forecast?q=${userCity}&units=imperial&appid=${APIKey}`;
    $.ajax({
      url: apiURL,
      method: "GET"
    }).then(function(response) {
      console.log("ajax works");
      console.log(response);
      getUVindex(response.city.coord.lat,response.city.coord.lon);
      fiveDay(response);
      let icon =response.list[0].weather[0].icon;
      console.log("this is the icon" +icon);
      var urlIcon = " http://openweathermap.org/img/wn/" + icon+"@2x.png";
      console.log(urlIcon);
    })
  
  

    console.log(userCity);
    userCities.push(userCity);
    console.log(userCities);
    // call renderButtons
    renderButtons();




  })

  function fiveDay(data){
    for(var i = 0; i<data.list.length; i++){
      var date = data.list[i].dt_txt;
      if(date.includes("00:00:00")){
        console.log("===========")
        console.log(data);
        console.log("===========")

      }
    }
  }

  function getUVindex(lat, lon){
    var UVindexURL = `http://api.openweathermap.org/data/2.5/uvi?appid=${APIKey}&lat=${lat}&lon=${lon}`;
    $.ajax({
      url: UVindexURL,
      method: "GET"

    }).then(function(response){
      console.log(response);
    })
  }

  // call renderButtons to display the initial list of movies
  renderButtons();


  // We then created an AJAX call
  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
    console.log("ajax works");
    console.log(userCities[0]);
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
//   var apiKey = 4ab7f69c784205860e8d9a2ad7356f8a
//   var queryURL = $("https://api.openweathermap.org/data/2.5/forecast?q={city name}&appid={your api key}" + city + "etc");

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

