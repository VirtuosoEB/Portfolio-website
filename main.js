const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else{
        entry.target.classList.remove("show")
    }
  });
});

document.querySelectorAll(".fade-in").forEach(el => {
  observer.observe(el);
});

const sections = document.querySelectorAll("section");
const backgrounds = document.querySelectorAll("#bgContainer img");

const observer2 = new IntersectionObserver((entries) => {
  entries.forEach(entry => {

    if (entry.isIntersecting) {

      const index = [...sections].indexOf(entry.target);

      backgrounds.forEach(bg => bg.classList.remove("active"));
      backgrounds[index].classList.add("active");

    }

  });
}, {
  rootMargin: "-30% 0px -30% 0px",
  threshold: 0
});

sections.forEach(section => observer2.observe(section));

const speedbtn = document.getElementById("speedBtn");
const skillContainer = document.getElementById("skillContainer");

const caseStudies = document.querySelectorAll(".caseStudy");
caseStudies.forEach(el => {
    el.querySelector("button").addEventListener("click", () =>{
        el.style.display = "none";
    })
});

const projects = document.querySelectorAll(".project");
projects.forEach((el, index) => {
    el.querySelector(".viewCaseStudy").addEventListener("click", () =>{
        document.querySelectorAll(".caseStudy")[index].style.display = "block"
    })
});