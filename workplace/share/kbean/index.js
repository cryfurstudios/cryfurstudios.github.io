const form = document.querySelector('#calculator')
const total = document.querySelector('#total')

form.addEventListener('submit', (event) => {
  // Prevent form submission
  event.preventDefault()

  // Get values
  const salary = Number(document.querySelector('#salary').value)
  const shares = Number(document.querySelector('#shares').value)
  const strikePrice = Number(document.querySelector('#strikePrice').value)
   const preferedPrice = Number(document.querySelector('#preferedPrice').value)
  const growth = Number(document.querySelector('#growth').value)

  // Calculate total compensation
  let totalComp = salary + (shares * ((preferedPrice * ((growth / 100) + 1)) -strikePrice) * (growth / 100))

  // Format as currency
  output = Math.round(totalComp * 100) / 100
  output = output.toFixed(2)

  // Display total
  total.value = output
})