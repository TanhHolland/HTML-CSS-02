const prev = document.querySelector(".feature .prev");
const next = document.querySelector(".feature .next");
const listImg = document.querySelectorAll(".feature-item");
const wrap = document.querySelector(".feature-list");
const dots = document.querySelectorAll(".dots-item");
let index = 0;
let size = listImg.length;
let autoRefresh = setInterval(function () {
    next.click();
},3000);
// console.log(autoRefresh)
// console.log(autoRefresh);
function reloadSlider() {
    wrap.style.left = -listImg[index].offsetLeft + 'px';
    clearInterval(autoRefresh);
    autoRefresh = setInterval(function () {
        next.click();
    },3000);
}
next.onclick = function() {
    dots[index].classList.remove("dots-active");
    index = index + 1 < size ? index + 1 : 0;
    dots[index].classList.add("dots-active");
    reloadSlider();
}
prev.onclick = function() {
    dots[index].classList.remove("dots-active");
    index = index - 1 < 0 ? size - 1: index -1;
    dots[index].classList.add("dots-active");
    reloadSlider();
}
window.onresize = function () {
    reloadSlider();
}

