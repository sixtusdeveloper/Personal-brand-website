// let navbar = document.querySelector('header')
const stickyNavbar = document.querySelector('#header')
const navbarContent = document.querySelector('.right-items-mobile')

window.onscroll = () => {
  if (window.scrollY > 50) {
    stickyNavbar.style.backgroundColor = '#fff'
    if (navbarContent.classList.contains('active')) {
      navbarContent.style.display = 'none'
    } else if (contents.classList.contains('content_active')) {
      contents.classList.remove('content_active')
    }
  } else {
    stickyNavbar.style.backgroundColor = 'aliceblue'
    navbarContent.style.display = 'initial'
    contents.classList.add('content_active')
  }
}

// Toggle menu
// const linkItems = document.qquerySelectorAll('nav .right-items a')
let toggleBar = document.querySelector('#toggleBar')
let menuItems = document.querySelector('#navBar')
// Brands items script
let toggleContentsBtn = document.querySelector('#toggleContents')
const contents = document.querySelector('#flexBranditems')

function toggleItems() {
  toggleBar.classList.toggle('fa-times')
  menuItems.classList.toggle('active')
}

function toggleContents() {
  toggleContentsBtn.classList.toggle('fa-chevron-right')
  contents.classList.toggle('content_active')
}

let redirectURL = 'https://sixtusdevportfolio.netlify.app/#portfolio'
function redirectURLIndex() {
  window.location.replace(redirectURL)
}
