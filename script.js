
// Smooth scroll animation

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function(e){

        e.preventDefault();

        document.querySelector(this.getAttribute("href")).scrollIntoView({

            behavior:"smooth"

        });

    });

});


// Simple reveal animation

const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {

    sections.forEach(section => {

        const top = section.getBoundingClientRect().top;

        if(top < window.innerHeight - 100){

            section.style.opacity = "1";
            section.style.transform = "translateY(0)";

        }

    });

});
