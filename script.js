const currentHour = new Date().getHours();

let greeting;

if (currentHour < 12) {
    greeting = "Good Morning";
} else if (currentHour < 18) {
    greeting = "Good Afternoon";
} else {
    greeting = "Good Evening";
}

const greetingElement = document.getElementById("greeting");

if (greetingElement) {
    greetingElement.textContent = greeting;
}


/* =========================
   DARK MODE
========================= */

const themeToggle = document.getElementById("themeToggle");

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");
}

if (themeToggle) {

    themeToggle.addEventListener("click", () => {

        document.body.classList.toggle("dark-mode");

        if (document.body.classList.contains("dark-mode")) {

            localStorage.setItem("theme", "dark");

        } else {

            localStorage.setItem("theme", "light");

        }

    });

}


/* =========================
   CONTACT FORM
========================= */

const contactForm = document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", (event) => {

        event.preventDefault();

        const name =
            document.getElementById("name").value.trim();

        const email =
            document.getElementById("email").value.trim();

        const message =
            document.getElementById("message").value.trim();


        if (name === "") {

            alert("Please enter your name.");

            return;
        }


        if (email === "") {

            alert("Please enter your email.");

            return;
        }


        if (message === "") {

            alert("Please enter your message.");

            return;
        }


        alert(`Thank you, ${name}! Your message has been submitted.`);

        contactForm.reset();

    });

}
