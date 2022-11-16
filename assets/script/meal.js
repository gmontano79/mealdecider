function getMealByID(id) {
  var requestUrl = "https://www.themealdb.com/api/json/v1/1/lookup.php?i=" + id;

  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);

      // meal title
      $("#meal-title").text(data.meals[0].strMeal);

      // meal image
      const mealImage = data.meals[0].strMealThumb;
      const image = document.querySelector(".mealimg");
      image.src = mealImage;

      // meal ingredients
      const ingredients = document.querySelector(".mealingredients");
      var ingUl = document.querySelector(".mealingredientsUl")
      var newIng = document.createElement("li");


      var ingArr = [];
      for (var i = 1; i < 16; i++) {
        var newIngredient = data.meals[0]["strIngredient" + i];
        if (newIngredient != null) {
          ingArr.push(newIngredient)

          // newIng.innerHTML = newIngredient;

        }


      }
      for (var i = 0; i < ingArr.length; i++) {
        var newIngTest = document.createElement("li");
        ingUl.appendChild(newIngTest);
        newIngTest.append(ingArr[i])
      }
      console.log(ingArr);


      console.log(ingUl);



      // instructions
      $(".mealinstructions").text(data.meals[0].strInstructions);
    });
}

$(document).ready(function () {
  const mealPageUrl = window.location.href;
  const parameters = mealPageUrl.split("?")[1];
  const mealId = parameters.split("=")[1];
  console.log(mealId);
  getMealByID(mealId);
});
