
console.log("array of sunshine");

const outEl = document.querySelector("#output")
outEl.innerHTML = "<h1>Active Businesses</h1>"

businesses.forEach(business => {
  // console.log(business);
  outEl.innerHTML += `
    <h2>${business.companyName}</h2>
    <section>
      ${business.addressFullStreet}
    </section>
  `
  outEl.innerHTML += "<hr/>"
});


outEl.innerHTML += "<h1>New York Businesses</h1>";

const newYorkBusinesses = businesses.filter(business => {
  let inNewYork = false;
  if (business.addressStateCode === "NY") {
    inNewYork = true;
  }
  return inNewYork;
});

console.log(newYorkBusinesses);


outEl.innerHTML += "<h1>Purchasing Agents</h1>";

// Using map(), extract the purchasing agent object from each business and store it in a new array

const agents = businesses.map(business => {
  return business.purchasingAgent
})

console.table(agents)

agents.forEach(agent => {
  outEl.innerHTML += `<h2>${agent.nameFirst} ${agent.nameLast}</h2>`;
  outEl.innerHTML += "<hr/>";
});



function showBusiness(business) {
  return `<div>${business.companyName}</div>`
}

let newList = businesses.map(showBusiness);
outEl.innerHTML += newList.join("<hr />");


const candies = [
  {
    name: "Lollipop",
    price: 2.99
  },
  {
    name: "Tootsie Roll",
    price: 1.49
  },
  {
    name: "Sugar Daddy",
    price: 2.49
  }
]

const firstCheapCandy = candies.find(candy => candy.price < 2.00)

