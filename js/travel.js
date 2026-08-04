const flightTab = document.getElementById("flight-tab");
const trainTab = document.getElementById("train-tab");
const busTab = document.getElementById("bus-tab");

const flightSection = document.getElementById("flight-section");
const trainSection = document.getElementById("train-section");
const busSection = document.getElementById("bus-section");

flightTab.addEventListener("click", function () {

    flightSection.style.display = "block";
    trainSection.style.display = "none";
    busSection.style.display = "none";

    flightTab.classList.add("active");
    trainTab.classList.remove("active");
    busTab.classList.remove("active");

});

trainTab.addEventListener("click", function () {

    flightSection.style.display = "none";
    trainSection.style.display = "block";
    busSection.style.display = "none";

    flightTab.classList.remove("active");
    trainTab.classList.add("active");
    busTab.classList.remove("active");

});

busTab.addEventListener("click", function () {

    flightSection.style.display = "none";
    trainSection.style.display = "none";
    busSection.style.display = "block";

    flightTab.classList.remove("active");
    trainTab.classList.remove("active");
    busTab.classList.add("active");

});