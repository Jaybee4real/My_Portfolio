window.addEventListener("load", () => {
  ////////////Upadate Animation Text State////////

  window.setTimeout(() => {
    document.querySelector(".animate").style.animation = "none";
    document.querySelector(".animate").style.color = "white";
    document.querySelector(".animate").innerHTML =
      "Loaded <i style='margin-left: .7rem' class='fa fa-arrow-right'></>";
  }, 500);

  ////////////////Start Kinetic Typing///////////

  window.setTimeout(() => {
    scene.play();
    document.querySelector(".wrapper-container").classList.remove("hidden");
    document.querySelector(".preloader-container").style.transform =
      "translateX(-110vw)";
    document.querySelector(".preloader-container").classList.add("finished");
  }, 1000);

  /////////////////////Background-color Animation//////////////

  window.setTimeout(() => {
    document.querySelectorAll(".color-change-a").forEach((element) => {
      element.style.color = "orange";
      element.style.transition = "1s all ease-out";
    });
    document.querySelector(".skip").style.color = "black";
    document.querySelectorAll(".color-change-p").forEach((element) => {
      element.style.color = "black";
      element.style.transition = "1s all ease-out";
    });
  }, 7500);

  ///////////////Skip Button Press Action//////////

  document.querySelector(".skip").addEventListener("click", () => {
    document.querySelector(".wrapper-container").style.transform =
      "translateY(-110vw)";
    document.querySelector(".wrapper-container").classList.add("finished");
    document.querySelector("body").style.animation = "none";
    document.querySelector("body").style.backgroundColor =
      "var(--background-color)";
    document.querySelector(".main-content").classList.remove("hidden");
    setTimeout(() => {
      document.querySelector(".wrapper-container").style.opacity = 0;
    }, 1000);
  });

  ////////////////////Kinetic Typing Animation Finished Action///////////////// //

  window.setTimeout(() => {
    document.querySelector(".wrapper-container").style.transform =
      "translateY(-110vw)";
    document.querySelector(".wrapper-container").classList.add("finished");
    document.querySelector(".main-content").classList.remove("hidden");
  }, 18000);

 
});


////////////////////////Light Mode/Dark Mode Action///////////////

document.querySelector(".mode-toggle").addEventListener("click", () => {
  document.querySelector("body").classList.toggle("dark-mode");
  document.querySelector(".mode-toggle").classList.toggle("fa-lightbulb-o");
});

document.querySelector(".mobile-nav-toggle").addEventListener("click", () => {
  document.querySelector(".mobile-nav-toggle").classList.toggle("active");
  document.querySelector(".mobile-menu").classList.toggle("active");
  document.querySelector(".navbar").classList.toggle("transparent");
});



////////////////////////Add Classes Based on Visibility/////////////////

let options = {
  rootMargin: "200px",
};

let revealElements = document.querySelectorAll(".text-reveal-trigger");

let reveal = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.intersectionRatio > 0) {
      entry.target.classList.add("reveal-text");
    } else {
      entry.target.classList.remove("reveal-text");
    }
  });
}, options);

revealElements.forEach((element) => {
  reveal.observe(element);
});

//////////////////////////////////////////////////////////////////////////
///////////////////////////Typing Animation////////////////////////////////


const type = (element => {
  var x = 0
  text = element.innerHTML
  element.innerHTML = ''
  function animate() {
    if (x < text.length) {
      element.innerHTML += text.charAt(x);
      x++

      setTimeout(animate, 30)
    }
  }

  animate()
})

type(document.querySelector(".profession-heading"))
