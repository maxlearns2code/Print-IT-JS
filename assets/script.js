const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

const arrowLeft = document.querySelector(".arrow_left")
const arrowRight = document.querySelector(".arrow_right")
const img = document.querySelector(".banner-img")
const imgText = document.querySelector("#banner p")

const maxSlides = slides.length-1

let currentSlide = 0

arrowLeft.addEventListener("click", leftclick)
arrowRight.addEventListener("click", rightclick)

/*activate left arrow button*/
function leftclick(event) {
	if(currentSlide+1 > 1) { 
		currentSlide -= 1
	}
	else { 
		currentSlide=maxSlides
	}
	updateSlide(currentSlide)
	updateDotSelected(currentSlide)
	console.log(event)
}

/*activate right arrow button*/
function rightclick(event) {
	if(currentSlide+1 <= maxSlides) { 
		currentSlide += 1
	}
	else { 
		currentSlide=0
	}
	updateSlide(currentSlide)
	updateDotSelected(currentSlide)
	console.log(event)
}

/*create bullets*/
function createDots() {
	const dots = document.querySelector(".dots")
	slides.forEach((slide,id) => {
		/*create class dot*/
		const dot = document.createElement("div")
		dot.classList.add("dot")
		/*activate bullets*/
		dot.addEventListener("click", function() {
			currentSlide=id
			updateSlide(currentSlide)
			updateDotSelected(currentSlide)
			console.log(id)
		})
		/*create class dot_selected*/
		if (id===0) {
			dot.classList.add("dot_selected")
		}
		dots.appendChild(dot)
		console.log(slide)
	});
}
createDots()

/*update carousel*/
function updateSlide (currentSlide) {
	/*take the correct image in the slides array*/
	img.src=`./assets/images/slideshow/${slides[currentSlide
	].image}`
	/*take the correct text in the slides array*/
	imgText.innerHTML=`${slides[currentSlide
	].tagLine}`
}

/*update bullets*/
function updateDotSelected () {
	const dotSelected = document.querySelector(".dot_selected")
	/*remove class dot_selected*/
	dotSelected.classList.remove("dot_selected")
	/*add class dot_selected*/
	const dots = document.querySelectorAll(".dot")
	dots[currentSlide].classList.add("dot_selected")
}