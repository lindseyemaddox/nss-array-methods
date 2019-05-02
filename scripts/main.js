
const outEl = document.querySelector("#output")
outEl.innerHTML = "<h1>Active Businesses - <code>forEach()</code></h1>"

businesses.forEach(business => {
  outEl.innerHTML += `
    <h2>${business.companyName}</h2>
    <section>
      ${business.addressFullStreet}
    </section>
    <section>
      ${business.addressCity}<span>, </span>${business["addressStateCode"]} ${business["addressZipCode"]}
    </section>
  `
  outEl.innerHTML += "<hr/>"
});

////////////////////////////// exercise - DONE //////////////////////////////
// Add another section sibling to the current one and use object dot notation 
// to display each company's city. Use square bracket notation to display the 
// state code. Use dynamic square bracket notation to add the zip code.


outEl.innerHTML += "<h1>New York Businesses - <code>filter()</code></h1>";

const newYorkBusinesses = businesses.filter(business => {
  let inNewYork = false;
  if (business.addressStateCode === "NY") {
    inNewYork = true;
  }
  return inNewYork;
});

console.log("newYorkBusinesses", newYorkBusinesses);

outEl.innerHTML += "<h1>Purchasing Agents - <code>map()</code></h1>";

// Using map(), extract the purchasing agent object from each business and store it in a new array

const agents = businesses.map(business => {
  return business.purchasingAgent
})

agents.forEach(agent => {
  outEl.innerHTML += `<p>${agent.nameFirst} ${agent.nameLast}</p>`;
  outEl.innerHTML += "<hr class='agents'/>";
});

function showBusiness(business) {
  return `<div>${business.companyName}</div>`
}

let newList = businesses.map(showBusiness);
outEl.innerHTML += newList.join("<hr style='border-color:yellow; border-width:3px;' />");


////////////////////////////// exercise - DONE //////////////////////////////
// Use filter() to create another array named manufacturingBusinesses that will 
// contain all businesses in the manufacturing industry. Display those to the DOM.

const manufacturers = businesses.filter((poop) => {
  if (poop.companyIndustry === "Manufacturing") {
    return `<div>${poop.companyName}</div>`
  };
})
console.log("manufacturers", manufacturers);

////////////////////////////// IN PROGRESSm - exercise //////////////////////////////
// Instead of just returning the purchasing agent object, return a new object 
// that has the full name of the purchasing agent, the company name, and the 
// phone number. The data structure is shown below. Use that new data structure 
// to display the agent with their company and phone number.

function agentObject(agent, company, phone) {
  return `${agent.purchasingAgent.nameFirst}
  ${agent.purchasingAgent.nameLast}
  ${company.companyName}
  ${phone.phoneWork}`
}


let makeAgentObject = businesses.map(agentObject);
outEl.innerHTML += makeAgentObject.join("<hr style='border-color:red;border-style:dashed;' />")

console.log(makeAgentObject);


/*
{
  "fullName": "Kaylee Gutkowski",
  "company": "Highnix",
  "phoneNumber": "235.266.6278"
}
*/

outEl.innerHTML += "<h1>Candies - <code>find()</code></h1>";

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
console.log(firstCheapCandy)

document
  .querySelector("#companySearch")
  .addEventListener("keypress", keyPressEvent => {
    if (keyPressEvent.charCode === 13) {
      const foundBusiness = businesses.find(
        business =>
          business.companyName.includes(keyPressEvent.target.value)
      );
      outEl.innerHTML = `
        <h2>${foundBusiness.companyName}</h2>
        <section>${foundBusiness.addressFullStreet}</section>
        <section>
          ${foundBusiness.addressCity},
          ${foundBusiness.addressStateCode}
          ${foundBusiness.addressZipCode}
        </section>
      `;
    }
  });

////////////////////////////// TODO - exercise //////////////////////////////
// 1. Refactor your code to search for purchasing agents instead. If the search 
//     text is found in the first name of any purchasing agent, show that agent.
// 2. Refactor your code so that if the search text is found in the first name, 
//     or last name, of any purchasing agent, show that agent.

outEl.innerHTML += "<h1>Calculate Order Summary - <code>reduce()</code></h1>";

let totalOrders = business.orders.reduce(
  (currentTotal, nextValue) => currentTotal += nextValue,
  0   //  <--the second argument for the reduce method
)

outEl.innerHTML += `
  <h2>${business.companyName}($${totalOrders})</h2>
  <section>${business.addressFullStreet}</section>
  <section>
    ${business.addressCity},
    ${business.addressStateCode}
    ${business.addressZipCode}
  </section>
`;
outEl.innerHTML += "<hr/>";


////////////////////////////// TODO - exercise //////////////////////////////
// 1. Use the reduce method on the following array to determine how much
// total rain fell last month.

const monthlyRainfall = [23, 13, 27, 20, 20, 31, 33, 26, 19, 12, 14, 12, 10]

const totalRainfall = monthlyRainfall.reduce()

console.log(totalRainfall)


// 2. Use the reduce method on the following array to build a sentence.

const words = ["The", "quick", "brown", "fox", "jumped", "over", "the", "lazy", "dog"]

const sentence = words.reduce()

console.log(sentence)