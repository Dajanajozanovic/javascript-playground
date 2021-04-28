const form = document.querySelector('[data-form]')
const box = document.querySelector('[data-box]')
const input = document.querySelector('[name="class"]')
const output = document.querySelector('[data-output]')

form.addEventListener('submit', event => {
  event.preventDefault()
  box.className = 'box ' + input.value

  output.innerText = input.value.toUpperCase()
  input.value = ''
  input.focus()
})
