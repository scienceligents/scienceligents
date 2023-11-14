// Swiper js
var swiper = new Swiper(".swiper", {
  spaceBetween: 24,
  slidesPerView: "auto",
  grabCursor: true,
  loop: 'true',

  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
    clickable: true,
  },

  breakpoints: {
    992: {
      spaceBetween: 50,
    },
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// Nav open close
const body = document.querySelector('body'),
      navContent = body.querySelector('.nav-content'),
      navOpenButton = body.querySelector('.navOpen-button'),
      navCloseButton = navContent.querySelector('.navClose-button');

if(navContent && navOpenButton) {
  navOpenButton.addEventListener("click", () =>{
    navContent.classList.add("open");
    body.style.overflowY = "hidden";
  })
}

if(navContent && navCloseButton) {
  navCloseButton.addEventListener("click", () =>{
    navContent.classList.remove("open");
    body.style.overflowY = "scroll";
  })
}

// Theme change
let themeButtons = document.querySelectorAll(".theme-button");

for (var button of themeButtons) {
  button.addEventListener("click", (e) => { //Click event
    let target = e.target;

    document.querySelector(".active").classList.remove("active");
    target.classList.add("active");

    // Switch colors
    let root = document.querySelector(":root");
    let dataColor = target.getAttribute("data-color");
    let color = dataColor.split(" ");

    root.style.setProperty("--primary-color", color[0]);
    root.style.setProperty("--primary-color-hover", color[1]);
    root.style.setProperty("--white-color", color[2]);
    root.style.setProperty("--background-color", color[3]);
    root.style.setProperty("--input-background", color[4]);

  });
}

// Dark Light theme
const themeButton = document.getElementById('dark-theme')
const darkTheme = 'dark-theme'
const iconTheme = 'bxs-sun'

const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bx bxs-moon' : 'bx bxs-sun'

if (selectedTheme) {
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'bx bxs-moon' ? 'add' : 'remove'](iconTheme)
}

themeButton.addEventListener('click', () => {
  document.body.classList.toggle(darkTheme)
  themeButton.classList.toggle(iconTheme)
  localStorage.setItem('selected-theme', getCurrentTheme())
  localStorage.setItem('selected-icon', getCurrentIcon())
})


window.addEventListener("scroll", () => {
  const scrollY = window.pageYOffset;

  // Change header design
  if(scrollY > 5) {
    document.querySelector("header").classList.add("header-active");
  } else {
    document.querySelector("header").classList.remove("header-active");
  }

  // Nav-link indicator
  const sections = document.querySelectorAll('section[id]');
  sections.forEach(section => {
    const sectionHeight = section.offsetHeight,
          sectionTop = section.offsetTop - 100;

    let navId = document.querySelector(`.nav-content a[href='#${section.id}']`);
    if(scrollY > sectionTop && scrollY <=  sectionTop + sectionHeight) {
      navId.classList.add("active-navlink");           
    } else {
      navId.classList.remove("active-navlink");     
    }
          
    navId.addEventListener("click", () => {
      navContent.classList.remove("open");
      body.style.overflowY = "scroll";
    })
  })

  // ThemeBar animation
  const themeBar = document.getElementById('theme-bar');

  if(scrollY > 5) {
    themeBar.classList.add("theme-bar-active");
  } else {
    themeBar.classList.remove("theme-bar-active");
  }

  // Scroll up button
  const scrollUpButton = document.querySelector('.scrollUp-button');

  if(scrollY > 250) {
    scrollUpButton.classList.add("scrollUpButton-active");
  } else {
    scrollUpButton.classList.remove("scrollUpButton-active");
  }

})  
  
  
// Scroll Reveal Animation
  const sr = ScrollReveal({
    origin: 'top',
    distance: '100px',
    duration: 1500,
    delay: 400,
  })
  
sr.reveal(`.section-title, .section-description, .explore-container, .quizzes-container, .footer-content, .footer-links`, {interval:100,})

// sr.reveal(``, {origin: 'left'})
// sr.reveal(``, {origin: 'right'})
