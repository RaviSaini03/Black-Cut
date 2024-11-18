// for flexing section
function animateNumber(elementId, start, end, duration) {
    const element = document.getElementById(elementId);
    const range = end - start;
    const increment = range/(duration/10);
    let current = start;

    const timer = setInterval(() => {
        current += increment;
        if(current >= end){
            current = end;
            clearInterval(timer)
        }
        element.textContent = Math.floor(current);
    }, 10)
}
animateNumber('totalVisitors', 0, 78902, 3000)
animateNumber('totalUsers', 0, 9994, 3000)
animateNumber('totalCaps', 0, 15, 3000)

document.addEventListener("DOMContentLoaded", () => {
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if(entry.isIntersecting) {
                animateNumber('totalVisitors',0, 78902, 3000);
                animateNumber('totalUsers', 0, 9994, 3000);
                animateNumber('totalCaps', 0, 15, 3000)
                observer.disconnect();
            }
        });
    });
    observer.observe(document.getElementById('totalVisitors'));
    observer.observe(document.getElementById('totalUsers'));
    observer.observe(document.getElementById('totalCaps'));
});

// For feedBack Section to slide the comments automaticaly

let currentslide = 0;
const sliderContainer = document.querySelector('.feedback');
const sections = document.querySelectorAll('.comment');
const allSections = sections.length - 2;

let slideIntervel;

function autoslide() {

    const displacement = currentslide * 33.33;
    sliderContainer.style.transform = `translateX(-${displacement}vw)`;
    currentslide = (currentslide + 1)%allSections;

}

function startAutoSlide() {
    slideIntervel = setInterval(autoslide, 3000);
} 

function stopAutoSlide() {
    clearInterval(slideIntervel);
}

sliderContainer.addEventListener('mouseover', stopAutoSlide);
sliderContainer.addEventListener('mouseout', startAutoSlide);

startAutoSlide();

