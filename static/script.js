// script.js

// Smooth Scroll for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute('href'));

    if (target) {
      target.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});


// Navbar Background Change on Scroll
window.addEventListener("scroll", function () {

  const navbar = document.querySelector(".navbar");

  if (window.scrollY > 50) {
    navbar.style.background = "#000";
    navbar.style.boxShadow = "0 2px 10px rgba(0,0,0,0.8)";
  } else {
    navbar.style.background = "transparent";
    navbar.style.boxShadow = "none";
  }

});


// Button Click Alerts
const exploreBtn = document.querySelector(".btn-primary");
const contactBtn = document.querySelector(".btn-secondary");

if (exploreBtn) {
  exploreBtn.addEventListener("click", () => {
    alert("Explore Projects Button Clicked!");
  });
}

if (contactBtn) {
  contactBtn.addEventListener("click", () => {
    alert("Contact Us Button Clicked!");
  });
}


// Floating Animation for Hero Text
const heroTitle = document.querySelector(".hero-title");

if (heroTitle) {

  let position = 0;
  let direction = 1;

  setInterval(() => {

    position += direction * 0.5;

    if (position > 10 || position < 0) {
      direction *= -1;
    }

    heroTitle.style.transform = `translateY(${position}px)`;

  }, 30);
}


// Simple Counter Animation
const counters = document.querySelectorAll(".counter-number");

counters.forEach(counter => {

  counter.innerText = "0";

  const updateCounter = () => {

    const target = +counter.getAttribute("data-target");
    const current = +counter.innerText;

    const increment = target / 100;

    if (current < target) {

      counter.innerText = `${Math.ceil(current + increment)}`;

      setTimeout(updateCounter, 30);

    } else {

      counter.innerText = target + "+";

    }

  };

  updateCounter();

});


// Project Card Hover Effect
const projectCards = document.querySelectorAll(".project-card");

projectCards.forEach(card => {

  card.addEventListener("mouseenter", () => {

    card.style.transform = "translateY(-10px)";
    card.style.transition = "0.4s";

  });

  card.addEventListener("mouseleave", () => {

    card.style.transform = "translateY(0px)";

  });

});


// Testimonial Fade-in Animation
const testimonials = document.querySelectorAll(".testimonial-card");

window.addEventListener("scroll", () => {

  testimonials.forEach(card => {

    const cardTop = card.getBoundingClientRect().top;

    if (cardTop < window.innerHeight - 100) {

      card.style.opacity = "1";
      card.style.transform = "translateY(0px)";
      card.style.transition = "0.6s";

    }

  });

});


// Initial Styles for Testimonials
testimonials.forEach(card => {

  card.style.opacity = "0";
  card.style.transform = "translateY(50px)";

});


// Mobile Menu Toggle
const navLinks = document.querySelector(".nav-links");

const menuBtn = document.createElement("button");

menuBtn.innerHTML = "☰";
menuBtn.classList.add("menu-btn");

document.querySelector(".nav-container").appendChild(menuBtn);

menuBtn.addEventListener("click", () => {

  navLinks.classList.toggle("show-menu");

});
// BUTTON FUNCTIONS

function goToProjects() {
  window.location.href = "index.html#projects";
}

function goToContact() {
  window.location.href = "index.html#contact";
}
/* CONTACT SECTION */

.contact-section{
  padding:120px 0;
  background:#050505;
}

.contact-grid{
  display:grid;
  grid-template-columns:1fr 1fr;
  gap:50px;
  margin-top:60px;
}

.contact-form-box,
.contact-info-box{
  background:#0b0b0b;
  padding:40px;
  border-radius:20px;
  border:1px solid #333;
}

.contact-form-box form{
  display:flex;
  flex-direction:column;
  gap:20px;
}

.contact-form-box input,
.contact-form-box textarea{
  background:#111;
  border:1px solid #444;
  padding:18px;
  color:white;
  border-radius:10px;
  font-size:16px;
}

.contact-form-box input:focus,
.contact-form-box textarea:focus{
  outline:none;
  border-color:#d4af37;
}

.contact-info-box h3{
  color:#d4af37;
  font-size:35px;
}

.contact-info-box p{
  margin-top:25px;
  color:#ccc;
  line-height:1.8;
  font-size:18px;
}

.whatsapp-btn{
  display:inline-block;
  margin-top:35px;
  background:#25d366;
  color:white;
  padding:15px 30px;
  text-decoration:none;
  border-radius:10px;
  font-weight:bold;
  transition:0.4s;
}

.whatsapp-btn:hover{
  transform:scale(1.05);
}

@media(max-width:900px){

  .contact-grid{
    grid-template-columns:1fr;
  }

}
// CONTACT FORM

const contactForm = document.getElementById("contactForm");

if(contactForm){

  contactForm.addEventListener("submit", function(e){

    e.preventDefault();

    const name = document.getElementById("name").value;

    alert(
      "Thank You " + name + "! Your inquiry has been submitted."
    );

    contactForm.reset();

  });

}
// =====================================
// PROPERTY MODAL
// =====================================

const galleryItems =
document.querySelectorAll(".gallery-item img");

const propertyModal =
document.getElementById("propertyModal");

const modalImage =
document.getElementById("modalImage");

const closeModal =
document.getElementById("closeModal");

galleryItems.forEach(item => {

  item.addEventListener("click", () => {

    propertyModal.classList.add("show");

    modalImage.src = item.src;

  });

});

/* CLOSE MODAL */

closeModal.addEventListener("click", () => {

  propertyModal.classList.remove("show");

});

/* CLOSE ON OUTSIDE CLICK */

window.addEventListener("click", (e) => {

  if(e.target === propertyModal){

    propertyModal.classList.remove("show");

  }

});
// =====================================
// CONTACT FORM SUBMIT
// =====================================

const contactForm =
document.getElementById("contactForm");

if(contactForm){

  contactForm.addEventListener(
    "submit",

    async function(e){

      e.preventDefault();

      const data = {

        name:
        document.getElementById("name").value,

        email:
        document.getElementById("email").value,

        phone:
        document.getElementById("phone").value,

        message:
        document.getElementById("message").value

      };

      const response = await fetch(
        "/save_inquiry",

        {

          method:"POST",

          headers:{
            "Content-Type":"application/json"
          },

          body:JSON.stringify(data)

        }

      );

      const result = await response.json();

      alert(result.message);

      contactForm.reset();

    }

  );

}