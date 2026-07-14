// ==============================
// TEAM NEXUS JAVASCRIPT
// Interactive Features
// ==============================



// Mobile Menu Toggle

const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelector("nav");


menuBtn.addEventListener("click", () => {

    nav.classList.toggle("open");

});





// Close mobile menu after clicking a link

const navLinks = document.querySelectorAll("nav a");


navLinks.forEach(link => {


    link.addEventListener("click", () => {

        nav.classList.remove("open");

    });


});







// ==============================
// Navbar Scroll Effect
// ==============================


const navbar = document.querySelector(".navbar");


window.addEventListener("scroll", () => {


    if(window.scrollY > 50){

        navbar.style.padding = "12px 30px";

        navbar.style.background =
        "rgba(45,45,45,0.9)";


    }

    else {


        navbar.style.padding = "18px 35px";


        navbar.style.background =
        "rgba(45,45,45,0.75)";


    }



});








// ==============================
// Scroll Reveal Animation
// ==============================


const revealElements =
document.querySelectorAll(".reveal");



const observer =
new IntersectionObserver(
(entries)=>{


entries.forEach(entry=>{


    if(entry.isIntersecting){


        entry.target.classList.add("show");


    }


});


},
{

threshold:0.2

}

);




revealElements.forEach(element=>{

    observer.observe(element);

});









// ==============================
// Mouse Parallax Effect
// ==============================


const heroImage =
document.querySelector(".hero-image");



document.addEventListener("mousemove",(e)=>{


    let x =
    (window.innerWidth / 2 - e.clientX) / 40;


    let y =
    (window.innerHeight / 2 - e.clientY) / 40;



    if(heroImage){


        heroImage.style.transform =
        `translate(${x}px, ${y}px)`;


    }



});







// ==============================
// Active Navigation Highlight
// ==============================



const sections =
document.querySelectorAll("section");




window.addEventListener("scroll",()=>{


let current="";



sections.forEach(section=>{


const sectionTop =
section.offsetTop - 150;



if(scrollY >= sectionTop){

current = section.getAttribute("id");

}


});



navLinks.forEach(link=>{


link.classList.remove("active");


if(link.getAttribute("href")
==
"#"+current){


link.classList.add("active");


}



});


});

