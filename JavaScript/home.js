function toggleMenu() {
    var dropdownMenu = document.getElementById("dropdownMenu");
    if (dropdownMenu.style.display === "block") {
        dropdownMenu.style.display = "none";
    } else {
        dropdownMenu.style.display = "block";
    }
}
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,         
    spaceBetween: 20,        
    loop: true,              
    autoplay: {              
        delay: 3000,
        disableOnInteraction: false
    },
    pagination: {            
        el: ".swiper-pagination",
        clickable: true,
    },
   
    navigation: false, 
    breakpoints: {             
        768: { slidesPerView: 2 },  
        1024: { slidesPerView: 3 }  
    }
});
function updateDateTime() {
    const now = new Date();

    // Get day of the week
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    document.getElementById("day").innerText = days[now.getDay()];

    // Get time (HH:MM:SS)
    document.getElementById("time").innerText = now.toLocaleTimeString();

    // Get date (Month Day, Year)
    document.getElementById("date").innerText = now.toLocaleDateString();
}
setInterval(updateDateTime, 1000);

updateDateTime();

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