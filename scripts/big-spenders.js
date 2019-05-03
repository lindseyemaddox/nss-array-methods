
console.log("hello big spenders");

const outEl = document.querySelector("#output")

// Use the filter method to get all the big spenders in the main array into a new one.

const bigSpenders = businesses.filter(business => {
  const isBigSpender = business.orders.find(amount => amount > 9000)
  if (isBigSpender) {
    return isBigSpender;
    output.innerHTML += `<h3>${bigSpenders(amount)}</h3>`;
  }
  console.log(business.companyName, "is a Big Spender");
  ;
});
console.log("Big spenders: ", bigSpenders);
