const toggleDescriptionButtons = document.querySelectorAll(".toggle");

const calcButton = document.querySelector("#calc-button");
const calcDescription = document.querySelector("#calc-description");

const tpButton = document.querySelector("#tp-button");
const tpDescription = document.querySelector("#tp-description");

const easButton = document.querySelector("#eas-button");
const easDescription = document.querySelector("#eas-description");

const nacButton = document.querySelector("#nac-button");
const nacDescription = document.querySelector("#nac-description");

const rpsButton = document.querySelector("#rps-button");
const rpsDescription = document.querySelector("#rps-description");

const lpButton = document.querySelector("#lp-button");
const lpDescription = document.querySelector("#lp-description");

const cbButton = document.querySelector("#cb-button");
const cbDescription = document.querySelector("#cb-description");


function toggleDescription(button){
    switch(button){
        case "cb-button":
            showHideElements(cbButton, cbDescription);
            break
        case "calc-button": 
            showHideElements(calcButton, calcDescription);
            break;
        case "tp-button":
            showHideElements(tpButton, tpDescription);
            break;
        case "eas-button":
            showHideElements(easButton, easDescription);
            break;
        case "nac-button":
            showHideElements(nacButton, nacDescription);
            break;
        case "rps-button":
            showHideElements(rpsButton, rpsDescription);
            break;
        case "lp-button":
            showHideElements(lpButton, lpDescription);
            break;
    } 
}

function showHideElements(button, description){
    description.classList.toggle("hidden");
    if (button.textContent === "Read more"){
        button.textContent = "Read less"
    } else {
        button.textContent = "Read more"
    }
}


toggleDescriptionButtons.forEach(button => button.addEventListener("click", () => {
    toggleDescription(button.id)
}))