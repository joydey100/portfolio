// local reviews data
export const reviews = [
  {
    id: 1,
    name: "susan smith",
    job: "web developer",
    img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
    text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    name: "anna johnson",
    job: "web designer",
    img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
    text: "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
  },
  {
    id: 3,
    name: "peter jones",
    job: "intern",
    img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
    text: "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
  },
  {
    id: 4,
    name: "bill anderson",
    job: "CEO",
    img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
    text: "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
  },
];

// Initializing Elements
const dark = document.querySelector(".dark-mode");
const lightIcon = `<i class="fas fa-sun" aria-hidden="true"></i>`;
const darkIcon = `<i class="fas fa-moon" aria-hidden="true"></i>`;
const bar = `<i class="fas fa-bars" aria-hidden="true"></i>`;
const close = `<i class="fas fa-times" aria-hidden="true"></i>`;
const logo = document.querySelector(".logo");
const toggle = document.querySelector(".toggle");
const menu = document.querySelector(".menu");
const leftIcon = document.querySelector(".left-icon");
const rightIcon = document.querySelector(".right-icon");
let authorImg = document.querySelector(".author-img");
let authorName = document.querySelector(".author-name");
let authorDesignation = document.querySelector(".author-designation");
let authorText = document.querySelector(".author-text");
const scroll = document.querySelector(".scroll");
let count = 0;

// Function for Change Review
const reviewHandler = (element) => {
  authorImg.src = element.img;
  authorDesignation.innerText = element.job;
  authorName.innerText = element.name;
  authorText.innerText = element.text;
};

// Dark Mode Event Listener
dark.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme");
  if (document.body.classList.contains("dark-theme")) {
    dark.innerHTML = lightIcon;
    logo.src = "images/logo-1.png";
  } else {
    dark.innerHTML = darkIcon;
    logo.src = "images/logo.png";
  }
});

// Toggle Event Listener
toggle.addEventListener("click", () => {
  menu.classList.toggle("active");
  if (menu.classList.contains("active")) {
    toggle.innerHTML = close;
  } else {
    toggle.innerHTML = bar;
  }
});

// Testimonial Add Event Listener
leftIcon.addEventListener("click", () => {
  count--;
  if (count < 0) {
    count = reviews.length - 1;
    let element = reviews[count];
    reviewHandler(element);
  } else {
    let element = reviews[count];
    reviewHandler(element);
  }
});

rightIcon.addEventListener("click", () => {
  count++;
  if (count > reviews.length - 1) {
    count = 0;
    let element = reviews[count];
    reviewHandler(element);
  } else {
    let element = reviews[count];
    reviewHandler(element);
  }
});

// Scroll Add Event Listener
window.addEventListener("scroll", () => {
  if (window.scrollY > 90) {
    scroll.classList.add("active");
  } else {
    scroll.classList.remove("active");
  }
});
scroll.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
