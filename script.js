// AOS Init
AOS.init({
  duration: 1000,
  once: true,
});

// Typing Animation for Hero Section
const typedStrings = [
  "Creative Video Editor",
  "Motion Designer",
  "Multimedia Specialist"
];
let typedIndex = 0, charIndex = 0, typing = true;
const typedElem = document.getElementById('typed');
function typeLoop() {
  if (!typedElem) return;
  if (typing) {
    if (charIndex < typedStrings[typedIndex].length) {
      typedElem.textContent += typedStrings[typedIndex][charIndex++];
      setTimeout(typeLoop, 70);
    } else {
      typing = false;
      setTimeout(typeLoop, 1200);
    }
  } else {
    if (charIndex > 0) {
      typedElem.textContent = typedElem.textContent.slice(0, --charIndex);
      setTimeout(typeLoop, 30);
    } else {
      typing = true;
      typedIndex = (typedIndex + 1) % typedStrings.length;
      setTimeout(typeLoop, 400);
    }
  }
}
typeLoop();

// Smooth Scroll for Nav Links
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', function(e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      window.scrollTo({
        top: target.offsetTop - 60,
        behavior: 'smooth'
      });
    }
  });
});

// Highlight Active Nav Item on Scroll
const sections = document.querySelectorAll('section, header');
const navLinks = document.querySelectorAll('.nav-link');
window.addEventListener('scroll', () => {
  let scrollPos = window.scrollY + 80;
  sections.forEach(section => {
    if (section.offsetTop <= scrollPos && (section.offsetTop + section.offsetHeight) > scrollPos) {
      navLinks.forEach(link => link.classList.remove('active'));
      let id = section.getAttribute('id');
      if (id) {
        let activeLink = document.querySelector('.nav-link[href="#' + id + '"]');
        if (activeLink) activeLink.classList.add('active');
      }
    }
  });
});

// Back to Top Button
const backToTop = document.getElementById('backToTop');
window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    backToTop.classList.add('show');
  } else {
    backToTop.classList.remove('show');
  }
});
backToTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Animate Skill Bars on Scroll
function animateSkillBars() {
  document.querySelectorAll('.skill-bar').forEach(bar => {
    const fill = bar.querySelector('.bar-fill');
    const skill = bar.getAttribute('data-skill');
    if (fill && bar.getBoundingClientRect().top < window.innerHeight - 60) {
      fill.style.width = skill + '%';
    }
  });
}
window.addEventListener('scroll', animateSkillBars);
window.addEventListener('DOMContentLoaded', animateSkillBars);

// Project Filtering with Fade
const filterBtns = document.querySelectorAll('.project-category-btn');
const projectCards = document.querySelectorAll('.projects-section .project');
filterBtns.forEach(btn => {
  btn.addEventListener('click', function() {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const cat = btn.getAttribute('data-category');
    projectCards.forEach(card => {
      if (cat === 'all' || card.getAttribute('data-category') === cat) {
        card.style.opacity = 0;
        card.removeAttribute('hidden');
        setTimeout(() => { card.style.opacity = 1; }, 50);
      } else {
        card.style.opacity = 0;
        setTimeout(() => { card.setAttribute('hidden', ''); }, 300);
      }
    });
  });
});

// Contact Form Validation
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    let valid = true;
    // Name
    const name = document.getElementById('name');
    const nameError = document.getElementById('nameError');
    if (!name.value.trim()) {
      nameError.textContent = "Name is required.";
      valid = false;
    } else {
      nameError.textContent = "";
    }
    // Email
    const email = document.getElementById('email');
    const emailError = document.getElementById('emailError');
    if (!email.value.trim()) {
      emailError.textContent = "Email is required.";
      valid = false;
    } else if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email.value.trim())) {
      emailError.textContent = "Enter a valid email.";
      valid = false;
    } else {
      emailError.textContent = "";
    }
    // Subject
    const subject = document.getElementById('subject');
    const subjectError = document.getElementById('subjectError');
    if (!subject.value.trim()) {
      subjectError.textContent = "Subject is required.";
      valid = false;
    } else {
      subjectError.textContent = "";
    }
    // Message
    const message = document.getElementById('message');
    const messageError = document.getElementById('messageError');
    if (!message.value.trim()) {
      messageError.textContent = "Message is required.";
      valid = false;
    } else {
      messageError.textContent = "";
    }
    if (valid) {
      contactForm.reset();
      alert("Thank you for reaching out! I'll get back to you soon.");
    }
  });
}

// Project filtering logic
document.addEventListener('DOMContentLoaded', function () {
  const buttons = document.querySelectorAll('.project-category-btn');
  const projects = document.querySelectorAll('.project');

  buttons.forEach(btn => {
    btn.addEventListener('click', function () {
      // Set active button
      buttons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const category = btn.getAttribute('data-category');
      projects.forEach(project => {
        if (category === 'all' || project.getAttribute('data-category') === category) {
          project.removeAttribute('hidden');
        } else {
          project.setAttribute('hidden', '');
        }
      });
    });
  });
});

// Mobile Nav Toggle
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');
if (navToggle && navMenu) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('open');
    navToggle.classList.toggle('open');
  });
  // Close menu on link click (mobile)
  navMenu.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('open');
      navToggle.classList.remove('open');
    });
  });
}
