const form = document.querySelector('[data-form]')
const input1 = document.querySelector('[name="first"]')
const input2 = document.querySelector('[name="second"]')

form.addEventListener('submit', event => {
  event.preventDefault()
  const firstValue = input1.value
  input1.value = input2.value.toUpperCase()
  input2.value = firstValue.toLowerCase()
})
