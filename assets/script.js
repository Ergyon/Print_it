const slides = [
	{
		"image":"./assets/images/slideshow/slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"./assets/images/slideshow/slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"./assets/images/slideshow/slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"./assets/images/slideshow/slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

const arrowRight = document.getElementById('arrow-right')
const arrowLeft = document.getElementById('arrow-left')
let bannerImg = document.querySelector('.banner-img')
let tagLine = document.querySelector('.tagLine')

let currentIndex = 0

function updateBanner () {
	bannerImg.src = slides[currentIndex].image
	tagLine.innerHTML = slides[currentIndex].tagLine
}


arrowRight.addEventListener('click', () => {
	currentIndex++
	if (currentIndex >= slides.length) {
		currentIndex = 0
	}
	updateBanner()
})

arrowLeft.addEventListener('click', () => {
	currentIndex--
	if (currentIndex < 0) {
		currentIndex = slides.length - 1
	}
	updateBanner()
})

