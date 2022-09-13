/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/

  const sections = document.querySelectorAll('section');
 
  const navLi = document.querySelectorAll('.navbar__menu ul li');
  
  
/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav

const ul = document.getElementById("navbar__list");
document.querySelector("#navbar__list").innerHTML += '<li><a href="#section1">How we are doing it</a></li>, <li><a href="#section2">Showcase</a></li>,  <li><a href="#section3">Our Projects</a></li>, <li><a href="#section4">Testimonials</a></li>, <li><a href="#form">Subscribe</a></li> '


// Scroll to anchor ID using scrollTO event

document.querySelectorAll("nav a").forEach(function(link, index) {
	link.addEventListener('click',function(event){
    event.preventDefault()
    const section = document.querySelector(link.getAttribute('href'));
    section.scrollIntoView({behavior:"smooth", inline:"center", block:"center"})
  })
});


// Add class 'active' to section when near top of viewport

function makeActive() {
  sections.forEach ((section)=>{
    const box = section.getBoundingClientRect();
    const id = section.getAttribute('id');
    const list = document.querySelector(`[href="#${id}"]`);
    if (box.top <= 150 && box.bottom >= 150){
      section.classList.add('your-active-class') 
    } else {
      section.classList.remove('your-active-class')
    }
  
  })
}
makeActive()



function makeActive() {
  sections.forEach ((section)=>{
    const box = section.getBoundingClientRect();
    const id = section.getAttribute('id');
    const list = document.querySelector(`[href="#${id}"]`);
    if (box.top <= 150 && box.bottom >= 150){
      section.classList.add('your-active-class') 
      list.classList.add('active');
    } else {
      section.classList.remove('your-active-class')
      list.classList.remove('active');
    }
  
  })
}
makeActive()





/**
 * End Main Functions
 * Begin Events
 * 
*/




// Scroll to section on link click
document.addEventListener('scroll', (e) => {
  e.preventDefault();
  makeActive();
});

// Build menu

const form = document.querySelector('form');
form.addEventListener('submit',(event)=>{
  event.preventDefault()
  const thanks = document.createElement('p');
  form.append(thanks);
  thanks.textContent = "Thanks for submiting on our Page";
  setTimeout(()=>{
    thanks.remove()
  },6000)
})