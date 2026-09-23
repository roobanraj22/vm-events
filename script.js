/* ===============================
   VM EVENTS JAVASCRIPT
================================ */


/* ===============================
   MOBILE MENU
================================ */

function toggleMenu() {

    const navMenu = document.getElementById("navMenu");

    navMenu.classList.toggle("active");

}


/* Close mobile menu after clicking link */

document.querySelectorAll("#navMenu a").forEach(function(link) {

    link.addEventListener("click", function() {

        document
            .getElementById("navMenu")
            .classList.remove("active");

    });

});


/* ===============================
   WHATSAPP
================================ */

function openWhatsApp() {

    /*
       IMPORTANT:
       Replace this number with your VM Events
       WhatsApp number.

       Format:
       Country code + number
       Example:
       919876543210
    */

    const phoneNumber = "91+ 8870143864";

    const message =
        "Hello VM Events! I am interested in booking an event.";

    const whatsappURL =
        "https://wa.me/" +
        phoneNumber +
        "?text=" +
        encodeURIComponent(message);

    window.open(whatsappURL, "_blank");

}


/* ===============================
   BOOKING FORM
================================ */

document
    .getElementById("bookingForm")
    .addEventListener("submit", function(event) {

        event.preventDefault();

        const name =
            document.getElementById("name").value.trim();

        const phone =
            document.getElementById("phone").value.trim();

        const eventType =
            document.getElementById("eventType").value;

        const eventDate =
            document.getElementById("eventDate").value;

        const location =
            document.getElementById("location").value.trim();

        const requirements =
            document.getElementById("requirements").value.trim();


        /*
           Replace this number with VM Events
           WhatsApp number.
        */

        const businessNumber = "919876543210";


        const message =
            "🌟 VM EVENTS - NEW BOOKING 🌟\n\n" +

            "👤 Name: " + name + "\n" +

            "📞 Phone: " + phone + "\n" +

            "🎉 Event: " + eventType + "\n" +

            "📅 Date: " + eventDate + "\n" +

            "📍 Location: " + location + "\n\n" +

            "📝 Requirements:\n" +
            requirements;


        const whatsappURL =
            "https://wa.me/" +
            businessNumber +
            "?text=" +
            encodeURIComponent(message);


        window.open(
            whatsappURL,
            "_blank"
        );


        /*
           Clear form after submission
        */

        document
            .getElementById("bookingForm")
            .reset();

    });


/* ===============================
   PREVENT PAST EVENT DATES
================================ */

const today =
    new Date().toISOString().split("T")[0];

document
    .getElementById("eventDate")
    .setAttribute("min", today);
    /* ===============================
   REGISTER SERVICE WORKER
================================ */

if ("serviceWorker" in navigator) {

    window.addEventListener("load", () => {

        navigator.serviceWorker
            .register("service-worker.js")
            .then(() => {

                console.log(
                    "VM Events App Ready!"
                );

            })
            .catch(error => {

                console.log(
                    "Service Worker Error:",
                    error
                );

            });

    });

}