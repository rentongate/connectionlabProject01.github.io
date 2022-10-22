
// Here is the process to fetch the json file, and I follow the tutorial from week 3's video

let randomNumber
window.addEventListener('load', function () {
	 console.log('page is loaded');

	fetch('restaurant.json')
		.then((response) => response.json())
		.then((data) => {
		 let shuffle =  document.querySelector("#shuffle")
		 console.log (shuffle)
			shuffle.addEventListener ('click', function(){
             console.log(data.restaurant)
				let restaurantArray = data
				randomNumber = Math.floor(Math.random() * restaurantArray.restaurant.length)

				console.log(randomNumber)
				
				let nameElement = document.getElementById('restaurant')
			    nameElement.innerHTML = data.restaurant[randomNumber].name

			    let priceElement = document.getElementById('price')
			    priceElement.innerHTML = data.restaurant[randomNumber].price

			    // let ratingElement = document.getElementById('rating')
			    // ratingElement.innerHTML = data.restaurant[randomNumber].rating
			})
			
			// shuffle, not redo the data

			 restaurantData = data.restaurant

			let restaurantArray = data
			randomNumber = Math.floor(Math.random() * restaurantArray.restaurant.length)
			console.log(data.restaurant[randomNumber]);
			console.log(randomNumber)

			// I try to extract the data of "name", "price", "rating" from restaurant.json

			let nameElement = document.getElementById('restaurant')
			nameElement.innerHTML = data.restaurant[randomNumber].name

			let priceElement = document.getElementById('price')
			priceElement.innerHTML = data.restaurant[randomNumber].price

			// let ratingElement = document.getElementById('rating')
			// ratingElement.innerHTML = data.restaurant[randomNumber].rating
				
		})
})
// Foodpics.json is for the pictures of dishes that to be shown at the front side of the card. But I got some problems while using the json from Foodish (https://github.com/surhud004/Foodish#readme), and I am not sure how to fetch a second json file.
