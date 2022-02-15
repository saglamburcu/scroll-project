// ********** set date ************
// select span
let dateSpan = document.querySelector("#date")
dateSpan.innerHTML = new Date().getFullYear()

// close links
let linkContainer = document.querySelector(".link-container")
let menu = document.querySelector(".menu")
let menuBtn = document.querySelector(".menu-btn")

menuBtn.addEventListener("click", function() {
  //linkContainer.classList.toggle("link-container-show")

  let linkContainerHeight = linkContainer.getBoundingClientRect().height
  console.log(linkContainerHeight)
  let menuHeight = menu.getBoundingClientRect().height
  console.log(menuHeight)

  if (linkContainerHeight === 0) {
   linkContainer.style.height = `${menuHeight}px`
  } else {
   linkContainer.style.height = 0;

  }
})

// ********** fixed navbar ************
let navbarContainer = document.querySelector(".navbar-container")
let topLink = document.querySelector(".top-link")

window.addEventListener("scroll", function() {
  let scrollHeight = window.pageYOffset
  //console.log(scrollHeight)
  let navbarHeight = navbarContainer.getBoundingClientRect().height

  if (scrollHeight > navbarHeight) {
    navbarContainer.classList.add("fixed-navbar")
  } else {
    navbarContainer.classList.remove("fixed-navbar")
  }

  if (scrollHeight > 600) {
    topLink.classList.add("show-toplink")
  } else {
    topLink.classList.remove("show-toplink")
  }
})

// ********** smooth scroll ************
// select links

let scrollLinks = document.querySelectorAll(".scroll-links")

scrollLinks.forEach(links => {
  links.addEventListener("click", function(e) {
    e.preventDefault()
    //console.log(e.currentTarget.getAttribute("href").slice(1))
    let id = e.currentTarget.getAttribute("href").slice(1)
    let element = document.querySelector(`#${id}`)
    //console.log(element)
    let position = element.offsetTop
    //console.log(position)
    let navbarContainerHeight = navbarContainer.getBoundingClientRect().height
    position = position - navbarContainerHeight
    
    window.scrollTo({
      left: 0,
      top: position
    })

    linkContainer.style.height = 0
  })
})