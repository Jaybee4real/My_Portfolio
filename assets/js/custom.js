



  (function() {
    try {
      if (location.href.indexOf("fullcpgrid") > -1 || navigator.userAgent.indexOf("Scene.js") > -1) {
        return;
      }
      const startTime = Date.now();
      function ga(t, others)  {
        var tid = "UA-128864447-2";
        var cid = (Math.random() * Math.pow(10, 20)) / Math.pow(10, 10);
        var innerWidth = window.innerWidth;
        var innerHeight = window.innerHeight;
        var screen = window.screen || { width: innerWidth, height: innerHeight };
        var collectInfos = [
          "v=1",
          "t="+ t,
          "dl=" + location.href,
          "ul=" + (navigator.language || "en-us").toLowerCase(),
          "de=" + (document.charset || document.inputEncoding || document.characterSet || "utf-8"),
          "dt=" + document.title, "sr=" + screen.width + "x" + screen.height,
          "vp=" + innerWidth + "x" + innerHeight,
          "cid=" + cid,
          "tid=" + tid,
          "z=" + Math.floor(Math.random() * 10000000)
        ];
        const req = new XMLHttpRequest();
        req.open("GET", "https://www.google-analytics.com/collect?" + collectInfos.join("&") + others);
        req.send();
      }
      var a = document.createElement("a");
      a.setAttribute("href", "https://github.com/daybrush/scenejs");
      a.setAttribute("target", "_blank");
      a.style.cssText = "position: fixed; bottom: 10px;right: 10px;width: 40px;height: 40px;line-height: 40px;border-radius: 50%;  border: 2px solid #555; background-color: #fff; overflow: hidden; padding: 0px;box-sizing: border-box;text-align: center; text-decoration: none; color: black; font-weight: bold; font-family: sans-serif;font-size: 20px;";
      // a.innerHTML = '<img src="https://daybrush.com/scenejs/images/clapperboard.png" style="width: 95%;margin-top: 3px"/>';
      a.innerHTML = '?';
  
      a.addEventListener("click", function () {
        ga("event", '&ec=scene&ea=click&ev=' + Math.floor((Date.now() - startTime) / 1000));
      });
      document.body.appendChild(a);
  
      ga("pageview", "");
    } catch (e) {}
  })();




const scene = new Scene({
    ".container": {}
  }, {
    selector: true,
  });
  
  const item = scene.getItem(".container");
  
  
  function move(startTime, endTime, left, top, rotate, scale) {
    item.set({
      [`${startTime}, ${endTime}`]: Scene.kineticFrame({
        left: `${left}px`,
        top: `${top}px`
      }).set({
        transform: {
          rotate: `${rotate}deg`,
          scale,
        }
      }),
    });
  }
  
  
  
  move(0, 0, 90, 115, 0, 5);
  move(1, 1, 90, 115, 0, 2);
  move(2, 3, 0, 115, 0, 1);
  move(4, 4.5, -100, 0, -90, 2);
  move(5.5, 6, -52, -18, -90, 1.6);
  move(7, 7.5, 30, 45, 0, 2);
  move(8.5, 9,  10, 30, 0, 3);
  move(10, 10.5, 28, 0, 0, 2.2);
  move(11.5, 12, 50, -35, 0, 1.65);
  move(13, 13.5, 35, -70, 0, 2);
  move(14.5, 18, 0, 0, 0, 1);
  
  

  scene.set({
    "[data-typing='i']": Scene.typing({ text: "I ", duration: 1}),
    "[data-typing='name']": {
      1: Scene.typing({ text: "'m Jaybee, ", duration: 1}),
    },
    "[data-typing='engineer']": {
      1.5: Scene.typing({ text: "A Frontend Programmer", duration: 1}),
    },
    "[data-typing='with']": {
      3.3: Scene.typing({ text: "with", duration: 0.5}),
    },
    "[data-typing='javascript']": {
      4.5: Scene.typing({ text: "Skills In", duration: 1}),
    },
    "[data-typing='typescript']": {
      6: Scene.typing({ text: "Javascript", duration: 1}),
    },
    "[data-typing='css']": {
      7.5: Scene.typing({ text: "CSS/SCSS", duration: 0.7}),
    },
    "[data-typing='nodejs']": {
      9: Scene.typing({ text: "Mobile App Development", duration: 1}),
    },
    "[data-typing='animation']": {
      10.5: Scene.typing({ text: "Animations", duration: 1}),
    },
    "[data-typing='scenejs']": {
      12: Scene.typing({ text: "And More...", duration: 1}),
    },
  });
  
  scene.setPlaySpeed(0.9);
  scene.setEasing("ease-in-out");
  scene.setIterationCount("infinite");
  scene.play();
  



