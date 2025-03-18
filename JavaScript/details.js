function toggleMenu() {
    var dropdownMenu = document.getElementById("dropdownMenu");
    if (dropdownMenu.style.display === "block") {
        dropdownMenu.style.display = "none";
    } else {
        dropdownMenu.style.display = "block";
    }
}
document.addEventListener("DOMContentLoaded", function() {
    const faqQuestions = document.querySelectorAll(".faq-question");

    faqQuestions.forEach((question) => {
        question.addEventListener("click", () => {
            const parent = question.parentElement;
            
            // Toggle active class
            parent.classList.toggle("active");

            // Collapse other open answers
            faqQuestions.forEach((otherQuestion) => {
                if (otherQuestion !== question && otherQuestion.parentElement.classList.contains("active")) {
                    otherQuestion.parentElement.classList.remove("active");
                }
            });
        });
    });
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