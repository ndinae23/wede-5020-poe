document.addEventListener("DOMContentLoaded", function () {
    console.log("Miamis Catering website loaded successfully");
});
  document.getElementById("welcomeBtn").addEventListener("click", function () {
        alert("Welcome to Miamis Catering Services!");
    });
    document.addEventListener("DOMContentLoaded", function () {

    // Button
    let btn = document.getElementById("welcomeBtn");
    if (btn) {
        btn.addEventListener("click", function () {
            alert("Welcome to Miamis Catering Services!");
        });
    }

    // Form validation
    let form = document.getElementById("contactForm");

    if (form) {
        form.addEventListener("submit", function (e) {
            e.preventDefault();

            let name = document.getElementById("name").value;
            let email = document.getElementById("email").value;
            let message = document.getElementById("message").value;
            let error = document.getElementById("error");

            if (name.length < 3) {
                error.textContent = "Name must be at least 3 characters";
                return;
            }

            if (!email.includes("@")) {
                error.textContent = "Invalid email";
                return;
            }

            if (message.length < 10) {
                error.textContent = "Message too short";
                return;
            }

            error.textContent = "";
            alert("Message sent successfully!");
        });
    }

});
document.addEventListener("DOMContentLoaded", function () {

    // =========================
    // BUTTON (from Step 7)
    // =========================
    let btn = document.getElementById("welcomeBtn");

    if (btn) {
        btn.addEventListener("click", function () {
            alert("Welcome to Miamis Catering Services!");
        });
    }

    // =========================
    // CONTACT FORM VALIDATION
    // =========================
    let contactForm = document.getElementById("contactForm");

    if (contactForm) {
        contactForm.addEventListener("submit", function (e) {
            e.preventDefault();

            let name = document.getElementById("name").value;
            let email = document.getElementById("email").value;
            let message = document.getElementById("message").value;
            let error = document.getElementById("error");

            if (name.length < 3) {
                error.textContent = "Name must be at least 3 characters";
                return;
            }

            if (!email.includes("@")) {
                error.textContent = "Enter a valid email";
                return;
            }

            if (message.length < 10) {
                error.textContent = "Message too short";
                return;
            }

            error.textContent = "";
            alert("Message sent successfully!");
        });
    }

    // =========================
    // ENQUIRY FORM (PRICE CALCULATOR)
    // =========================
    let enquiryForm = document.getElementById("enquiryForm");

    if (enquiryForm) {
        enquiryForm.addEventListener("submit", function (e) {
            e.preventDefault();

            let guests = document.getElementById("guests").value;
            let eventType = document.getElementById("eventType").value;
            let result = document.getElementById("result");

            let pricePerPerson = 0;

            if (eventType === "wedding") {
                pricePerPerson = 150;
            } else if (eventType === "birthday") {
                pricePerPerson = 100;
            } else if (eventType === "corporate") {
                pricePerPerson = 200;
            }

            let total = guests * pricePerPerson;

            result.textContent = "Estimated Cost: R " + total;
        });
    }

});
