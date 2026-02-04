/// ===== BASIC ELEMENTS =====
const title = document.getElementById("title");
const subtitle = document.getElementById("subtitle");
const box = document.getElementById("box");

// ===== DATA =====
const girlName = "Zara";
const compliments = [
  "Because your smile feels like home 🏡",
  "Because you make even ordinary moments magical ✨",
  "Because your presence calms my chaos 💗",
  "Because you are effortlessly beautiful 💖",
  "Because your laugh is my favorite sound 🎶",
  "Because you light up every room you enter 🌸",
  "Because my heart feels safe with you 💞",
  "Because you are kind in a rare way 🌷",
  "Because loving you feels natural ❤️",
  "Because life feels better with you in it 💫"
];

let index = 0;

// ===== INTRO TEXT =====
function startIntro() {
  title.innerText = `${girlName} ✨`;
  subtitle.innerText =
    "Before I ask you something...\nlet me tell you why you matter 💕";

  setTimeout(() => {
    box.classList.remove("hidden");
    typeText(compliments[index]);
  }, 1200);
}

// ===== TYPING + ANIMATION =====
function typeText(text) {
  box.innerText = "";
  box.classList.remove("shake", "bounce");
  void box.offsetWidth; // reset animation

  box.classList.add("bounce");

  let i = 0;
  const typing = setInterval(() => {
    box.innerText += text.charAt(i);

    if (Math.random() > 0.7) spawnTinyHeart();

    i++;
    if (i >= text.length) {
      clearInterval(typing);

      // Shake after typing finishes
      setTimeout(() => {
        box.classList.remove("bounce");
        box.classList.add("shake");
      }, 200);

      // Move to next compliment
      setTimeout(() => {
        box.classList.remove("shake");
        index++;

        if (index < compliments.length) {
          typeText(compliments[index]);
        } else {
          // All compliments done
          setTimeout(() => {
            showQuestion();
          }, 2000);
        }
      }, 3000);
    }
  }, 55);
}

// ===== HEART POP =====
function spawnTinyHeart() {
  const heart = document.createElement("div");
  heart.innerText = "💗";
  heart.className = "tiny-heart";

  const rect = box.getBoundingClientRect();
  heart.style.left = rect.left + rect.width / 2 + "px";
  heart.style.top = rect.top + "px";

  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 1200);
}

// ===== QUESTION SCREEN PLACEHOLDER =====
function showQuestion() {
  // yahan tu apna "Will you be my Valentine?" screen trigger karega
  console.log("Question screen triggered");
}

// ===== START =====
window.onload = () => {
  startIntro();
};
