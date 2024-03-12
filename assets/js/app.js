// Nav hamburgerburger selections
const burger = document.querySelector("#burger-menu");
const ul = document.querySelector("nav ul");
const nav = document.querySelector("nav");

// Scroll to top selection
const scrollUp = document.querySelector("#scroll-up");

// Select nav links
const navLink = document.querySelectorAll(".nav-link");

// Hamburger menu function
burger.addEventListener("click", () => {
  ul.classList.toggle("show");
});

// Close hamburger menu when a link is clicked
navLink.forEach((link) =>
  link.addEventListener("click", () => {
    ul.classList.remove("show");
  })
);

// scroll to top functionality
scrollUp.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});

// word shuffler
document.querySelector(".uppercase").onmouseover = event => {  
  setInterval(() => {
      
        const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
        event.target.innerText = event.target.innerText.split("").map(letter => letters[Math.floor(Math.random() * 26)]).join("");
    }, 80);
}
document.querySelector(".symb").onmouseover = event => {
  
  setInterval(() => {
      
        const letters = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '-', '+', '=', '~', '`', '\"', '\\', '\;', '\:', '\{', '\}', '\<', '\?', '.', ','];
        event.target.innerText = event.target.innerText.split("").map(letter => letters[Math.floor(Math.random() * 26)]).join("");
    }, 80);
}
document.querySelector(".nums").onmouseover = event => {
  
  setInterval(() => {
      
        const letters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9','0', '1', '2', '3', '4', '5', '6', '7', '8', '9','0', '1', '2', '3', '4', '5', '6', '7'];
        event.target.innerText = event.target.innerText.split("").map(letter => letters[Math.floor(Math.random() * 26)]).join("");
    }, 80);
}
document.querySelector(".lowercase").onmouseover = event => {
  
  setInterval(() => {
      
    const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

        event.target.innerText = event.target.innerText.split("").map(letter => letters[Math.floor(Math.random() * 26)]).join("");
    }, 80);
}


//funny text
document.querySelector(".funnyText").onmouseover = event => {

  setInterval(() => {
  var typed = new Typed(".pro-text", {
    strings: [
      "Ethical Hacker",
      "Frontend Developer",
      "Programmer",
      "Linux Administrator",
      "Photo Editor",
      "Blockchain Developer"
    ],
    typeSpeed: 100,   
    backSpeed: 100,   
    backDelay: 1000,  
    loop: true        
  });
  },100000000000);
}
