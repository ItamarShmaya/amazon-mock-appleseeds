"use strict";

const showcasePhoto = document.getElementById("showcasePhoto");
const twisterColor = document.getElementById("twister-color");
const photo1 = document.querySelector(".photo1");
const photo2 = document.querySelector(".photo2");
const photo3 = document.querySelector(".photo3");
const photo4 = document.querySelector(".photo4");
const photo5 = document.querySelector(".photo5");
const photo6 = document.querySelector(".photo6");
const photo7 = document.querySelector(".photo7");
const imageGrid1 = document.querySelector(".item1");
const imageGrid2 = document.querySelector(".item2");
const imageGrid3 = document.querySelector(".item3");
const imageGrid4 = document.querySelector(".item4");
const imageGrid5 = document.querySelector(".item5");

// Main photo changes on hover
photo1.addEventListener("mouseenter", function() {
  showcasePhoto.setAttribute("src", "../assets/images/big/showcase/headset-main-big.jpg");
})
photo2.addEventListener("mouseenter", function() {
  showcasePhoto.setAttribute("src", "../assets/images/big/showcase/photo2-big.jpg");
})
photo3.addEventListener("mouseenter", function() {
  showcasePhoto.setAttribute("src", "../assets/images/big/showcase/photo3-big.jpg");
})
photo4.addEventListener("mouseenter", function() {
  showcasePhoto.setAttribute("src", "../assets/images/big/showcase/photo4-big.jpg");
})
photo5.addEventListener("mouseenter", function() {
  showcasePhoto.setAttribute("src", "../assets/images/big/showcase/photo5-big.jpg");
})
photo6.addEventListener("mouseenter", function() {
  showcasePhoto.setAttribute("src", "../assets/images/big/showcase/photo6-big.jpg");
})
photo7.addEventListener("mouseenter", function() {
  showcasePhoto.setAttribute("src", "../assets/images/big/showcase/photo7-big.jpg");
})


imageGrid1.addEventListener("mouseenter", function() {
  showcasePhoto.setAttribute("src", "../assets/images/big/showcase/headset-main-big.jpg");
})
imageGrid2.addEventListener("mouseenter", function() {
  showcasePhoto.setAttribute("src", "../assets/images/big/showcase/image-grid-item2-big.jpg");
  twisterColor.textContent = "Grey";
})
imageGrid3.addEventListener("mouseenter", function() {
  showcasePhoto.setAttribute("src", "../assets/images/big/showcase/image-grid-item3-big.jpg");
  twisterColor.textContent = "Pink";
})
imageGrid4.addEventListener("mouseenter", function() {
  showcasePhoto.setAttribute("src", "../assets/images/big/showcase/image-grid-item4-big.jpg");
  twisterColor.textContent = "White";
})
imageGrid5.addEventListener("mouseenter", function() {
  showcasePhoto.setAttribute("src", "../assets/images/big/showcase/image-grid-item5-big.jpg");
  twisterColor.textContent = "Red/Blue";
})

// Main photo changes back
imageGrid2.addEventListener("mouseleave", function() {
  showcasePhoto.setAttribute("src", "../assets/images/big/showcase/headset-main-big.jpg");
  twisterColor.textContent = "Black";
})
imageGrid3.addEventListener("mouseleave", function() {
  showcasePhoto.setAttribute("src", "../assets/images/big/showcase/headset-main-big.jpg");
  twisterColor.textContent = "Black";
})
imageGrid4.addEventListener("mouseleave", function() {
  showcasePhoto.setAttribute("src", "../assets/images/big/showcase/headset-main-big.jpg");
  twisterColor.textContent = "Black";
})
imageGrid5.addEventListener("mouseleave", function() {
  showcasePhoto.setAttribute("src", "../assets/images/big/showcase/headset-main-big.jpg");
  twisterColor.textContent = "Black";
})


// Hamburger Menu

const hmenuBtn = document.getElementById("hmenuBtn");
const hmenu = document.getElementById("hmenu");
const closeIcon = document.querySelector(".close-icon");

hmenuBtn.addEventListener("click", function() {
  hmenu.style.visibility = "visible";
})

closeIcon.addEventListener("click", function() {
  hmenu.style.visibility = "hidden";
})


// Cart number update

const qty = document.querySelector(".qty");
const cartCount = document.getElementById("cart-count");
const addToCart = document.getElementById("addToCart");

addToCart.addEventListener("click", function() {
  cartCount.textContent = qty.value;
})


// Carousel

let slideIndex = 1;
let slides = document.getElementsByClassName("carousel-slide"); //getting carousel slides storing in array

function showSlide(n) {
  let i;
  if(n > slides.length) {   
    slideIndex = 1;
  }
  if(n < 1) {
    slideIndex = slides.length;
  }
  for(i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
}

showSlide(slideIndex)

function pushSlide(n) {
  showSlide(slideIndex += n);
}
