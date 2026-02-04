const lock = document.getElementById('lock');
const pass = document.getElementById('pass');
const complimentsScreen = document.getElementById('compliments');
const box = document.getElementById('box');
const question = document.getElementById('question');
const yes = document.getElementById('yes');
const no = document.getElementById('no');
const final = document.getElementById('final');
const secret = document.getElementById('secret');

const song = document.getElementById('song');
const heartbeat = document.getElementById('heartbeat');

const compliments = [
  "Because your smile feels like home 🏡",
  "Because you make everything brighter ✨",
  "Because you are effortlessly beautiful 💖",
  "Because my heart feels calm around you 💞",
  "Because life is better with you 🌸",
  "Because your laugh is my favorite sound 🎶",
  "Because you are kindness itself 🤍",
  "Because you make moments magical ✨",
  "Because you feel like peace 🫶",
  "Because you are my favorite thought 💗"
];

let c = 0;
let i = 0;

function unlock(){
  if(pass.value === "Zara"){
    lock.classList.add('hidden');
    complimentsScreen.classList.remove('hidden');
    song.play().catch(()=>{});
    heartbeat.play().catch(()=>{});
    type();
  }else{
    alert("Wrong password 😜");
  }
}

function type(){
  if(c >= compliments.length){
    setTimeout(showDisco,2000);
    return;
  }
  box.innerHTML = "";
  i = 0;
  let text = compliments[c];

  let t = setInterval(()=>{
    box.innerHTML += text.charAt(i);
    i++;
    if(i === text.length){
      clearInterval(t);
      c++;
      setTimeout(type,3000);
    }
  },50);
}

function showDisco(){
  let colors = ['#ff5fa2','#ffccf9','#cdb4db','#ffc8dd','#bde0fe'];
  let start = Date.now();
  let disco = setInterval(()=>{
    document.body.style.background = colors[Math.floor(Math.random()*colors.length)];
    if(Date.now()-start>5000){
      clearInterval(disco);
      complimentsScreen.classList.add('hidden');
      question.classList.remove('hidden');
    }
  },200);
}

no.addEventListener('mouseover', moveNo);
no.addEventListener('click', ()=>{
  if(navigator.vibrate){
    navigator.vibrate([200,100,200,100,400]);
  }
  moveNo();
});

function moveNo(){
  no.style.left = Math.random()*70 + "%";
  no.style.top = Math.random()*70 + "%";
}

yes.addEventListener('click', ()=>{
  question.classList.add('hidden');
  final.classList.remove('hidden');
  hearts();
  typeSecret();
});

function hearts(){
  for(let i=0;i<30;i++){
    let h = document.createElement('div');
    h.innerHTML = '💖';
    h.style.position='fixed';
    h.style.left=Math.random()*100+'%';
    h.style.top='100%';
    h.style.fontSize='24px';
    document.body.appendChild(h);

    let anim = setInterval(()=>{
      h.style.top = (parseFloat(h.style.top)-1)+'%';
      if(parseFloat(h.style.top)<-10){
        clearInterval(anim);
        h.remove();
      }
    },30);
  }
}

function typeSecret(){
  const msg = "Zara, you just made my heart the happiest. This is the start of something beautiful… — Sandeep ❤️";
  let j=0;
  let t = setInterval(()=>{
    secret.innerHTML += msg.charAt(j);
    j++;
    if(j===msg.length) clearInterval(t);
  },60);
}
