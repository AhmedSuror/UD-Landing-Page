/**
 * Landing Page Project
 *
 * Student: Ahmed Suror
 *
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
 * Build the navigation menu.
 * @param {number} sectionsCount - The count of sections.
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
/**
 * Activate a specific section.
 * @param {Element} section - The section to activate.
 */
function activateSection(section) {
  let dataNav = section.getAttribute("data-nav");
  // Deactivate all sections
  sections.forEach((element) => {
    element.classList.remove("activeSection");
  });
  //Reactivate the current section
  section.classList.add("activeSection");
  let menuItems = document.querySelectorAll(".menu__link");
  //Deactivate all menu links
  menuItems.forEach((element) => {
    element.classList.remove("active");
  });
  //Activate the current sections' corresponding menu link
  let correspondingLink = document.querySelector(`a[data-nav="${dataNav}"]`);
  correspondingLink.classList.add("active");
}
// Scroll to anchor ID using scrollTO event
/**
 * Scroll to a specific section.
 * @param {Element} sectionElement - The section to scroll to.
 */
function scrollToSection(sectionElement) {
  //Get boundaries of the section which need to be scrolled to
  let s_top = sectionElement.getBoundingClientRect().top;
  let s_left = sectionElement.getBoundingClientRect().left;
  window.scrollTo({
    top: s_top + window.scrollY,
    left: s_left + window.scrollX,
    behavior: "smooth",
  });
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
//Build navBar after the page is loaded
document.addEventListener("DOMContentLoaded", function () {
  buildNav(sections.length);
});
// Scroll to section on link click
nav.addEventListener("click", (e) => {
  //Disable link href behavior
  e.preventDefault();
  //Use event delegation to check for the correct target, and add .active class for the clicked menu item
  if (e.target.nodeName === "A") {
    //Scroll to the section related to the menu item
    let dataNav = e.target.getAttribute("data-nav");
    let correspondingSection = document.querySelector(
      `section[data-nav="${dataNav}"]`
    );
    scrollToSection(correspondingSection);
  }
});

// Set sections as active
window.addEventListener("scroll", function () {
  //Display navBar when scrolling
  nav.style.display = "block";
  //Get boundaries of sections ad if the boundaris is within viewport activate the section.
  sections.forEach((element) => {
    if (
      element.getBoundingClientRect().top >= -50 &&
      element.getBoundingClientRect().top <= 256 &&
      element.getBoundingClientRect().left >= -50 &&
      element.getBoundingClientRect().left <= 256
    ) {
      activateSection(element);
      //Hide navBar when after scrolling by 1 second
      setTimeout(() => {
        nav.style.display = "none";
      }, 1000);
    }
  });
});
