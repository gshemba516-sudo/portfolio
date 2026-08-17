// =========================
// NAVIGATION LINK CLICK
// =========================

const navLinks = document.querySelectorAll("nav ul li a");

navLinks.forEach(function(link) {

    link.addEventListener("click", function() {

        navLinks.forEach(function(item) {
            item.classList.remove("active");
        });

        this.classList.add("active");

    });

});


// =========================
// BUTTON CLICK MESSAGE
// =========================

const projectButton = document.querySelector(
    '.home-buttons a[href="#projects"]'
);

projectButton.addEventListener("click", function() {
    console.log("Projects section opened");
});


// =========================
// PAGE LOAD MESSAGE
// =========================

window.addEventListener("load", function() {

    console.log("Welcome to Shenba's Portfolio!");

});