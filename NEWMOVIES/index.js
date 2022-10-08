const btnEl = document.querySelector(".btn");
const closeIconEl = document.querySelector(".close-icon");
const trailerContainerEl = document.querySelector(".trailer-container");
const videoEl = document.querySelector("video");

const btn2El = document.querySelector(".btn2");
const closeIcon2El = document.querySelector(".close-icon2");
const trailerContainer2El = document.querySelector(".trailer-container2");
const video2El = document.querySelector(".video2");

const btn3El = document.querySelector(".btn3");
const closeIcon3El = document.querySelector(".close-icon3");
const trailerContainer3El = document.querySelector(".trailer-container3");
const video3El = document.querySelector(".video3");

const btn4El = document.querySelector(".btn4");
const closeIcon4El = document.querySelector(".close-icon4");
const trailerContainer4El = document.querySelector(".trailer-container4");
const video4El = document.querySelector(".video4");

const btn5El = document.querySelector(".btn5");
const closeIcon5El = document.querySelector(".close-icon5");
const trailerContainer5El = document.querySelector(".trailer-container5");
const video5El = document.querySelector(".video5");

const btn6El = document.querySelector(".btn6");
const closeIcon6El = document.querySelector(".close-icon6");
const trailerContainer6El = document.querySelector(".trailer-container6");
const video6El = document.querySelector(".video6");
/* removes the class of active from the element*/
btnEl.addEventListener("click", ()=>{
    trailerContainerEl.classList.remove("active");
});

closeIconEl.addEventListener("click", ()=>{
    trailerContainerEl.classList.add("active");
    videoEl.pause();
    videoEl.currentTime = 0;
});

btn2El.addEventListener("click", ()=>{
    trailerContainer2El.classList.remove("active");
});

closeIcon2El.addEventListener("click", ()=>{
    trailerContainer2El.classList.add("active");
    video2El.pause();
    video2El.currentTime = 0;
});

btn3El.addEventListener("click", ()=>{
    trailerContainer3El.classList.remove("active");
});

closeIcon3El.addEventListener("click", ()=>{
    trailerContainer3El.classList.add("active");
    video3El.pause();
    video3El.currentTime = 0;
});

btn4El.addEventListener("click", ()=>{
    trailerContainer4El.classList.remove("active");
});

closeIcon4El.addEventListener("click", ()=>{
    trailerContainer4El.classList.add("active");
    video4El.pause();
    video4El.currentTime = 0;
});

btn5El.addEventListener("click", ()=>{
    trailerContainer5El.classList.remove("active");
});

closeIcon5El.addEventListener("click", ()=>{
    trailerContainer5El.classList.add("active");
    video5El.pause();
    video5El.currentTime = 0;
});

btn6El.addEventListener("click", ()=>{
    trailerContainer6El.classList.remove("active");
});

closeIcon6El.addEventListener("click", ()=>{
    trailerContainer6El.classList.add("active");
    video6El.pause();
    video6el.currentTime = 0;
});