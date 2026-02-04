/* =========================
   GLOBAL ELEMENTS
========================= */

const passwordScreen = document.getElementById("passwordScreen");
const app = document.getElementById("app");
const passwordInput = document.getElementById("password");

const nameText = document.getElementById("name");
const subtitle = document.getElementById("subtitle");
const box = document.getElementById("box");

const question = document.getElementById("question");
const yesBtn = document.getElementById("yes");
const noBtn = document.getElementById("no");

const finalScreen = document.getElementById("final");
const typingText = document.getElementById("typing");
const dateCard = document.getElementById("dateCard");

/* =========================
   PASSWORD UNLOCK
========================= */

function unlock() {
  const pass = passwordInput.value.trim();

  if (pass.toLowerCase() === "zara") {
    passwordScreen.style.display = "none";
    app.classList.remove("hidden");
    startIntro();
  } else {
    navigator.vibrate([300, 100, 300]);
    alert("Wrong password 😜");
  }
}

/* =========================
   INTRO TEXT
========================= */

function startIntro() {
  nameText.innerHTML = "Zara ✨";
  subtitle.innerHTML =
    "Before I ask you something...<br>let me tell you why you matter 💕";

  setTimeout(startCompliments, 2000);
}

/* =========================
   COMPLIMENTS
========================= */

const compliments = [
  "Because your smile feels like home 🏡",
  "Because you make everything brighter ✨",
  "Because you are effortlessly beautiful 💖",
  "Because my heart feels calm around you 💞",
  "Because life is better with you 🌸",
  "Because your laugh is my favorite sound 🎶",
  "Because you care deeply 🤍",
  "Because you feel like magic ✨",
  "Because you are rare 🌹",
  "Because you are you 💗"
];

let i = 0;

function startCompliments() {
  box.classList.remove("hidden");
  showCompliment();
}

function showCompliment() {
  box.classList.remove("bounce", "shake");
  void box.offsetWidth;

  box.innerHTML = compliments[i];
  box.classList.add("bounce");

  spawnTinyHeart();

  i++;

  if (i < compliments.length) {
    setTimeout(showCompliment, 3000);
  } else {
    setTimeout(startDisco, 2000);
  }
}

/* =========================
   TINY HEART POP
========================= */

function spawnTinyHeart() {
  const heart = document.createElement("div");
  heart.className = "tiny-heart";
  heart.innerHTML = "❤️";

  heart.style.left = Math.random() * window.innerWidth + "px";
  heart.style.top = "70%";

  document.body.appendChild(heart);

  setTimeout(() => heart.remove(), 1200);
}

/* =========================
   DISCO EFFECT
========================= */

function startDisco() {
  let count = 0;
  const colors = ["#ff5fa2", "#ff8acb", "#ffc1dc", "#ff4d6d"];

  const disco = setInterval(() => {
    document.body.style.background =
      colors[Math.floor(Math.random() * colors.length)];
    count++;
    if (count > 10) {
      clearInterval(disco);
      showQuestion();
    }
  }, 500);
}

/* =========================
   QUESTION SCREEN
========================= */

function showQuestion() {
  box.classList.add("hidden");
  subtitle.classList.add("hidden");
  question.classList.remove("hidden");
}

/* =========================
   NO BUTTON EVIL 😈
========================= */

noBtn.addEventListener("click", () => {
  navigator.vibrate([500, 100, 500, 100, 500]);

  noBtn.style.left = Math.random() * 80 + "%";
  noBtn.style.top = Math.random() * 80 + "%";
});

/* =========================
   YES BUTTON 💖
========================= */

yesBtn.addEventListener("click", () => {
  question.classList.add("hidden");
  finalScreen.classList.remove("hidden");
  heartRain();
  typeMessage();
});

/* =========================
   HEART RAIN
========================= */

function heartRain() {
  for (let i = 0; i < 40; i++) {
    setTimeout(() => {
      const heart = document.createElement("div");
      heart.innerHTML = "💖";
      heart.style.position = "fixed";
      heart.style.left = Math.random() * 100 + "vw";
      heart.style.top = "-20px";
      heart.style.fontSize = "20px";
      heart.style.animation = "fall 3s linear";

      document.body.appendChild(heart);
      setTimeout(() => heart.remove(), 3000);
    }, i * 100);
  }
}

/* =========================
   TYPING MESSAGE
========================= */

function typeMessage() {
  const msg =
    "Zara, you just made my heart the happiest 💖\nThis is the start of something beautiful.\n— Sandeep ❤️";

  let j = 0;
  const t = setInterval(() => {
    typingText.innerText += msg[j];
    j++;
    if (j >= msg.length) {
      clearInterval(t);
      dateCard.classList.remove("hidden");
    }
  }, 50);
  }
