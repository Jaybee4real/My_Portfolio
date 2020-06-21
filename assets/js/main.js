document.querySelector(".mode-toggle").addEventListener("click" ,() => {
    document.querySelector('body').classList.toggle("dark-mode")
    document.querySelector(".mode-toggle").classList.toggle("fa-lightbulb-o")
})



document.querySelector(".mobile-nav-toggle").addEventListener("click" ,() => {
    document.querySelector(".mobile-nav-toggle").classList.toggle("active")
    document.querySelector(".mobile-menu").classList.toggle("active")
})



// new Scene({
//     ".introduction p": Scene.typing({
//       text: `Hey! <span class="hand">&#128075 </span> Im`,
//       duration: 3,
//       delay: 3,
//     }),
//     ".cursor": {
//       0: { opacity: 0 },
//       0.5: { opacity: 0 },
//       "0.5>": { opacity: 1 },
//       1: { opacity: 1 },
//       options: {
//         iterationCount: 8,
//       }
//     },
//   }, {
//     iterationCount: "infinite",
//     direction: "alternate",
//     selector: true,
//   }).play();