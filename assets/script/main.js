// MEAL DB API
var mealList = document.querySelector(".meal");

function getApi() {
  var requestUrl = "www.themealdb.com/api/json/v1/1/random.php";

  console.log(requestUrl);

  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      }
}

getApi();
