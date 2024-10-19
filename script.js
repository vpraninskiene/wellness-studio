const consentBox = document.getElementById("consentBox");
const acceptBtn = document.querySelector(".consentButton");
const rejectBtn = document.querySelector(".rejectButton");

// cookies

acceptBtn.addEventListener("click", () => {
  document.cookie = "CookieBy=WellnessStudio; max-age=" + 60 * 60 * 24;
  consentBox.classList.add("hide");
});

rejectBtn.addEventListener("click", () => {
  consentBox.classList.add("hide");
});

let checkCookie = document.cookie.indexOf("CookieBy=WellnessStudio");
checkCookie !== -1
  ? consentBox.classList.add("hide")
  : consentBox.classList.remove("hide");

// services flip cards

const flipBackBtns = document.querySelectorAll(".flip-card-btn-turn-to-back");
const flipFrontBtns = document.querySelectorAll(".flip-card-btn-turn-to-front");

const flipCards = document.querySelectorAll(".flip-card");

for (let i = 0; i < flipBackBtns.length; i++) {
  flipBackBtns[i].style.visibility = "visible";
}

for (let j = 0; j < flipBackBtns.length; j++) {
  flipFrontBtns[j].style.visibility = "visible";
}

for (let k = 0; k < flipBackBtns.length; k++) {
  flipBackBtns[k].addEventListener("click", () => {
    flipCards[k].classList.toggle("do-flip")[k];
  });
}

for (let m = 0; m < flipFrontBtns.length; m++) {
  flipFrontBtns[m].addEventListener("click", () => {
    flipCards[m].classList.toggle("do-flip")[m];
  });
}

AOS.init();
