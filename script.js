// JavaScript for Café Shop Website

// Function to validate the booking form
document.querySelector("#contact").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission

    const name = document.querySelector("#name").value.trim();
    const email = document.querySelector("#email").value.trim();
    const people = document.querySelector("#people").value;
    const date = document.querySelector("#date").value;

    // Validate form fields
    if (!name || !email || !people || !date) {
        alert("Please fill in all required fields.");
        return;
    }

    // Confirm booking
    alert(`Thank you, ${name}! Your table for ${people} on ${date} has been booked.`);
    this.reset(); // Reset the form after submission
});

// Smooth scroll for navigation links
document.querySelectorAll("nav a").forEach((link) => {
    link.addEventListener("click", function (event) {
        event.preventDefault();
        const targetId = this.getAttribute("href").substring(1);
        document.getElementById(targetId).scrollIntoView({
            behavior: "smooth",
        });
    });
});

// Add hover effect on menu cards
const menuCards = document.querySelectorAll(".menu-card");
menuCards.forEach((card) => {
    card.addEventListener("mouseover", () => {
        card.style.transform = "scale(1.05)";
        card.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.2)";
    });

    card.addEventListener("mouseout", () => {
        card.style.transform = "scale(1)";
        card.style.boxShadow = "none";
    });
});
