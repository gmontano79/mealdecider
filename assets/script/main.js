// MEAL DB API
var mealList = document.querySelector(".meal");


function getApi() {
  let searchCategory = document.querySelector("#search-cat").value;
  console.log(searchCategory);
  var requestUrl = "http://www.themealdb.com/api/json/v1/1/filter.php?c=" + searchCategory; 


  console.log(requestUrl);

  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      // Show user search results 
      // Add list of recipes to recipe div
      // Each recipe will have a link to its own meal page
      // url of meal page will pass on the meal id ex: meal.html?id=52925
    })
}
// create new function to get meal Id, then do a request to get meal recipe
// function to run when meal loads 

// getApi();
document.querySelector("#search-btn").addEventListener("click", getApi);
 
