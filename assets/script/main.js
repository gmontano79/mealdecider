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
    })
}

// getApi();
document.querySelector("#search-btn").addEventListener("click", getApi);
 