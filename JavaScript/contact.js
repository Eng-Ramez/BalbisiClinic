function toggleMenu() {
    var dropdownMenu = document.getElementById("dropdownMenu");
    if (dropdownMenu.style.display === "block") {
        dropdownMenu.style.display = "none";
    } else {
        dropdownMenu.style.display = "block";
    }
}
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();

    if (name === "" || email === "" || message === "") {
        alert("Please fill in all fields.");
        return;
    }

    if (!validateEmail(email)) {
        alert("Please enter a valid email.");
        return;
    }

    showNotification();
    document.getElementById("contactForm").reset();
});
function showNotification() {
    var notification = document.getElementById("notification");
    notification.style.display = "block";
    setTimeout(function() {
        notification.style.display = "none";
    }, 3000); // Hide after 3 seconds
}

function validateEmail(email) {
    let re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}
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