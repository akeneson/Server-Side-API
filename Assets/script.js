console.log("script is linked")

$(document).ready(function () {
  // to hold an array of past searched cities
  var cities = ["Dallas", "Oklahoma City"];

  function renderButtons() {
    $("#searchHistory").empty();
    console.log("submit btn function working");

    // looping through the array of cities
    for(var i = 0; i< cities.length; i++){
      console.log("forloop working");
      // generating a button for every city searched
      var newCities = $("<br><buttons>");

      // adding class
      newCities.addClass("btn btn-info");
      console.log("class for new cities added")
      // adding a data-attribute with a value of the citie at index i
      newCities.attr("data-name", cities[i]);
      console.log("attribute for new cities data name added");
      // providing the button's text with a value of the movie at index i
      newCities.text(cities[i]);
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
    var cities = $("#userSearch").val().trim();

    // call renderButtons
    renderButtons();
  })

  // call renderButtons to display the initial list of movies
  renderButtons();
})
