
let words= document.querySelectorAll(".word");
words.forEach((word)=>{
    let letters= word.textContent.split("");
    word.textContent="";
    letters.forEach((letter)=>{
        let span=document.createElement("span");
        span.textContent=letter ;
        span.className="letter";
        word.append(span);
    });
});

let currentWordIndex=0;
let maxWordIndex= words.length-1;
words[currentWordIndex].style.opacity= "1";
 
let changeText = ()=>{
    let currentWord = words[currentWordIndex];
    let nextWord = currentWordIndex === maxWordIndex ? words[0]: words[currentWordIndex + 1];
    
    Array.from(currentWord.children).forEach((letter,i)=>{
        setTimeout(()=>{
            letter.className="letter out";
        },i*80);
    });
    nextWord.style.opacity="1";
    Array.from(nextWord.children).forEach((letter,i)=>{
        letter.className="letter behind";
        setTimeout(()=>{
            letter.className="letter in";
        },340 + i * 80);
    });
    currentWordIndex=currentWordIndex === maxWordIndex ? 0 : currentWordIndex + 1;
};
changeText();
setInterval(changeText,3000)


// More about
document.getElementById("toggleAbout").addEventListener("click", function () {
  const extraText = document.getElementById("extraAbout");
  if (extraText.style.display === "none") {
    extraText.style.display = "block";
    this.textContent = "Read Less";
  } else {
    extraText.style.display = "none";
    this.textContent = "Read More!";
  }
});

// More Services
document.querySelectorAll('.toggle-service-btn').forEach(button => {
  button.addEventListener('click', () => {
    const box = button.closest('.service-box');
    const extraText = box.querySelector('.extra-service-info');

    if (extraText.style.display === 'none' || extraText.style.display === '') {
      extraText.style.display = 'block';
      button.textContent = 'Read Less';
    } else {
      extraText.style.display = 'none';
      button.textContent = 'Read More!';
    }
  });
});


// circle skils

const circles =document.querySelectorAll('.circle');
circles.forEach(elem=>{

    var dots = elem.getAttribute("data-dots");
    var marked = elem.getAttribute("data-percent");
    var percent = Math.floor(dots*marked/100);
    var points = "";
    var rotate = 360 / dots;

    for(let i=0; i < dots; i++){
       points += `<div class="points" style="--i:${i}; --rot:${rotate}deg"></div>`;
    }
    elem.innerHTML = points;

    const pointsMarked = elem.querySelectorAll('.points');
    for(let i=0; i<percent; i++){
        pointsMarked[i].classList.add('marked');
    }
})



// mix it up portfolio

var mixer = mixitup('.portfolio-gallery');

// Active Menu items
let menuLi = document.querySelectorAll('header ul li a');
let section = document.querySelectorAll('section');

function activeMenu(){
    let len = section.length;
    while(--len && window.scrollY + 97 < section[len].offsetTop){}
    menuLi.forEach(sec => sec.classList.remove("active"));
    menuLi[len].classList.add("active");
}
activeMenu();
window.addEventListener("scroll",activeMenu);

// Sticky nav bar
const header = document.querySelector("header");
window.addEventListener("scroll", function(){
    header.classList.toggle("sticky",window.scrollY > 50)
});


// toggle icon mnavbar
let menuIcon = document.querySelector("#menu-icon");
let navlist = document.querySelector(".navlist");

menuIcon.onclick = ()=>{
    menuIcon.classList.toggle("bx-x");
    navlist.classList.toggle("open");
}

window.onscroll = ()=>{
    menuIcon.classList.remove("bx-x");
    navlist.classList.remove("open");
}


// Parallax scroll animation
const observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        if(entry.isIntersecting){
            entry.target.classList.add("show-items");
        }else{
            entry.targent.classList.remove("show-items");
        }
    });
});


const scrollScale =document.querySelectorAll(".scroll-scale");
scrollScale.forEach((e1)=>observer.observe(e1));

const scrollBottom =document.querySelectorAll(".scroll-bottom");
scrollBottom.forEach((e1)=>observer.observe(e1));

const scrollTop =document.querySelectorAll(".scroll-top");
scrollTop.forEach((e1)=>observer.observe(e1));




document.getElementById("openChat").addEventListener("click", function (e) {
  e.preventDefault();
  document.getElementById("chatSection").classList.remove("chat-hidden");
});

document.getElementById("closeChat").addEventListener("click", function () {
  document.getElementById("chatSection").classList.add("chat-hidden");
});

document.getElementById("sendBtn").addEventListener("click", function () {
  const input = document.getElementById("userInput");
  const message = input.value.trim();
  if (message !== "") {
    addMessage("You ", message);
    input.value = "";

    // Dummy AI reply
    setTimeout(() => {
      addMessage("AI ", getDummyReply(message));
    }, 700);
  }
});

function addMessage(sender, text) {
  const chat = document.getElementById("chatMessages");
  const msg = document.createElement("div");
  msg.innerHTML = `<strong>${sender}:</strong> ${text}`;
  chat.appendChild(msg);
  chat.scrollTop = chat.scrollHeight;
}

function getDummyReply(userText) {
  const text = userText.toLowerCase();

  if (text.includes("hello") || text.includes("hi")) {
    return "Hello there! How can I help you today?";
  }

  if (text.includes("how are you")) {
    return "I'm doing great, thank you! How can I assist you today?";
  }

  if (text.includes("about")) {
    return "I'm a passionate developer with experience in building modern, responsive websites and web apps. We make Graphic designs, Animation, Content creation, amd Project Builds,";
  }

  if (text.includes("skills")) {
    return "My skills include HTML, CSS, JavaScript, React, Node.js, and UI/UX design.";
  }

  if (text.includes("portfolio")) {
    return "You can explore my projects in the Portfolio section of this site.";
  }

  if (text.includes("home")) {
    return "You can return to the home page by clicking 'Home' in the navbar.";
  }

  if (text.includes("services")) {
    return "I offer web development, UI/UX design, and SEO optimization services.";
  }

  if (text.includes("price") || text.includes("cost")) {
    return "Prices vary based on project scope. Visit the Services section or Contact me for a quote.";
  }

  if (text.includes("contact") || text.includes("email")) {
    return "You can reach out via the Contact page or email me at example@example.com.";
  }

  if (text.includes("project") || text.includes("work")) {
    return "I'd love to hear about your project! Let me know what you’re working on.";
  }

  if (text.includes("location")) {
    return "I'm based in India, but I work with clients globally.";
  }

  if (text.includes("thank")) {
    return "You're very welcome! 😊 Let me know if you have more questions.";
  }

  if (text.includes("bye") || text.includes("goodbye")) {
    return "Goodbye! Looking forward to connecting again soon.";
  }

  return "I'm here to help! Try asking about skills, portfolio, pricing, or how to contact me.";
}

// Send on Enter key
document.getElementById("userInput").addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    e.preventDefault();
    document.getElementById("sendBtn").click();
  }
});


