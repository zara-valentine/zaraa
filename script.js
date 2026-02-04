/* =======================
   CONFIG
======================= */
const PASSWORD = "Zara";
const GIRL = "Zara";
const BOY = "Sandeep";

/* =======================
   ELEMENTS
======================= */
const passwordScreen = document.getElementById("passwordScreen");
const app = document.getElementById("app");
const intro = document.getElementById("intro");
const title = document.getElementById("title");
const subtitle = document.getElementById("subtitle");
const box = document.getElementById("box");
const question = document.getElementById("question");
const yesBtn = document.getElementById("yes");
const noBtn = document.getElementById("no");
const final = document.getElementById("final");
const typing = document.getElementById("typing");
const dateCard = document.getElementById("dateCard");

const bgm = document.getElementById("song");
const heartbeat = document.getElementById("heartbeat");

/* =======================
   COMPLIMENTS
======================= */
const compliments = [
  "Because your smile feels like home 🏡",
  "Because you make everything brighter ✨",
  "Because you are effortlessly beautiful 💖",
  "Because my heart feels calm around you 💗",
  "Because life is better with you 🌸",
  "Because your laugh is my favorite sound 🎶",
  "Because you make ordinary moments special 💫",
  "Because your kindness melts me 🥺",
  "Because you are my happy place 💕",
  "Because you are simply YOU ❤️"
];

let index = 0;

/* =======================
   PASSWORD UNLOCK
======================= */
function unlock() {
  const pass = document.getElementById("pass").value;
  if (pass === PASSWORD) {
    passwordScreen.style.display = "none";
    app.classList.remove("hidden");

    bgm.volume = 0.6;
    bgm.play().catch(()=>{});
    heartbeat.volume = 0.8;
    heartbeat.play().catch(()=>{});

    startIntro();
  } else {
    alert("Wrong password 😜");
    navigator.vibrate([200,100,200]);
  }
}

/* =======================
   INTRO
======================= */
function startIntro() {
  title.innerText = GIRL + " ✨";
  subtitle.innerText =
    "Before I ask you something...\nlet me tell you why you matter 💕";

  intro.classList.remove("hidden");

  setTimeout(startCompliments, 3000);
}

/* =======================
   COMPLIMENTS FLOW
======================= */
function startCompliments() {
  intro.classList.add("hidden");
  box.classList.remove("hidden");
  typeCompliment();
}

function typeCompliment() {
  if (index >= compliments.length) {
    setTimeout(showQuestion, 2000);
    return;
  }

  box.innerText = "";
  let text = compliments[index];
  let i = 0;

  const typingInterval = setInterval(() => {
    box.innerText += text[i];
    i++;

    if (Math.random() > 0.85) tinyHeart();

    if (i >= text.length) {
      clearInterval(typingInterval);
      index++;
      setTimeout(typeCompliment, 3000);
    }
  }, 50);
}

/* =======================
   TINY HEART POP
======================= */
function tinyHeart() {
  const heart = document.createElement("div");
  heart.innerText = "💗";
  heart.style.position = "fixed";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.top = Math.random() * 100 + "vh";
  heart.style.fontSize = "16px";
  heart.style.animation = "float 2s linear";
  document.body.appendChild(heart);
  setTimeout(() => heart.remove(), 2000);
}

/* =======================
   QUESTION
======================= */
function showQuestion() {
  box.classList.add("hidden");
  question.classList.remove("hidden");
}

/* =======================
   NO BUTTON EVIL MODE
======================= */
noBtn.addEventListener("mouseover", moveNo);
noBtn.addEventListener("click", () => {
  moveNo();
  navigator.vibrate([300,100,300,100,500]);
});

function moveNo() {
  noBtn.style.left = Math.random() * 80 + "%";
  noBtn.style.top = Math.random() * 80 + "%";
}

/* =======================
   YES CLICK
======================= */
yesBtn.onclick = () => {
  question.classList.add("hidden");
  heartRain();
  setTimeout(showFinal, 3000);
};

/* =======================
   HEART RAIN
======================= */
function heartRain() {
  for (let i = 0; i < 80; i++) {
    setTimeout(() => {
      const h = document.createElement("div");
      h.innerText = "❤️";
      h.style.position = "fixed";
      h.style.left = Math.random() * 100 + "vw";
      h.style.top = "-20px";
      h.style.fontSize = "24px";
      h.style.animation = "fall 4s linear";
      document.body.appendChild(h);
      setTimeout(() => h.remove(), 4000);
    }, i * 50);
  }
}

/* =======================
   FINAL MESSAGE
======================= */
function showFinal() {
  final.classList.remove("hidden");

  const msg =
    `${GIRL}, you just made my heart the happiest.\n` +
    `This is the start of something beautiful...\n— ${BOY} ❤️`;

  typing.innerText = "";
  let i = 0;
  const t = setInterval(() => {
    typing.innerText += msg[i];
    i++;
    if (i >= msg.length) {
      clearInterval(t);
      setTimeout(() => dateCard.classList.remove("hidden"), 1500);
    }
  }, 60);
}
