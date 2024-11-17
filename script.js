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