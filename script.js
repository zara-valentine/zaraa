// ELEMENTS
const passwordScreen = document.getElementById("passwordScreen");
const app = document.getElementById("app");

const nameText = document.getElementById("name");
const subtitle = document.getElementById("subtitle");
const box = document.getElementById("box");

const question = document.getElementById("question");
const yesBtn = document.getElementById("yes");
const noBtn = document.getElementById("no");

const finalScreen = document.getElementById("final");
const typing = document.getElementById("typing");
const dateCard = document.getElementById("dateCard");

const song = document.getElementById("song");
const heartbeat = document.getElementById("heartbeat");

// COMPLIMENTS
const compliments = [
  "Because your smile feels like home 🏡",
  "Because you make everything brighter ✨",
  "Because you are effortlessly beautiful 💖",
  "Because my heart feels calm around you 💕",
  "Because life feels better with you 🌸",
  "Because your laugh is my favorite sound 🎶",
  "Because you understand me without words 💫",
  "Because you make moments magical 🪄",
  "Because you are my peace 🤍",
  "Because you are simply YOU 💘"
];

let i = 0;

// 🔓 UNLOCK
function unlock() {
  const pass = document.getElementById("password").value;

  if (pass.toLowerCase() === "zara") {
    passwordScreen.style.display = "none";
    app.classList.remove("hidden");

    // start audio (mobile safe)
    song.play().catch(()=>{});
    heartbeat.play().catch(()=>{});

    startIntro();
  } else {
    alert("Wrong password 😝");
    navigator.vibrate([200, 100, 200]);
  }
}

// INTRO
function startIntro() {
  nameText.innerHTML = "Zara ✨";
  subtitle.innerHTML =
    "Before I ask you something...<br>let me tell you why you matter 💕";

  setTimeout(() => {
    box.classList.remove("hidden");
    showCompliments();
  }, 2000);
}

// COMPLIMENT FLOW
function showCompliments() {
  box.classList.add("shake");

  box.innerHTML = "";
  let text = compliments[i];
  let j = 0;

  const typer = setInterval(() => {
    box.innerHTML += text[j];
    j++;

    popHeart();

    if (j === text.length) {
      clearInterval(typer);
      box.classList.remove("shake");

      setTimeout(() => {
        i++;
        if (i < compliments.length) {
          showCompliments();
        } else {
          setTimeout(showQuestion, 2000);
        }
      }, 3000);
    }
  }, 40);
}

// ❤️ TINY HEART POP
function popHeart() {
  const heart = document.createElement("div");
  heart.className = "tinyHeart";
  heart.style.left = Math.random() * 100 + "vw";
  document.body.appendChild(heart);

  setTimeout(() => heart.remove(), 1500);
}

// QUESTION
function showQuestion() {
  box.classList.add("hidden");
  question.classList.remove("hidden");
}

// NO BUTTON ESCAPE + VIBRATION
noBtn.addEventListener("mouseover", moveNo);
noBtn.addEventListener("click", () => {
  navigator.vibrate([300, 100, 300, 100, 400]);
  moveNo();
});

function moveNo() {
  noBtn.style.position = "absolute";
  noBtn.style.left = Math.random() * 80 + "%";
  noBtn.style.top = Math.random() * 80 + "%";
}

// YES FLOW
yesBtn.addEventListener("click", () => {
  question.classList.add("hidden");
  finalScreen.classList.remove("hidden");
  heartRain();
  typeFinalMessage();
});

// FINAL MESSAGE
function typeFinalMessage() {
  const msg =
    "Zara, you just made my heart the happiest 💖\nThis is the start of something beautiful.\n— Sandeep ❤️";

  let k = 0;
  const typer = setInterval(() => {
    typing.innerHTML += msg[k];
    k++;
    if (k === msg.length) {
      clearInterval(typer);
      setTimeout(() => dateCard.classList.remove("hidden"), 1000);
    }
  }, 40);
}

// 💖 HEART RAIN
function heartRain() {
  setInterval(() => {
    const heart = document.createElement("div");
    heart.className = "rainHeart";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.color = `hsl(${Math.random()*360},100%,70%)`;
    document.body.appendChild(heart);

    setTimeout(() => heart.remove(), 3000);
  }, 200);
}
