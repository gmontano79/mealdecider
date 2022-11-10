// GLOBAL VARIABLES
var selectCategory = document.querySelector("#categories").value;

//  SELECT OPTIONS VALUES

// MEAL DB API
var mealList = document.querySelector(".meal");

function loadRecipes() {
  // function getSelectValue() {
  //   console.log(selectCategory);
  // }
  // function searchBtn() {
  //   var searchBtn = document.querySelector(".button");
  //   searchBtn.addEventListener(onclick);
  // }
  var requestUrl =
    "https://www.themealdb.com/api/json/v1/1/filter.php?c=" + selectCategory;
  console.log(requestUrl);

  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      for (var i = 0; i < data.meals.length; i++) {
        var ulList = document.querySelector(".recipeslist");
        var recipe = document.createElement("li");
        var recipeName = document.createTextNode(data.meals[i].strMeal);
        // recipe.textContent = data[i].strMeal;
        recipe.appendChild(recipeName);
        ulList.appendChild(recipe);
      }
    });
}
loadRecipes();
