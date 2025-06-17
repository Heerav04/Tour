// ------------------ Navbar Toggle ------------------
let navbar = document.querySelector('.header .navbar');

document.querySelector('#menu-btn').onclick = () => {
    navbar.classList.add('active');
};

document.querySelector('#nav-close').onclick = () => {
    navbar.classList.remove('active');
};

// ------------------ Image Swapping ------------------
const images = [
    "images/img-4.jpg",
    "images/img-5.jpg",
    "images/img-6.jpg"
];

let currentIndex = 0;

function showImage(index) {
    const imageElement = document.getElementById("jaipur-image");
    if (imageElement) {
        imageElement.src = images[index];
    }
}

function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
}

function prevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex);
}

// ------------------ Search Form Toggle ------------------
const searchBtn = document.getElementById('search-btn');
const closeSearch = document.getElementById('close-search');
const searchForm = document.querySelector('.search-form');

if (searchBtn && closeSearch && searchForm) {
    searchBtn.addEventListener('click', () => {
        searchForm.classList.add('active');
    });

    closeSearch.addEventListener('click', () => {
        searchForm.classList.remove('active');
    });
}

// ------------------ Scroll Behavior ------------------
window.onscroll = () => {
    navbar.classList.remove('active');
    if (window.scrollY > 0) {
        document.querySelector('.header').classList.add('active');
    } else {
        document.querySelector('.header').classList.remove('active');
    }
};

window.onload = () => {
    if (window.scrollY > 0) {
        document.querySelector('.header').classList.add('active');
    } else {
        document.querySelector('.header').classList.remove('active');
    }
};
// ...existing code...

// ------------------ Jaipur Image Swapping ------------------
const jaipurImages = [
    "images/img-4.jpg",
    "images/img-5.jpg",
    "images/img-6.jpg"
];

let jaipurIndex = 0;

function showJaipurImage(index) {
    const imageElement = document.getElementById("jaipur-image");
    if (imageElement) {
        imageElement.src = jaipurImages[index];
    }
}

window.nextJaipurImage = function() {
    jaipurIndex = (jaipurIndex + 1) % jaipurImages.length;
    showJaipurImage(jaipurIndex);
};

window.prevJaipurImage = function() {
    jaipurIndex = (jaipurIndex - 1 + jaipurImages.length) % jaipurImages.length;
    showJaipurImage(jaipurIndex);
};

// ...existing code...