
console.log("hello, solar system");

const planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"]
const planetsCase = document.querySelector("#planets")

// Use the forEach method to add the name of each planet to a section element 
// in your HTML with an id of "planets". Use string templates to construct the DOM elements.

// Use the map method to create a new array where the first letter of each planet is capitalized. 
// Use the `toUpperCase()` method on strings. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase

// Use the filter method to create a new array that contains planets with the letter 'e'. 
// Use the `includes()` method on strings.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes

let index = 0;

planets.map(planet => {
  let planets = planet.charAt(0).toUpperCase() + planet.slice(1);
});

const planetsE = planets.filter(planet => planet.includes("e"));
console.log(planetsE, "planets with an E");

planetsCase.innerHTML += planetsE.join("<span>, </span>");


// HELP - can't seem to get the planets capitalized ;( 
// I understand that .toUpperCase() needs to go on the individual planet strings, 
// but anywhere I put it makes the console angry. 
