document.querySelector(".mode-toggle").addEventListener("click" ,() => {
    document.querySelector('body').classList.toggle("light-mode")
    document.querySelector(".mode-toggle").classList.toggle("fa-lightbulb-o")
})



document.querySelector(".mobile-nav-toggle").addEventListener("click" ,() => {
    document.querySelector(".mobile-nav-toggle").classList.toggle("active")
    document.querySelector(".mobile-menu").classList.toggle("active")
})

