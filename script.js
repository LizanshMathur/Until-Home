// Floating Hearts

const container = document.getElementById("floating-hearts");

const emojis = ["❤️","💕","💖","🌸","✨","🐾"];

function createHeart(){

    const heart = document.createElement("div");

    heart.classList.add("heart");

    heart.innerHTML = emojis[Math.floor(Math.random()*emojis.length)];

    heart.style.left = Math.random()*100+"vw";

    heart.style.animationDuration = (6+Math.random()*5)+"s";

    heart.style.fontSize = (20+Math.random()*20)+"px";

    document.body.appendChild(heart);

    setTimeout(()=>{

        heart.remove();

    },10000);

}

setInterval(createHeart,400);

/* ===========================
Typing Animation
=========================== */

const messages = [

"I miss you ❤️",

"Waiting for July 15 🌸",

"I can't wait to hug you 🥺",

"You make my world brighter ✨",

"I Love You Forever 💕"

];

let message = 0;
let letter = 0;

const typing = document.getElementById("typing");

function type(){

    if(letter < messages[message].length){

        typing.innerHTML += messages[message].charAt(letter);

        letter++;

        setTimeout(type,80);

    }else{

        setTimeout(erase,2000);

    }

}

function erase(){

    if(letter>0){

        typing.innerHTML=messages[message].substring(0,letter-1);

        letter--;

        setTimeout(erase,40);

    }else{

        message++;

        if(message>=messages.length){

            message=0;

        }

        setTimeout(type,500);

    }

}

type();


/* ===========================
Floating Hearts
=========================== */

const sparkleEmojis = ["✨","🌸","💖","💕"];

function createHeart(){

const heart=document.createElement("div");

heart.className="heart";

heart.innerHTML=sparkleEmojis[Math.floor(Math.random()*sparkleEmojis.length)];

heart.style.left=Math.random()*100+"vw";

heart.style.fontSize=(20+Math.random()*20)+"px";

heart.style.animationDuration=(6+Math.random()*6)+"s";

document.body.appendChild(heart);

setTimeout(()=>heart.remove(),12000);

}

setInterval(createHeart,500);


/* ===========================
Stars
=========================== */

for(let i=0;i<50;i++){

const star=document.createElement("div");

star.className="star";

star.style.left=Math.random()*100+"vw";

star.style.top=Math.random()*100+"vh";

let size=Math.random()*4+2;

star.style.width=size+"px";

star.style.height=size+"px";

star.style.animationDelay=Math.random()*3+"s";

document.body.appendChild(star);

}


/* ===========================
Mouse Sparkles
=========================== */

document.addEventListener("mousemove",function(e){

const sparkle=document.createElement("div");

sparkle.innerHTML="✨";

sparkle.style.position="fixed";

sparkle.style.left=e.clientX+"px";

sparkle.style.top=e.clientY+"px";

sparkle.style.pointerEvents="none";

sparkle.style.fontSize="18px";

sparkle.style.transition=".8s";

document.body.appendChild(sparkle);

setTimeout(()=>{

sparkle.style.opacity=0;

sparkle.style.transform="translateY(-30px) scale(.5)";

},20);

setTimeout(()=>sparkle.remove(),800);

});

/*=============================
Love Letter
==============================*/

const envelope = document.getElementById("envelope");
const flap = document.getElementById("flap");
const letterCard = document.getElementById("letterCard");
const letterText = document.getElementById("letterText");

const loveMessage = `My Love ❤️

Every sunrise reminds me that
it's one day closer to seeing you again.

Home feels quieter without you.

I'm counting every single day
until July 15.

I miss your smile.

I miss your laugh.

I miss the little moments we share.

Thank you for being the best part
of my life.

I'll be waiting...

With the biggest hug ready.

❤️ Forever Yours`;

let letterIndex = 0;
let alreadyOpened = false;

envelope.addEventListener("click", () => {

    if(alreadyOpened) return;

    alreadyOpened = true;

    // Change the speech bubble text
    document.getElementById("speechBubble").innerHTML = "📖 Read Below ❤️";

    flap.style.transform = "rotateX(180deg)";

    setTimeout(() => {

        letterCard.style.display = "block";

        typeLetter();

    },900);

});

