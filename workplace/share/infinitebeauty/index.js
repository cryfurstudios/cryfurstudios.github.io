// const form = document.querySelector('#calculator')
// const total = document.querySelector('#total')

// form.addEventListener('submit', (event) => {
//   // Prevent form submission
//   event.preventDefault()

//   const currentValue = 10000000;
//   // Get values
//   const highSalary = Number(document.querySelector('#highSalary').value)
//   const highShares = Number(document.querySelector('#highShares').value)
//   const highStrike = Number(document.querySelector('#highStrike').value)
//   const futureValue = Number(document.querySelector('#futureValue').value)

//   // Calculate cost
//   // let cost = (price + shipping) * quantity

//   let growth = (futureValue / currentValue) - 1;
//   console.log(growth);

//   let totalComp = highSalary + (Math.max(highShares * highStrike) * growth, 0);

//   // Format as currency
//   totalComp = Math.round(totalComp * 100) / 100
//     totalComp = totalComp.toFixed(2)

//   // Display total
//   total.value = totalComp
// })
