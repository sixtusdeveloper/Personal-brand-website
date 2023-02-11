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
  window.open(redirectURL, '_blank')
}

// Modal scripts
// Get the modal
var modal = document.getElementById('myModal')

// Get the button that opens the modal
var btn = document.getElementById('myBtn')

// Get the <span> element that closes the modal
var span = document.getElementsByClassName('close')[0]

// When the user clicks the button, open the modal
btn.onclick = function () {
  modal.style.display = 'block'
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = 'none'
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = 'none'
  }
}
