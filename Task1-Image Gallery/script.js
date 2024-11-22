const images = [
    { src: "images/image1.jpg", caption: "Dog" },
    { src: "images/image2.jpg", caption: "Tree" },
    { src: "images/image3.jpg", caption: "Flower" }
    { src: "images/image4.jpg", caption: "Mountain" }
];
let currentIndex = 0;

function openLightbox(index) {
    currentIndex = index;
    document.getElementById("lightbox-image").src = images[currentIndex].src;
    document.getElementById("lightbox-caption").textContent = images[currentIndex].caption;
    document.getElementById("lightbox").style.display = "flex";
}

function closeLightbox() {
    document.getElementById("lightbox").style.display = "none";
}

function changeImage(direction) {
    currentIndex = (currentIndex + direction + images.length) % images.length;
    document.getElementById("lightbox-image").src = images[currentIndex].src;
    document.getElementById("lightbox-caption").textContent = images[currentIndex].caption;
}


