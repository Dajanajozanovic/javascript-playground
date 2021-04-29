const buttonHome = document.querySelector('.button-home')
const buttonBookmarks = document.querySelector('.button-bookmarks')
const buttonCreate = document.querySelector('.button-create')
const buttonSettings = document.querySelector('.button-settings')

const homePage = document.querySelector('.page-home')
const bookmarksPage = document.querySelector('.page-bookmarks')
const createPage = document.querySelector('.page-create')
const settingsPage = document.querySelector('.page-settings')

const hideAllpages = () => {
  homePage.classList.add('hidden')
  bookmarksPage.classList.add('hidden')
  createPage.classList.add('hidden')
  settingsPage.classList.add('hidden')
}

const deactivateButtons = () => {
  buttonHome.classList.remove('active')
  buttonBookmarks.classList.remove('active')
  buttonCreate.classList.remove('active')
  buttonSettings.classList.remove('active')
}

buttonHome.addEventListener('click', () => {
  hideAllpages()
  homePage.classList.remove('hidden')
})

buttonHome.addEventListener('click', () => {
  deactivateButtons()
  buttonHome.classList.add('active')
})

buttonBookmarks.addEventListener('click', () => {
  hideAllpages()
  bookmarksPage.classList.remove('hidden')
})

buttonBookmarks.addEventListener('click', () => {
  deactivateButtons()
  buttonBookmarks.classList.add('active')
})

buttonCreate.addEventListener('click', () => {
  hideAllpages()
  createPage.classList.remove('hidden')
})

buttonCreate.addEventListener('click', () => {
  deactivateButtons()
  buttonCreate.classList.add('active')
})

buttonSettings.addEventListener('click', () => {
  hideAllpages()
  settingsPage.classList.remove('hidden')
})

buttonSettings.addEventListener('click', () => {
  deactivateButtons()
  buttonSettings.classList.add('active')
})

function hideAllpages() {
  homePage.classList.add('hidden')
  bookmarksPage.classList.add('hidden')
  createPage.classList.add('hidden')
  settingsPage.classList.add('hidden')
}
function deactivateButtons() {
  buttonHome.classList.remove('active')
  buttonBookmarks.classList.remove('active')
  buttonCreate.classList.remove('active')
  buttonSettings.classList.remove('active')
}
