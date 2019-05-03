// With map(), filter() there is no loop needed, 
// and we no longer have to add values manually to an array. 
// All you need to do is define what you want to happen and return it. 




Array.prototype.map()

// The map() method is used to apply a function on every element in an array, returning a new array.
// You can think of map() as a for loop for transforming values.

let newArr = oldArr.map((val, index, arr) => {
  // return element to new Array
});

// newArr — the new array that is returned
// oldArr — the array to run the map function on
// callback — the function to execute on each element in the array, can take three arguments:
//// val — the current value being processed, part of the callback
//// index — the current index of the value being processed, part of the callback
//// arr — the original array, part of the callback




Array.prototype.filter()

// The filter() method returns a new array created from all elements that pass a test performed on the original array.
// You can think of filter() as a for loop for filtering in/out certain values from an array.
// Returning true keeps the element (adding it to the new array), returning false ditches it.
// *In ES6, remove the function brackets to indicate you want to return the value.

let newArr = oldArr.filter(callback);

// newArr — the new array that is returned
// oldArr — the array to run the filter function on
// callback — the function used to test each element of the oldArr, can take three arguments:
//// val — the current element of the array
//// index — the current index of the value being processed
//// arr — the original array




Array.prototype.reduce()

// The reduce() method applies a function to each element in an array, reducing the array to a single value.
// You can think of reduce() as a for loop for using the values of an array to create something new.
// It loops through our array and adds each value to a variable one at a time.

let result = arr.reduce(callback);

// Optionally, you can specify an initial value
let result = arr.reduce(callback, initValue);

let sum = arr.reduce((acc, val) => {
  return acc + val;
}, 100);

// *In ES6, remove the function brackets to indicate you want to return the value.
let sum = arr.reduce((acc, val) => acc + val, 100);

// result — the single value that is returned.
// arr — the array to run the reduce function on.
// initValue — If this initial value is not supplied, the 0th element is used as the initial value.
// callback — the function to execute on each element in the array, can take four arguments:
//// accumulator — accumulates all of the callback's returned values.
//// val — the current value being processed
//// index — the current index of the value being processed
//// arr — the original array




Chaining Array Methods

// Create three pure functions and use them with our chain. A pure function is one that given the same input, 
// will always return the same output without side effects. Pure functions only depend on their input arguments.

data = [
  {
    name: 'Butters',
    age: 3,
    type: 'dog'
  },
  {
    name: 'Lizzy',
    age: 6,
    type: 'dog'
  },
  {
    name: 'Red',
    age: 1,
    type: 'cat'
  },
  {
    name: 'Joey',
    age: 3,
    type: 'dog'
  },
];

// Check if an element is a dog. It takes our element as input and returns either true or false.
let isDog = (animal) => {
  return animal.type === 'dog';
}

// Multiply the age of an element by seven and returns only the age in dog years:
let dogYears = (animal) => {
  return animal.age * 7;
}

// Sum two numbers and returns the result:
let sum = (sum, animal) => {
  return sum + animal;
}

// chain the above pure functions together to add dogs' ages together in dog years:
let ages = data
  .filter(isDog)
  .map(dogYears)
  .reduce(sum);

// ages = 84



















Chaining Map, Filter, and Reduce










  // sidenote  
  (v % 2 === 0 ? v * 2 : v;)
// is the same thing as
if (v % 2 === 0) { return v * 2; } else { return v; }
// is the same thing as
// If the value divided by two has a remainder of zero, we’ll double the current value.
// If the remainder is not zero, we’ll return v or the current value unchanged.

