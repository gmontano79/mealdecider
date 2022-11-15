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