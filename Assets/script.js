console.log("script is linked")


$(document).ready(function () {
  // to hold an array of past searched cities
  var userCities = ["Dallas", "Oklahoma City"];
  const APIKey = "4ab7f69c784205860e8d9a2ad7356f8a";
  function renderButtons() {
    $("#searchHistory").empty();
    console.log("submit btn function working");

    // looping through the array of cities
    for (var i = 0; i < userCities.length; i++) {
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
  $("#searchBtn").on("click", function (event) {
    // prevents the form from trying to sumbit itself.
    event.preventDefault();

    console.log("search button working");
    // grab text from search nbox
    var userCity = $("#userSearch").val().trim();
    var apiURL = "https://api.openweathermap.org/data/2.5/weather?q=" + userCity + "&appid=" + APIKey + "&units=imperial";
    console.log(apiURL)
    $.ajax({
      url: apiURL,
      method: "GET"
    }).then(function (response) {
      console.log("ajax works");
      console.log(response);
      $("#cityName").text(response.name);
      $("#temperature").text(response.main.temp + " degrees");
      $("#humidity").text(response.main.humidity+ "%");
      $("#windSpeed").text(response.wind.speed + " mph");
      console.log(response.coord.lat);
      console.log(response.coord.lon);

      var indexURL = "https://api.openweathermap.org/data/2.5/uvi?appid=" + APIKey + "&lat=" + response.coord.lat + "&lon=" + response.coord.lon;
      console.log(indexURL);
      $.ajax({
        url: indexURL,
        method: "GET"
      }).then(function (response) {
        console.log(response.value);
        $("#UVindex").text(response.value);
        console.log(response.dt);
        var date = moment(response, "x").format("MM/DD/YYYY");
        console.log(date);
        $("#date").text(date);
      })
    });

    fiveDays(userCity);
    console.log(userCity);
    userCities.push(userCity);
    console.log(userCities);
    // call renderButtons
    renderButtons();
  })

  // call renderButtons to display the initial list of movies
  renderButtons();

  function getUV(lat, lon) {
    console.log("getUV function is called");
    console.log(lat);
    console.log(lon);

  }

  function fiveDays(city) {

    var queryURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&appid=" + APIKey + "&units=imperial";

    $.ajax({
      url: queryURL,
      method: "GET"
    })
      .then(function (response) {
        console.log(response);
        for (var i = 0; i < response.list.length; i++) {
          console.log(response.list[i]);
          let column = $("<div>");
          column.addClass("col-md-2");
          column.html(response.list[i].main.temp);
          column.appendTo($("#fiveDays"));
        }
      });
  }






})


// ---------------ajax for pictures----------------


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

