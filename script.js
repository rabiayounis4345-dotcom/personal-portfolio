// ================= MOBILE MENU =================

const menuBtn = document.getElementById("menuBtn");

const navLinks = document.getElementById("navLinks");


menuBtn.addEventListener("click", function () {

    navLinks.classList.toggle("active");

});



// ================= CLOSE MENU =================

const navItems =
    document.querySelectorAll(".nav-links a");


navItems.forEach(function (item) {

    item.addEventListener("click", function () {

        navLinks.classList.remove("active");

    });

});



// ================= TYPING EFFECT =================

const typingText =
    document.getElementById("typingText");


const words = [

    "Frontend Developer",

    "Web Developer",

    "Computer Science Student",

    "Web Development Learner"

];


let wordIndex = 0;

let characterIndex = 0;

let deleting = false;



function typingEffect() {

    const currentWord =
        words[wordIndex];


    if (deleting === false) {

        typingText.textContent =
            currentWord.substring(
                0,
                characterIndex + 1
            );

        characterIndex++;


        if (
            characterIndex ===
            currentWord.length
        ) {

            deleting = true;

            setTimeout(
                typingEffect,
                1300
            );

            return;

        }

    } else {

        typingText.textContent =
            currentWord.substring(
                0,
                characterIndex - 1
            );

        characterIndex--;


        if (characterIndex === 0) {

            deleting = false;

            wordIndex++;

            if (
                wordIndex ===
                words.length
            ) {

                wordIndex = 0;

            }

        }

    }


    setTimeout(

        typingEffect,

        deleting ? 45 : 75

    );

}


typingEffect();



// ================= CURRENT YEAR =================

const year =
    document.getElementById("year");


year.textContent =
    new Date().getFullYear();



// ================= BACK TO TOP =================

const topBtn =
    document.getElementById("topBtn");


window.addEventListener(
    "scroll",
    function () {

        if (window.scrollY > 400) {

            topBtn.classList.add("show");

        } else {

            topBtn.classList.remove("show");

        }

    }
);



topBtn.addEventListener(
    "click",
    function () {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    }
);