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
 *
 * @param {Element} sectionElement - The section to scroll to.
 */
function scrollToSection(sectionElement) {
  let s_top = sectionElement.getBoundingClientRect().top;
  let s_left = sectionElement.getBoundingClientRect().left;
  console.log(sectionElement);
  console.log(`section Top: ${s_top}`);
  console.log(
    `section Top + ScrollY: ${s_top} + ${window.scrollY} = ${
      s_top + window.scrollY
    }`
  );
  console.log(`section Left: ${s_left}`);
  console.log(
    `section Left + ScrollX: ${s_left} + ${window.scrollX} = ${
      s_left + window.scrollX
    }`
  );
  window.scrollTo({
    top: s_top + window.scrollY,
    left: s_left + window.scrollX,
    behavior: "smooth",
  });
  console.log("scroll complete");
}
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
  //Disable link href behavior
  e.preventDefault();
  //Use event delegation to check for the correct target, and add .active class for the clicked menu item
  if (e.target.nodeName === "A") {
    let menuItems = document.querySelectorAll(".menu__link");
    for (let i = 0; i < menuItems.length; i++) {
      menuItems[i].classList.remove("active");
    }
    e.target.classList.add("active");
    //Scroll to the section related to the menu item
    let dataNav = e.target.getAttribute("data-nav");
    let correspondingSection = document.querySelector(
      `section[data-nav="${dataNav}"]`
    );
    scrollToSection(correspondingSection);
  }
});

// Set sections as active
