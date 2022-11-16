// GLOBAL VARIABLES
// var selectCategory = document.querySelector("#search-cat").value;

// MEAL DB API
var mealList = document.querySelector(".meal");

function loadRecipes() {
  let searchCategory = document.querySelector("#search-cat").value;
  console.log(searchCategory);
  var requestUrl =
    "https://www.themealdb.com/api/json/v1/1/filter.php?c=" + searchCategory;
  console.log(requestUrl);

  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      $(".recipeslist").empty();
      for (var i = 0; i < data.meals.length; i++) {
        var ulList = document.querySelector(".recipeslist");
        var recipe = document.createElement("li");
        var meal = document.createElement("a");
        meal.href = "./meal.html?id=" + data.meals[i].idMeal;
        meal.target = "_blank";
        meal.innerHTML = data.meals[i].strMeal;
        meal.style.listStyle = "none";
        var recipeName = document.createTextNode(data.meals[i].strMeal);
        // recipe.textContent = data[i].strMeal;
        recipe.appendChild(meal);
        ulList.appendChild(recipe);
      }
    });
}
document.querySelector("#search-btn").addEventListener("click", loadRecipes);

// *****************************************
//   *****  COCKTAIL DB -  SECOND API  *****

var cocktail = document.querySelector(".randomCocktail");

function loadCocktail() {
  var requestUrl = "https://www.thecocktaildb.com/api/json/v1/1/random.php";
  console.log(requestUrl);

  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);

      // COCKTAIL NAME
      var newCocktail = document.querySelector(".cocktailname");
      var cocktailRecipe = document.createTextNode(data.drinks[0].strDrink);
      console.log(cocktailRecipe);
      cocktail.appendChild(newCocktail);
      newCocktail.append(cocktailRecipe);

      // COCKTAIL IMAGE 
      const drinkImage = data.drinks[0].strDrinkThumb;
      const image = document.querySelector(".drinkimg");
      image.src = drinkImage


      // COCKTAIL INSTRUCTION
      const instructions = document.querySelector(".newins");
      var cocktailInstructions = document.createTextNode(data.drinks[0].strInstructions);
      cocktail.appendChild(instructions);
      instructions.append(cocktailInstructions);

      console.log(cocktailInstructions);

      // COCKTAIL INGRIDIENTS

      const ingredients = document.querySelector(".cocktailingredients");
      var ingUl = document.querySelector(".ingredientsUl")
      var newIng = document.createElement("li");


      var ingArr = [];
      for (var i = 1; i < 16; i++) {
        var newIngredient = data.drinks[0]["strIngredient" + i];
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


    });
}
loadCocktail();

// *************************************
// Functionality for Add To Favorite Button




// Save value to local storage
localStorage.setItem()



// Show user search results
// Add list of recipes to recipe div
// Each recipe will have a link to its own meal page
// url of meal page will pass on the meal id ex: meal.html?id=52925
//})
//}
// create new function to get meal Id, then do a request to get meal recipe
// function to run when meal loads