function typeLetter(){

    if(letterIndex < loveMessage.length){

        letterText.innerHTML += loveMessage.charAt(letterIndex);

        letterIndex++;

        setTimeout(typeLetter,35);

    }

}

/*=========================
COUNTDOWN
=========================*/

// Change this if her return date changes.
// Month is 0-based in JavaScript:
// July = 6

const returnDate = new Date(2026,6,15,0,0,0);

function updateCountdown(){

    const now = new Date();

    const distance = returnDate - now;

    if(distance <= 0){

        document.getElementById("countdownMessage").innerHTML =
        "🎉 Welcome Home ❤️";

        document.getElementById("days").innerHTML="00";
        document.getElementById("hours").innerHTML="00";
        document.getElementById("minutes").innerHTML="00";
        document.getElementById("seconds").innerHTML="00";

        return;
    }

    const days=Math.floor(distance/(1000*60*60*24));

    const hours=Math.floor((distance%(1000*60*60*24))/(1000*60*60));

    const minutes=Math.floor((distance%(1000*60*60))/(1000*60));

    const seconds=Math.floor((distance%(1000*60))/1000);

    document.getElementById("days").innerHTML=days;
    document.getElementById("hours").innerHTML=hours;
    document.getElementById("minutes").innerHTML=minutes;
    document.getElementById("seconds").innerHTML=seconds;

}

updateCountdown();

setInterval(updateCountdown,1000);

/*=========================
LIGHTBOX
==========================*/

const cards=document.querySelectorAll(".memory-card img");

const lightbox=document.getElementById("lightbox");

const lightboxImage=document.getElementById("lightboxImage");

const close=document.getElementById("close");

cards.forEach(card=>{

card.onclick=()=>{

lightbox.style.display="flex";

lightboxImage.src=card.src;

}

})

close.onclick=()=>{

lightbox.style.display="none";

}

/*=========================
LOVE REASONS
==========================*/

const reasons=[

"Your smile makes my whole day ❤️",

"You always believe in me 🌸",

"You make even ordinary days special ✨",

"You're my favourite notification 📱",

"I love hearing your laugh 😊",

"You make me feel at home 🏡",

"You understand me 🥰",

"You're my safe place ❤️",

"You make life more colourful 🌈",

"I miss you every single day 💕",

"I love how caring you are 🌸",

"You always know how to cheer me up ☀️",

"You're the cutest person ever 🐱",

"I love every little moment with you ❤️",

"I can't wait to make more memories 📸"

];

const reasonText=document.getElementById("reasonText");

document.getElementById("reasonButton").onclick=function(){

const random=Math.floor(Math.random()*reasons.length);

reasonText.style.opacity=0;

setTimeout(()=>{

reasonText.innerHTML=reasons[random];

reasonText.style.opacity=1;

},250);

}

/*=========================
FINAL SURPRISE
=========================*/

document.getElementById("surpriseBtn").onclick=function(){

    launchHearts();

}

function launchHearts(){

    for(let i=0;i<120;i++){

        setTimeout(()=>{

            const heart=document.createElement("div");

            heart.innerHTML=["❤️","💕","💖","🌸","✨"][Math.floor(Math.random()*5)];

            heart.style.position="fixed";

            heart.style.left=Math.random()*100+"vw";

            heart.style.top="100vh";

            heart.style.fontSize=(20+Math.random()*30)+"px";

            heart.style.pointerEvents="none";

            heart.style.transition="4s linear";

            document.body.appendChild(heart);

            setTimeout(()=>{

                heart.style.transform="translateY(-120vh) rotate(720deg)";

                heart.style.opacity=0;

            },20);

            setTimeout(()=>{

                heart.remove();

            },4000);

        },i*30);

    }

    setTimeout(()=>{

        alert("❤️ I Love You ❤️\n\nThank you for being the best part of my life.\n\nWelcome Home 🏡");

    },4200);

}



document.addEventListener("click",(e)=>{

for(let i=0;i<8;i++){

const heart=document.createElement("div");

heart.innerHTML="❤️";

heart.style.position="fixed";

heart.style.left=e.clientX+"px";

heart.style.top=e.clientY+"px";

heart.style.pointerEvents="none";

heart.style.transition="1.5s";

heart.style.fontSize=(20+Math.random()*15)+"px";

document.body.appendChild(heart);

setTimeout(()=>{

heart.style.transform=`translate(${Math.random()*150-75}px,-${Math.random()*180}px) rotate(360deg)`;

heart.style.opacity=0;

},20);

setTimeout(()=>heart.remove(),1500);

}

});

