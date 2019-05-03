
console.log("hello, solar sysstem");

const planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"]
const planetsCase = document.querySelector("#planets")

// Use the forEach method to add the name of each planet to a section element 
// in your HTML with an id of "planets". Use string templates to construct the DOM elements.

// Use the map method to create a new array where the first letter of each planet is capitalized. 
// Use the `toUpperCase()` method on strings. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase

// Use the filter method to create a new array that contains planets with the letter 'e'. 
// Use the `includes()` method on strings.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes


planets.map(planet => {
    let planets = planet.toUpperCase()
        .charAt(0) + planet.slice(1);
    planetsCase.innerHTML += `<p>${planet}</p>`
});


const planetsE = planets.filter(planet => planet.includes("e"));
console.log(planetsE, "planets with an E");




