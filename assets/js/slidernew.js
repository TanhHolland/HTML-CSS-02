const prevButton = document.querySelector(".blog .prev");
const nextButton = document.querySelector(".blog .next");
const blogImages = document.querySelectorAll(".blog-item");
const blogListWrapper = document.querySelector(".blog-list");
const dotItems = document.querySelectorAll(".blog .dots-item");
let currentIndex = 0;
let totalImages = blogImages.length;
let autoSlideInterval = setInterval(function () {
    nextButton.click();
}, 3000);

console.log(prevButton);
// console.log(autoSlideInterval);

function updateSliderPosition() {
    blogListWrapper.style.left = -blogImages[currentIndex].offsetLeft + 'px';
    clearInterval(autoSlideInterval);
    autoSlideInterval = setInterval(function () {
        nextButton.click();
    }, 3000);
}

nextButton.onclick = function() {
    dotItems[currentIndex].classList.remove("dots-active");
    currentIndex = currentIndex + 1 < totalImages ? currentIndex + 1 : 0;
    dotItems[currentIndex].classList.add("dots-active");
    updateSliderPosition();
}

prevButton.onclick = function() {
    dotItems[currentIndex].classList.remove("dots-active");
    currentIndex = currentIndex - 1 < 0 ? totalImages - 1 : currentIndex - 1;
    dotItems[currentIndex].classList.add("dots-active");
    updateSliderPosition();
}

window.onresize = function () {
    updateSliderPosition();
}