function flowerRain(){

const flower=document.createElement("div");

flower.innerHTML="🌸";

flower.style.position="fixed";

flower.style.left=Math.random()*100+"vw";

flower.style.top="-40px";

flower.style.fontSize="30px";

flower.style.pointerEvents="none";

flower.style.transition="12s linear";

document.body.appendChild(flower);

setTimeout(()=>{

flower.style.top="110vh";

flower.style.transform="rotate(720deg)";

},20);

setTimeout(()=>flower.remove(),12000);

}

setInterval(flowerRain,1500);

const catMessages=[

"Meow ❤️",

"He misses you 🥺",

"July 15 is coming 🌸",

"You're amazing 💕",

"Come home soon 🏡"

];

setInterval(()=>{

const bubble=document.getElementById("catBubble");

bubble.innerHTML=catMessages[Math.floor(Math.random()*catMessages.length)];

bubble.style.display="block";

setTimeout(()=>{

bubble.style.display="none";

},3000);

},12000);


/*=========================
CLICK HEART BURST
=========================*/

document.addEventListener("click",(e)=>{

for(let i=0;i<8;i++){

const heart=document.createElement("div");

heart.innerHTML="❤️";

heart.style.position="fixed";

heart.style.left=e.clientX+"px";

heart.style.top=e.clientY+"px";

heart.style.pointerEvents="none";

heart.style.transition="1.5s";

heart.style.fontSize=(20+Math.random()*15)+"px";

heart.style.zIndex="99999";

document.body.appendChild(heart);

setTimeout(()=>{

heart.style.transform=`translate(${Math.random()*150-75}px,-${Math.random()*180}px) rotate(360deg)`;

heart.style.opacity=0;

},20);

setTimeout(()=>{

heart.remove();

},1500);

}

});

/*=========================
FLOWER RAIN
=========================*/

function flowerRain(){

const flower=document.createElement("div");

flower.innerHTML="🌸";

flower.style.position="fixed";

flower.style.left=Math.random()*100+"vw";

flower.style.top="-40px";

flower.style.fontSize="30px";

flower.style.pointerEvents="none";

flower.style.transition="12s linear";

flower.style.zIndex="9999";

document.body.appendChild(flower);

setTimeout(()=>{

flower.style.top="110vh";

flower.style.transform="rotate(720deg)";

},20);

setTimeout(()=>{

flower.remove();

},12000);

}

setInterval(flowerRain,1500);

const cursor = document.getElementById("cursor");

document.addEventListener("mousemove",(e)=>{

    cursor.style.left = e.clientX - 20 + "px";
    cursor.style.top = e.clientY - 20 + "px";

});

/*=========================
MOUSE SPARKLES
=========================*/

/*=========================
MOUSE SPARKLES
=========================*/



document.addEventListener("mousemove", function(e){

    // Create fewer sparkles for better performance
    if(Math.random() > 0.35) return;

    const sparkle = document.createElement("div");

    sparkle.innerHTML = sparkleEmojis[Math.floor(Math.random() * sparkleEmojis.length)];

    sparkle.style.position = "fixed";
    sparkle.style.left = e.clientX + "px";
    sparkle.style.top = e.clientY + "px";
    sparkle.style.pointerEvents = "none";
    sparkle.style.fontSize = (12 + Math.random() * 10) + "px";
    sparkle.style.zIndex = "99999";
    sparkle.style.transition = "all 0.8s ease";
    sparkle.style.userSelect = "none";

    document.body.appendChild(sparkle);

    setTimeout(() => {
        sparkle.style.transform = `translate(${Math.random()*30-15}px, -30px) scale(0.5) rotate(${Math.random()*180}deg)`;
        sparkle.style.opacity = "0";
    }, 10);

    setTimeout(() => {
        sparkle.remove();
    }, 800);

});

/*=========================
PAGE LOADER
=========================*/

window.addEventListener("load",function(){

setTimeout(function(){

const loader=document.getElementById("loader");

loader.style.opacity="0";

loader.style.visibility="hidden";

},3000);

});