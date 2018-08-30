
let cards = document.getElementsByClassName("card");
let prevCardButton = document.getElementsByClassName("prevCardButton");
let nextCardButton = document.getElementsByClassName("nextCardButton");

window.addEventListener("resize",normalizeBanner);

// Displays the previous card
function prevCard(){
	// grab current card to get the card id and remove it from being the active card
	let currentCard = document.getElementsByClassName("active-card")[0];
	let cardId = parseInt(currentCard.dataset.cardid);
	currentCard.classList.remove("active-card");

	// find the previous card based on card id and set it as active
	cards[cardId-1].classList.add("active-card");

	// reactivate the next card button if it was disabled
	nextCardButton[0].classList.remove("is-Disabled");

	// disable the previous card button if the active card is the first card in the list
	if(cardId-1==0) prevCardButton[0].classList.add("is-Disabled");
}

// Displays the next card
function nextCard(){
	// grab the current card id and remove it from being the active card
	let currentCard = document.getElementsByClassName("active-card")[0];
	let cardId = parseInt(currentCard.dataset.cardid);
	currentCard.classList.remove("active-card");

	// find the next card based on the card id and set it as active
	cards[cardId+1].classList.add("active-card");

	// reactivate the previous card button if it was disabled
	prevCardButton[0].classList.remove("is-Disabled");

	// disable the next card button if the active card is the last card in the list
	if(cardId+1==cards.length-1) nextCardButton[0].classList.add("is-Disabled");
}

// Toggle to display or hide the hamburger menu options when the screen width is too small
function hamburgerToggle(){
	let rightNav = document.getElementById("right-nav");
	let leftNav = document.getElementById("left-nav");
	let navBtn = rightNav.getElementsByClassName("nav-btn");

	if(rightNav.classList.value==="responsive"){
		rightNav.classList.remove("responsive");
		leftNav.classList.remove("responsive");
		for(let i =0; i<navBtn.length;i++){
			navBtn[i].classList.remove("responsive");
		}
	}
	else{
		rightNav.classList.add("responsive");
		leftNav.classList.add("responsive");
		for(let i =0; i<navBtn.length;i++){
			navBtn[i].classList.add("responsive");
		}
	}
}

function normalizeBanner(){
	if(document.getElementById("banner").clientWidth>=1030){
		let rightNav = document.getElementById("right-nav");
		let leftNav = document.getElementById("left-nav");
		let navBtn = rightNav.getElementsByClassName("nav-btn");
		if(rightNav.classList.value==="responsive"){
			rightNav.classList.remove("responsive");
			leftNav.classList.remove("responsive");
			for(let i =0; i<navBtn.length;i++){
				navBtn[i].classList.remove("responsive");
			}
		}
	}
}