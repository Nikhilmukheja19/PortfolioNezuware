$(document).ready(function () {
  // Slick slider initialization
  $(".slider").slick({
    arrows: false,
    dots: true,
    appendDots: ".slider-dots",
    dotsClass: "dots",
  });

  // Mobile navigation toggle
  let hamberger = document.querySelector(".hamberger");
  let times = document.querySelector(".times");
  let mobileNav = document.querySelector(".mobile-nav");

  hamberger.addEventListener("click", function () {
    mobileNav.classList.add("open");
  });

  times.addEventListener("click", function () {
    mobileNav.classList.remove("open");
  });

  // CV download buttons
  document.getElementById("download-cv").addEventListener("click", function () {
    const link = document.createElement("a");
    link.href =
      "https://drive.google.com/uc?export=download&id=1-lOUBhZadOecBZOLWWAh96XtIEWxYoSN";
    link.download = "your-cv.pdf";
    link.click();
  });

  document.getElementById("download-cv1").addEventListener("click", function () {
    const link = document.createElement("a");
    link.href =
      "https://drive.google.com/uc?export=download&id=1-lOUBhZadOecBZOLWWAh96XtIEWxYoSN";
    link.download = "your-cv.pdf";
    link.click();
  });

  // Contact form submission
  document.getElementById("contact-form").addEventListener("submit", async (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const subject = document.getElementById("subject").value;
    const message = document.getElementById("message").value;

    try {
      const response = await fetch("https://portfolionezuware-1.onrender.com/send-message", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, subject, message }),
      });

      if (response.ok) {
        alert("Message sent successfully!");
        document.getElementById("contact-form").reset();
      } else {
        alert("Failed to send message.");
      }
    } catch (error) {
      alert("An error occurred: " + error.message);
    }
  });
});
