document.getElementById("contactForm").addEventListener("submit", function(e) {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    if (!name || !email || !message) {
        alert("Oops! Looks like you missed a spot. Please fill out all fields before sending.");
        e.preventDefault();
    } else {
        alert("Thank you for reaching out! I'll get back to you soon.");
    }
});
