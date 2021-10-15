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

/**
 *Get all available sections in the document.
 */
const sections = document.querySelectorAll("section");
/**
 *Get the nav list.
 */
const nav = document.getElementById("navbar__list");
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

/**
 *Build the navigation menu.
 *@param {number} sectionsCount - The count of sections.
 */
function buildNav(sectionsCount) {
  for (let i = 0; i < sectionsCount; i++) {
    //Get the data-nav attribute for each section tag
    let dataNav = sections[i].getAttribute("data-nav");
    //Create a new list item in the ul
    let item = document.createElement("li");
    //Add new anchor tag with data-nav attribute using the corresponding section data-nav value and append it to the list item
    //Make the first menu active by default (on initial load)
    let a = `<a href='#' class='menu__link${
      i === 0 ? " active" : ""
    }' data-nav='${dataNav}'> ${dataNav}<a>`;

    item.innerHTML = a;
    //Finally, append the list item to the parent ul
    nav.appendChild(item);
  }
}
// Add class 'active' to section when near top of viewport

// Scroll to anchor ID using scrollTO event

/**
 * End Main Functions
 * Begin Events
 *
 */

// Build menu
/**
 *
 */
document.addEventListener("DOMContentLoaded", function () {
  buildNav(sections.length);
});
// Scroll to section on link click
nav.addEventListener("click", (e) => {
  if (e.target.nodeName === "A") {
    let menuItems = document.querySelectorAll(".menu__link");
    for (let i = 0; i < menuItems.length; i++) {
      menuItems[i].classList.remove("active");
    }
    e.target.classList.add("active");
  }
});

// Set sections as active
