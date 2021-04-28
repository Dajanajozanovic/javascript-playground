const box = document.querySelector('[data-box]')
const form = document.querySelector('[data-form]')
const input = document.querySelector('[name="color"]')

form.addEventListener('submit', event => {
  event.preventDefault()
  const color = input.value
  box.style.backgroundColor = color
  input.value = ''
  input.focus()
})
