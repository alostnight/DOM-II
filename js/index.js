// Your code goes here
const busPic = document.querySelector('img');

busPic.addEventListener('mouseenter', () => {
    busPic.style.transform = "scale(1.25)"
    busPic.style.transition = "all 0.5s"
});

busPic.addEventListener('mouseleave', () => {
    busPic.style.transform = "scale(1)";
})

const desCon = document.querySelectorAll('.destination');
desCon.forEach(content => {
    content.addEventListener('mouseover', () => {
        content.style.transition = 'color 1';
        if (content.style.color === 'blue') {
            content.style.color = 'red';
        } else {
            content.style.color = 'blue';
        }
    })
});


const header2 = document.querySelector('h2');
header2.addEventListener('click', () => {
  header2.style.backgroundColor = 'blue';
});


