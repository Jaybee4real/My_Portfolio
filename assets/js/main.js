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
    document.querySelector("body").style.backgroundColor = "white";
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
  }, 20000);

  /////////////////////////Scroll Down Arrow Scroll Action ///////////

  document.addEventListener("scroll", function (e) {
    var offset = window.pageYOffset;
    if (offset > 1) {
      document.querySelector(".arrow").style.marginLeft = "90%";
    } else {
      document.querySelector(".arrow").style.marginLeft = "calc(50% - 1rem)";
    }
  });
});

////////////////////////Light Mode/Dark Mode Action///////////////

document.querySelector(".mode-toggle").addEventListener("click", () => {
  document.querySelector("body").classList.toggle("dark-mode");
  document.querySelector(".mode-toggle").classList.toggle("fa-lightbulb-o");
});

document.querySelector(".mobile-nav-toggle").addEventListener("click", () => {
  document.querySelector(".mobile-nav-toggle").classList.toggle("active");
  document.querySelector(".mobile-menu").classList.toggle("active");
});
