function getMealByID(id) {
    var requestUrl = "https://www.themealdb.com/api/json/v1/1/lookup.php?i=" + id;
  
    fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
  
      $("#meal-title").text(data.meals[0].strMeal)
  
    });
  }

  $( document ).ready(function() {
    const mealPageUrl = window.location.href;
    const parameters = mealPageUrl.split("?")[1]
    const mealId = parameters.split("=")[1]
    console.log(mealId)
    getMealByID(mealId);
  });

  
