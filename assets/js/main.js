window.addEventListener("load", () => {
    // send an email to me everytime the page is loaded
    if (!window.origin.includes("localhost") && !window.origin.includes("http://127.0.0.1")) {
        const formData = new FormData();
        console.log("Sending email", window.origin);
        formData.append("url", window.location.href);
        formData.append("name", "Notifier Bot")
        formData.append("email", "okorojijaybee1@gmail.com")
        formData.append("message", "Your portfolio was visited")
        formData.append("Device", navigator.userAgent)
        fetch("https://formspree.io/xzbjaaqy", {
            method: "POST",
            body: formData,
        }).then(response => response.json())
            .then(data => console.log(data))
    }

    ////////////Upadate Animation Text State////////
    window.setTimeout(() => {
        document.querySelector(".animate").style.animation = "none";
        document.querySelector(".animate").style.color = "white";
        document.querySelector(".animate").innerHTML =
            "Loaded <i style='margin-left: .7rem' class='fa fa-arrow-right'></>";
        document.querySelector('body').classList.add("animated")
    }, 700);

    ////////////////Start Kinetic Typing///////////

    window.setTimeout(() => {
        scene.play();
        document.querySelector(".wrapper-container").classList.remove("hidden");
        document.querySelector(".preloader-container").style.transform =
            "translateX(-110vw)";
        document.querySelector(".preloader-container").classList.add("finished");
    }, 1200);

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

    //////////////////////////////////////////////////////////////////////////
    ///////////////////////////Typing Animation////////////////////////////////

    const type = (element) => {
        const text = element.innerHTML;
        element.innerHTML = "";
        var x = 0;
        function animate() {
            if (x < text.length) {
                element.innerHTML += text.charAt(x);
                x++;
                setTimeout(animate, 22);
            }
        }
        animate();
    };

    ///////////////Skip Button Press Action//////////

    document.querySelector(".skip").addEventListener("click", () => {
        document.querySelector(".wrapper-container").classList.add("finished");
        window.setTimeout(() => {
            document.querySelector(".main-content").classList.remove("hidden");
            type(document.querySelector(".profession-heading"));
        }, 200);
        document.querySelector("body").style.animation = "none";
        document.querySelector("body").style.backgroundColor =
            "var(--background-color)";
        document.querySelector(".main-content").classList.remove("hidden");
    });

    ////////////////////Kinetic Typing Animation Finished Action and Typing Effect///////////////// //

    window.setTimeout(() => {
        document.querySelector(".wrapper-container").classList.add("finished");
        window.setTimeout(() => {
            document.querySelector(".main-content").classList.remove("hidden");
            type(document.querySelector(".profession-heading"));
        }, 200);
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
    // rootMargin: "-250px",
};

let revealElements = document.querySelectorAll(".text-reveal-trigger");

let reveal = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.intersectionRatio > 0) {
            entry.target.classList.add("reveal-text");
        }
    });
});

revealElements.forEach((element) => {
    reveal.observe(element);
});

///////////////////////Opacity Effect//////////

let opacityrevealElements = document.querySelectorAll(".opacity-reveal");

let opacityReveal = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.intersectionRatio > 0) {
            entry.target.classList.add("appear");
        }
    });
}, options);

opacityrevealElements.forEach((element) => {
    opacityReveal.observe(element);
});

///////////////PORTFOLIO Gallery Filter Function///////////


$(".filter-button").click(function () {
    var value = $(this).attr("data-filter");

    if (value == "all") {
        $(".filter").show("1000");
    } else {
        $(".filter")
            .not("." + value)
            .hide("3000");
        $(".filter")
            .filter("." + value)
            .show("3000");
    }
});

let filterButtons = document.querySelectorAll(".filter-button");

filterButtons.forEach((element) => {
    element.addEventListener("click", () => {
        filterButtons.forEach((element) => {
            element.classList.remove("active");
        });
        element.classList.add("active");
    });
});

/////////////Navbar Item Active State Changer///////////

let navLinks = document.querySelectorAll(".nav-item");

document.querySelector(".main-content").addEventListener("scroll", (event) => {
    let fromTop = window.scrollY;
    console.log(fromTop);

    navLinks.forEach((link) => {
        let section = document.querySelector(link.hash);

        if (
            section.offsetTop <= fromTop &&
            section.offsetTop + section.offsetHeight > fromTop
        ) {
            link.classList.add("active");
        } else {
            link.classList.remove("active");
        }
    });
});

//////////light Sound Switch////////

let lightSwitch = new Audio();
lightSwitch.src = "./assets/switch.mp3";

/////////Nav Item Click Function ////////

let mobileNavs = document.querySelectorAll(".mobile-nav-item");
let Navs = document.querySelectorAll(".nav-item");

mobileNavs.forEach((element) => {
    element.addEventListener("click", () => {
        document.querySelector(".mobile-nav-toggle").classList.toggle("active");
        document.querySelector(".mobile-menu").classList.toggle("active");
        document.querySelector(".navbar").classList.toggle("transparent");
        document
            .querySelector(element.getAttribute("target"))
            .scrollIntoView({behavior: "smooth", block: "start"});
    });
});

Navs.forEach((element) => {
    element.addEventListener("click", () => {
        document
            .querySelector(element.getAttribute("target"))
            .scrollIntoView({behavior: "smooth", block: "start"});
    });
});

/// Handle Request Resume Download

const requestResume = () => {
    let resume = document.getElementById("request-resume-btn");
    let contactFormNameInput = document.getElementById("contact-form-name");
    resume.addEventListener("click", () => {
        document.getElementById("contact").scrollIntoView({behavior: "smooth", block: "start"});
        contactFormNameInput.innerHTML = "Example Name";
        document.querySelector("#contact-form-message").innerHTML = "Hi, Faith, I would like to request your resume, please send it to the email provided above...";
    });
}
requestResume();
