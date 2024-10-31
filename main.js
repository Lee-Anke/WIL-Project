// Initialize ScrollReveal
const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
  delay: 500,
};

// ScrollReveal for Header Section, About Section and Contact Section
ScrollReveal().reveal(".header__container img", {
  duration: 1000,
});
ScrollReveal().reveal(".header__container h1, .about__content h3", scrollRevealOption);
ScrollReveal().reveal(".header__container p, .about__content .section__header", scrollRevealOption);
ScrollReveal().reveal(".header__btns, .about__content .section__subheader, .about__content .about__grid", scrollRevealOption);

ScrollReveal().reveal(".about__image img, .contact__image img", {
  ...scrollRevealOption,
  origin: "left",
});

const swiper = new Swiper(".swiper", {
  loop: true,
  slidesPerView: "auto",
  centeredSlides: true,
  spaceBetween: 30,
});

// Initialize ScrollReveal
const scrollReveal = ScrollReveal();

// ScrollReveal for Value Section
scrollReveal.reveal('.value__container', {
  distance: '50px',
  origin: 'bottom',
  duration: 1000,
  delay: 400,
});

// ScrollReveal for Properties Section
scrollReveal.reveal('#property', {
  distance: '50px',
  origin: 'bottom',
  duration: 1000,
  delay: 500,
});

// ScrollReveal for Individual Property Cards
scrollReveal.reveal('.property-card', {
  distance: '50px',
  origin: 'bottom',
  duration: 1000,
  delay: 400,
  interval: 200, // Applies staggered effect
});


// Accordion functionality
const accordionItems = document.querySelectorAll('.value__accordion-item');

const toggleItem = (item) => {
  const accordionContent = item.querySelector('.value__accordion-content');

  if (item.classList.contains('accordion-open')) {
    accordionContent.style.height = 0;
    item.classList.remove('accordion-open');
  } else {
    accordionContent.style.height = accordionContent.scrollHeight + 'px';
    item.classList.add('accordion-open');
  }
};

// Iterate over each accordion item to add click event listeners
accordionItems.forEach((item) => {
  const accordionHeader = item.querySelector('.value__accordion-header');

  accordionHeader.addEventListener('click', () => {
    const openItem = document.querySelector('.accordion-open');
    toggleItem(item);

    // Close the previously open item if it's not the same as the clicked one
    if (openItem && openItem !== item) {
      toggleItem(openItem);
    }
  });
});


// search and filtering
// Function to filter properties
function filterProperties() {
  const location = document.getElementById("location").value.toLowerCase();
  const priceRange = document.getElementById("priceRange").value;
  const propertyType = document.getElementById("propertyType").value.toLowerCase();

  const [minPrice, maxPrice] = priceRange ? priceRange.split("-").map(Number) : [0, Infinity];

  const filteredProperties = properties.filter((property) => {
    const locationMatch = location === "" || property.location.toLowerCase() === location;
    const priceMatch = property.price >= minPrice && property.price <= maxPrice;
    const typeMatch = propertyType === "" || property.type.toLowerCase() === propertyType;

    return locationMatch && priceMatch && typeMatch;
  });

  displayProperties(filteredProperties);
}

// Function to display filtered properties
function displayProperties(property) {
  const resultsContainer = document.getElementById("results");
  resultsContainer.innerHTML = ""; // Clear previous results

  properties.forEach((property) => {
    const propertyDiv = document.createElement("div");
    propertyDiv.classList.add("property");
    propertyDiv.innerHTML = `
      <p>Location: ${property.location}</p>
      <p>Price: $${property.price}</p>
      <p>Type: ${property.type}</p>
    `;
    resultsContainer.appendChild(propertyDiv);
  });
}

// Add event listener to the filter button
document.getElementById("filterButton").addEventListener("click", filterProperties);


// Toggle map visibility
function toggleMap(button) {
  const mapContainer = button.nextElementSibling;

  if (mapContainer.style.display === "none") {
      mapContainer.style.display = "block";
      button.textContent = "Hide Map";
  } else {
      mapContainer.style.display = "none";
      button.textContent = "Show Map";
  }
}

/*=============== SHOW HIDE LOGIN & CREATE ACCOUNT ===============*/
const loginAcessRegister = document.getElementById('loginAccessRegister'),
      buttonRegister = document.getElementById('loginButtonRegister'),
      buttonAccess = document.getElementById('loginButtonAccess')

buttonRegister.addEventListener('click', () => {
   loginAcessRegister.classList.add('active')
})

buttonAccess.addEventListener('click', () => {
   loginAcessRegister.classList.remove('active')
})


