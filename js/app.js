AOS.init(), window.onload = (() => {
  document.querySelector(".loader").classList.add("disabled"), setTimeout(() => {
    document.querySelector(".loader").style.display = "none"
  }, 300)
});

const burgerBtn = document.querySelector(".burger__btn"),
  burger = document.querySelector(".burger");
burgerBtn.addEventListener("click", () => {
  burger.classList.toggle("active"), document.querySelector(".header__logo").classList.toggle("hidden")
});
const header = document.querySelector(".header"),
  homeSec = document.querySelector(".home"),
  aboutItems = document.querySelectorAll(".about__item");
let aboutItemsTop = 0,
  st = 0;
document.querySelector('.home__content__dots').addEventListener('click', () => {
  window.scrollTo({
    top:homeSec.offsetHeight,
    behavior: 'smooth'
  })
})
window.addEventListener("scroll", () => {
  this.pageYOffset > homeSec.offsetHeight - 100 ? header.className = "header black" : header.className = "header", this.pageYOffset + this.innerHeight > homeSec.offsetHeight + 200 && this.pageYOffset + this.innerHeight < homeSec.offsetHeight + document.querySelector(".about").offsetHeight ? document.querySelector(".about__bg").className = "about__bg fixed" : document.querySelector(".about__bg").className = "about__bg"
});
let parallaxItems = document.querySelectorAll(".title h2, h1");
window.addEventListener("mousemove", function (e) {
  let t = e.clientX / window.innerWidth,
    o = e.clientY / window.innerHeight;
  parallaxItems.forEach(e => {
    e.style.transform = "translate(-" + 50 * t + "px, -" + 50 * o + "px)"
  })
});