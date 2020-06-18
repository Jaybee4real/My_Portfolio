(function () {
  try {
    if (
      location.href.indexOf("fullcpgrid") > -1 ||
      navigator.userAgent.indexOf("Scene.js") > -1
    ) {
      return;
    }
    const startTime = Date.now();
    function ga(t, others) {
      var tid = "UA-128864447-2";
      var cid = (Math.random() * Math.pow(10, 20)) / Math.pow(10, 10);
      var innerWidth = window.innerWidth;
      var innerHeight = window.innerHeight;
      var screen = window.screen || { width: innerWidth, height: innerHeight };
      var collectInfos = [
        "v=1",
        "t=" + t,
        "dl=" + location.href,
        "ul=" + (navigator.language || "en-us").toLowerCase(),
        "de=" +
          (document.charset ||
            document.inputEncoding ||
            document.characterSet ||
            "utf-8"),
        "dt=" + document.title,
        "sr=" + screen.width + "x" + screen.height,
        "vp=" + innerWidth + "x" + innerHeight,
        "cid=" + cid,
        "tid=" + tid,
        "z=" + Math.floor(Math.random() * 10000000),
      ];
      const req = new XMLHttpRequest();
      req.open(
        "GET",
        "https://www.google-analytics.com/collect?" +
          collectInfos.join("&") +
          others
      );
      req.send();
    }

    // var a = document.createElement("a");
    // a.setAttribute("href", "#");
    // a.style.cssText =
    //   "position: fixed; margin-left: calc(50% - 40px); bottom: 10px;width: 40px;height: 40px;line-height: 40px;border-radius: 50%;  border: 2px solid #555; background-color: #fff; overflow: hidden; padding: 0px;box-sizing: border-box;text-align: center; text-decoration: none; color: black; font-weight: bold; font-family: sans-serif;font-size: 20px;";
    // a.innerHTML = "<i class='fa fa-arrow-down'></i>";
    // a.classList.add("arrow");

    // document.querySelector(".main-content").appendChild(a);

    ga("pageview", "");
  } catch (e) {}
})();

const scene = new Scene(
  {
    ".container": {},
  },
  {
    selector: true,
  }
);

const item = scene.getItem(".container");

function move(startTime, endTime, left, top, rotate, scale) {
  item.set({
    [`${startTime}, ${endTime}`]: Scene.kineticFrame({
      left: `${left}px`,
      top: `${top}px`,
    }).set({
      transform: {
        rotate: `${rotate}deg`,
        scale,
      },
    }),
  });
}

move(0, 0.2, 90, 115, 0, 5);
move(1, 1.2, 90, 115, 0, 2);
move(2, 3, 0, 115, 0, 1);
move(4, 4.5, -100, 0, -90, 2);
move(5.5, 6, -52, -18, -90, 1.6);
move(7, 7.5, 30, 45, 0, 2);
move(8.5, 9, 10, 30, 0, 3);
move(10, 10.5, 28, 0, 0, 1.6);
move(11.5, 12, 50, -35, 0, 1.65);
move(13, 13.5, 35, -70, 0, 2);
move(14.5, 18, 0, 0, 0, 1);

scene.set({
  "[data-typing='i']": Scene.typing({ text: "I ", duration: 1 }),
  "[data-typing='name']": {
    1: Scene.typing({ text: "'m Okoroji Faith, ", duration: 1 }),
  },
  "[data-typing='engineer']": {
    1.5: Scene.typing({ text: "A Frontend Programmer", duration: 1 }),
  },
  "[data-typing='with']": {
    3.3: Scene.typing({ text: "with", duration: 0.5 }),
  },
  "[data-typing='skills-in']": {
    4.5: Scene.typing({ text: "Skills In", duration: 1 }),
  },
  "[data-typing='typescript']": {
    6: Scene.typing({ text: "Javascript", duration: 1 }),
  },
  "[data-typing='css']": {
    7.5: Scene.typing({ text: "CSS/SCSS", duration: 0.7 }),
  },
  "[data-typing='app-dev']": {
    9: Scene.typing({ text: "Mobile App Development", duration: 1 }),
  },
  "[data-typing='animation']": {
    10.5: Scene.typing({ text: "Animations", duration: 1 }),
  },
  "[data-typing='scenejs']": {
    12: Scene.typing({ text: "And More...", duration: 1 }),
  },
});

scene.setPlaySpeed(0.9);
scene.setEasing("ease-in-out");
scene.setIterationCount(1);



window.addEventListener("load", () => {
  window.setTimeout(() => {
    document.querySelector(".animate").style.animation = "none";
    document.querySelector(".animate").style.color = "white";
    document.querySelector(".animate").innerHTML =
      "Loaded <i style='margin-left: .7rem' class='fa fa-arrow-right'></>";
  }, 1500);
});



window.setTimeout(() => {
  document.querySelectorAll(".color-change-a").forEach((element) => {
    element.style.color = "white";
    element.style.transition = "1s all ease-out";
  });
  document.querySelectorAll(".color-change-p").forEach((element) => {
    element.style.color = "orange";
    element.style.transition = "1s all ease-out";
  });
}, 8500);

window.setTimeout(() => {
  scene.play();
  document.querySelector(".wrapper-container").classList.remove("hidden");
  document.querySelector(".preloader-container").style.transform =
    "translateX(-100vw)";
  document.querySelector(".preloader-container").classList.add("finished");
}, 2000);




///////////////Skip Button//////////
document.querySelector(".skip").addEventListener("click", () => {
  scene.end();
    document.querySelector(".wrapper-container").style.transform =
      "translateY(-100vw)";
  document.querySelector(".wrapper-container").classList.add("finished");
  document.querySelector("body").style.animation = "none"
  document.querySelector("body").style.backgroundColor = "black"
  document.querySelector(".main-content").classList.remove("hidden");


})
// ////////////////////////////


window.setTimeout(() => {
  document.querySelector(".wrapper-container").style.transform =
    "translateY(-100vw)";
  document.querySelector(".wrapper-container").classList.add("finished");
  document.querySelector(".main-content").classList.remove("hidden");
}, 20000);

document.addEventListener("scroll", function (e) {
  var offset = window.pageYOffset;
  if (offset > 1) {
    document.querySelector(".arrow").style.marginLeft = "90%";
  } else {
    document.querySelector(".arrow").style.marginLeft = "calc(50% - 40px)";
  }
});
