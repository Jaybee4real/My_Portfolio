document.querySelector(".mode-toggle").addEventListener("click" ,() => {
    document.querySelector('body').classList.toggle("light-mode")
    document.querySelector(".mode-toggle").classList.toggle("fa-lightbulb-o")
    console.log("mode-changed")
})