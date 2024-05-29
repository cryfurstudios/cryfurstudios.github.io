const form = document.querySelector("#calculator");
const total = document.querySelector("#total");

form.addEventListener("submit", (event) => {
  // Prevent form submission
  event.preventDefault();

  // Get values
  const years = Number(document.querySelector("#years").value);
  const salary = Number(document.querySelector("#salary").value);
  const growth = Number(document.querySelector("#growth").value);
  const shares = 4000;
  const shareValue = 0.5;
  const growthDecimal = growth / 100; 

  console.log(salary, years, growth, shares);
  console.log(growthDecimal);
  console.log((1 + growthDecimal) ** years);
  // Calculate cost
  // let cost = Wagecalulator(salary, numberOfShares , strikePrice)

  // Format as currency
  // cost = Math.round(cost * 100) / 100
  // cost = cost.toFixed(2)

  let totalComp =
    salary + shares * shareValue * years * ((1 + growthDecimal) ** years);
  totalComp = Math.round(totalComp * 100) / 100
   totalComp = totalComp.toFixed(2)
  // Display total
  total.value = totalComp;
});
function Wagecalulator(salary, shares, strikeprice) {
  //Total cominsation
  return salary + shares * strikeprice;
}
console.log(Wagecalulator(90000, 1000, 4));
