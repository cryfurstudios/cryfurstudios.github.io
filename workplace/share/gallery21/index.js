const form = document.querySelector('#calculator')
const total = document.querySelector('#total')

form.addEventListener('submit', (event) => {
  // Prevent form submission
  event.preventDefault()

  // Get values
  const salary = Number(document.querySelector('#salary').value)
  //const sha = Number(document.querySelector('#tax').value)
  const shares = Number(document.querySelector('#shares').value)
  const MV = Number(document.querySelector('#MV').value)

  // Calculate cost
  let cost = salary + (shares * MV)

  /* Apply discount
  if (quantity >= 100) {
    cost *= 0.95
  }

  // Apply tax
  cost *= 1 + tax / 100
*/
  // Format as currency
  cost = Math.round(cost * 100) / 100
  cost = cost.toFixed(2)

  // Display total
  total.value = cost
})
