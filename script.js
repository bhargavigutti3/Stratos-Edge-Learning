// =========================
// MOBILE MENU
// =========================

const navToggle = document.querySelector(".nav-toggle");
const nav = document.querySelector(".nav");

if (navToggle && nav) {
    navToggle.addEventListener("click", function () {
        nav.classList.toggle("active");
    });
}


// =========================
// CONTACT FORM
// =========================

const contactForm = document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        const formMsg = document.getElementById("formMsg");

        // Check empty fields
        if (name === "" || email === "" || message === "") {
            formMsg.textContent = "Please fill in all fields.";
            formMsg.style.color = "#d32f2f";
            return;
        }

        // Check email
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(email)) {
            formMsg.textContent = "Please enter a valid email address.";
            formMsg.style.color = "#d32f2f";
            return;
        }

        // Success message
        formMsg.textContent =
            "Thank you! Your message was submitted successfully.";

        formMsg.style.color = "#008c6b";

        contactForm.reset();
    });
}