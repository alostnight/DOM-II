// Your code goes here

//mouseenter
const busPic = document.querySelector("img");
busPic.addEventListener("mouseenter", () => {
  busPic.style.transform = "scale(1.25)";
  busPic.style.transition = "all 0.5s";
});

//mouseleave
busPic.addEventListener("mouseleave", () => {
  busPic.style.transform = "scale(1)";
});

//mouseover
const desCon = document.querySelectorAll(".destination");
desCon.forEach(content => {
  content.addEventListener("mouseover", () => {
    content.style.transition = "color 1";
    if (content.style.color === "blue") {
      content.style.color = "red";
    } else {
      content.style.color = "blue";
    }
  });
});

//click
const header2 = document.querySelector("h2");
header2.addEventListener("click", () => {
  header2.style.backgroundColor = "blue";
});

//scroll
let backgroundColorChange = document.querySelector(".main-navigation");
window.addEventListener("scroll", () => {
    backgroundColorChange.style.backgroundColor = "red"
});

//doubleclick
const midImg = document.querySelector('.img-content');
midImg.addEventListener('dblclick', e => {
e.target.style.border = '3px solid blue';
})

//keydown
const keyDown = document.querySelector('body');
keyDown.addEventListener('keydown', () => {
  keyDown.style.backgroundColor = 'red';
});

//keyup
const kUp = document.querySelector('body');
kUp.addEventListener('keyup', () => {
  kUp.style.backgroundColor = 'white';
});

//load
window.addEventListener("load", () => {
  alert("Oh, It's you, Read on.");
});

//wheel
let button1 = document.querySelector('.btn')
    button1.addEventListener('wheel', (event) => {
        alert('You clicked a button')
    });



//stoppropagation
const body = document.querySelector("body");
body.addEventListener("click", () => {
  body.style.backgroundColor = "green";
});

const desText = document.querySelector(".content-pick");
desText.addEventListener("click", e => {
  desText.style.background = "grey";
  e.stopPropagation();
});

//preventDefault
const stopLinks = document.querySelectorAll(".nav-link");
stopLinks.forEach(link => {
  link.addEventListener("click", event => {
    event.preventDefault();
  });
});
