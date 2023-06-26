// we add a music using JS when we click a website icon it start.

var icon = document.querySelector("#volume");
var icon2 = document.querySelector(".logo");
var audioElem = document.createElement("audio");
audioElem.setAttribute('src', 'cooking.mp3');
audioElem.setAttribute("autoplay", "autoplay")
icon.onclick = ('load', function () {
    audioElem.pause();
});
icon2.onclick = ('load', function () {
    audioElem.play();
});

// using JS we make a search Option.

let menu = document.querySelector('#menu-bars');
let navbar = document.querySelector('.navbar');
menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}
window.onscroll = () => {
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}
document.querySelector('#search-icon').onclick = () => {
    document.querySelector('#search-form').classList.toggle('active');
}
document.querySelector('#close').onclick = () => {
    document.querySelector('#search-form').classList.remove('active');
}

// shoppingCart

let shoppingCart = document.querySelector('.shopping-cart');
document.querySelector('.fa-shopping-cart').onclick = () =>{
    shoppingCart.classList.toggle('active');
};

// loginform

let loginform = document.querySelector('.login-form');
document.querySelector('.fa-user-alt').onclick = () =>{
    loginform.classList.toggle('active');
};

// Review section
var swiper = new Swiper(".review-slider", {
    spaceBetween: 20,
    centeredSlides: true,
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },
    loop: true,
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        640: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
    },
});

// loader

var loader = document.getElementById('loader-container');

window.addEventListener("load", function () {
    loader.style.display = "none";
});