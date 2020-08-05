import 'bootstrap';

import '../scss/index.scss';



// SideMenu
const openNav = document.getElementById('openNav')
const closeNav = document.getElementById('closeNav')
let sideMenu = document.getElementById('sideMenu')

openNav.addEventListener('click', function() {
  sideMenu.classList.add('openNav')
})

closeNav.addEventListener('click', function() {
  sideMenu.classList.remove('openNav')
})


// Shrink Navbar on Scroll

window.onscroll = function() {
  scrollFunction()
}

let navBar = document.querySelectorAll('.navbar')
let logo = document.querySelectorAll('.logo')

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    navBar.forEach(function (nav) {
      nav.style.backgroundColor = "#121a40"
    })
    logo.forEach(function (logo) {
      logo.style.width = "7rem"
    })
  } else {
    navBar.forEach(function (nav) {
      nav.style.backgroundColor = ""
    })
    logo.forEach(function (logo) {
      logo.style.width = "13rem"
    })
  }
}