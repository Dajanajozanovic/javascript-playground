const form = document.querySelector('[data-form]')
const box = document.querySelector('[data-box]')
const input = document.querySelector('[name="class"]')

form.addEventListener('submit', event => {
  event.preventDefault()
  box.className = 'box ' + input.value
  input.value = ''
  input.focus()
})
