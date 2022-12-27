//Initially set variables
let webpageSection = document.getElementById("websiteContainer")
let javascriptSection = document.getElementById("javascriptContainer");
let javascriptProjectPage = document.getElementById("javascriptProjects");
let javascriptButton = document.getElementById("javascriptButton");
let javascriptButtonText = document.getElementById("javascriptButtonText");
let returnButton = document.getElementById("returnButtonText");

//Javascript button effects
function OverJsButton(button) {
    button.target.style.fontSize = "2rem";
    button.target.style.cursor = "pointer";
}

function OffJsButton(button) {
    button.target.style.fontSize = "1.5rem";
}

javascriptButton.addEventListener("mouseover", OverJsButton);
javascriptButton.addEventListener("mouseleave", OffJsButton);

//Javascript button action
function revealPage() {
    javascriptProjectPage.style.display = "flex";
    webpageSection.style.display = "none";
    javascriptSection.style.display = "none";
}

function returnPage() {
    javascriptProjectPage.style.display = "none";
    webpageSection.style.display = "flex";
    javascriptSection.style.display = "flex";
}

javascriptButton.addEventListener("click", revealPage);
returnButton.addEventListener("click", returnPage);
