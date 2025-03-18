function toggleMenu() {
    var dropdownMenu = document.getElementById("dropdownMenu");
    if (dropdownMenu.style.display === "block") {
        dropdownMenu.style.display = "none";
    } else {
        dropdownMenu.style.display = "block";
    }
}
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3, // Default (for large screens)
    spaceBetween: 20, // Spacing between slides
    loop: true, // Infinite loop
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        1024: { slidesPerView: 3 }, // 3 slides for large screens
        768: { slidesPerView: 2 },  // 2 slides for tablets
        480: { slidesPerView: 1 },  // **1 slide for mobile screens**
        320: { slidesPerView: 1 },  // **1 slide for mobile screens**
    },
});
function plusUnderline(n) {
    showUnderline(n);
  }
  
  function showUnderline(n) {
    let i;
    let s = document.querySelectorAll(".nav-link");
    for (i = 0; i < s.length; i++) {
      s[i].classList.remove("active");
    }
    s[n].classList.add("active");
    console.log(s)
  }
  window.onscroll = function() {
    let button = document.getElementById("backToTop");
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        button.style.display = "block";
    } else {
        button.style.display = "none";
    }
};


function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}