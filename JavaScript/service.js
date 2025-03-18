function toggleMenu() {
    var dropdownMenu = document.getElementById("dropdownMenu");
    if (dropdownMenu.style.display === "block") {
        dropdownMenu.style.display = "none";
    } else {
        dropdownMenu.style.display = "block";
    }
}
AOS.init();
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