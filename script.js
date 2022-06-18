const descriptionButtons = document.querySelectorAll(".toggle")
const calcReadMore = document.querySelector("#calculator-read-more");
const calcReadLess = document.querySelector("#calculator-read-less");
const calcDescription = document.querySelector("#calculator-description");

const tribPageReadMore = document.querySelector("#tp-read-more");
const tribPageReadLess = document.querySelector("#tp-read-less");
const tribPageDescription = document.querySelector("#tp-description");

const easReadMore = document.querySelector("#eas-read-more");
const easReadLess = document.querySelector("#eas-read-less");
const easDescription = document.querySelector("#eas-description");

const nacReadMore = document.querySelector("#nac-read-more");
const nacReadLess = document.querySelector("#nac-read-less");
const nacDescription = document.querySelector("#nac-description");

const rpsReadMore = document.querySelector("#rps-read-more");
const rpsReadLess = document.querySelector("#rps-read-less");
const rpsDescription = document.querySelector("#rps-description");

const lpReadMore = document.querySelector("#lp-read-more");
const lpReadLess = document.querySelector("#lp-read-less");
const lpDescription = document.querySelector("#lp-description");


function toggleDescription(buttonName){
    switch(buttonName){
        case "calculator-read-more": 
        case "calculator-read-less":
            showHideElements(calcReadMore, calcReadLess, calcDescription);
            break;
        case "tp-read-more":
        case "tp-read-less":
            showHideElements(tribPageReadMore, tribPageReadLess, tribPageDescription);
            break;
        case "eas-read-more":
        case "eas-read-less":
            showHideElements(easReadMore, easReadLess, easDescription);
            break;
        case "nac-read-more":
        case "nac-read-less":
            showHideElements(nacReadMore, nacReadLess, nacDescription);
            break;
        case "rps-read-more":
        case "rps-read-less":
            showHideElements(rpsReadMore, rpsReadLess, rpsDescription);
            break;
        case "lp-read-more":
        case "lp-read-less":
            showHideElements(lpReadMore, lpReadLess, lpDescription);
            break;
    } 
}

function showHideElements(readMoreButton, readLessButton, descriptionText){
    if (readMoreButton.style.display === "block" || readMoreButton.style.display === ""){
        readMoreButton.style.display = "none";
        descriptionText.style.display = "block"; 
        readLessButton.style.display = "block";
        readLessButton.scrollIntoView(false)
    } else {
        readMoreButton.style.display = "block";
        descriptionText.style.display = "none"; 
        readLessButton.style.display = "none";
    }
}

descriptionButtons.forEach(button => button.addEventListener("click", () => {
    toggleDescription(button.id)
}))