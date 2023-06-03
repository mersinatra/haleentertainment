window.addEventListener('DOMContentLoaded', (event) => {
    let sections = document.querySelectorAll('section');
    
    window.addEventListener('scroll', () => {
        sections.forEach(section => {
            let position = section.getBoundingClientRect().top;
            let screenPosition = window.innerHeight / 1.3;
    
            if (position < screenPosition) {
                section.classList.add('fade-in');
            } else {
                section.classList.remove('fade-in');
            }
        });
    });
});