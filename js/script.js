const catFactsEl = document.getElementById("cat-facts");
const activityEl = document.getElementById("activity");
const buttonEl = document.querySelector(".button")
const activityButtonEl = document.querySelector(".activity-button");

// https://bible-api.com/?random=verse
// https://apis.scrimba.com/bored/api/activity
// https://catfact.ninja/fact
// https://dog.ceo/api/breeds/image/random

addEventListener("dblclick", function () {
	fetch("https://catfact.ninja/fact")
		.then((response) => response.json())
		.then((data) => {
			// console.log(data)

			catFactsEl.innerHTML = data.fact;
		});
});

addEventListener("click", function () {
	fetch("https://apis.scrimba.com/bored/api/activity")
		.then((response) => response.json())
		.then((data) => {
			// console.log(data)

			activityEl.innerHTML = data.activity;
		});
});
