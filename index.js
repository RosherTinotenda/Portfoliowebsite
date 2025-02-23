/*document.addEventListener('DOMContentLoaded', function(){
  navBar.style.display = 'none';
navLines.style.display = "block";
navX.style.display = "none";
  document.querySelector('#servicesPage').scrollIntoView(
    {behavior:'smooth'})
});*/

//animate every element to slide on view while scrolling
 const elements = document.querySelectorAll('.element');

window.addEventListener('scroll', () => {
  elements.forEach((element) => {
    const rect = element.getBoundingClientRect();
    if (rect.top < window.innerHeight) {
      element.classList.add('animate');
    }
  });
});
 //hide show and show navBar and change the navIcon
 const navOptions=document.querySelector(".navOptions");
 
 const navBar=document.querySelector(".navBar");
   const navLines=document.querySelector(".navLines");
   const navX=document.querySelector(".navX");
   const container=document.querySelector("#container");
   const navBarSlide=document.querySelector('#navBar');
 
   navOptions.addEventListener("click",function(){
     navBarSlide.classList.toggle('show-navBar')
   
     //open navBar
     
     
     //animate navBar sliding
     
     

   
   
 })
 
 // homepage skills text typing
 const textElements = [
  { text: "A Developer", delay: 2500 },
  { text: "A UI Designer", delay: 2500 }, 
  { text: "An Artist", delay: 2500 }
];

const element = document.querySelector(".homeSkillsJava");
let i = 0;
let j = 0;
let typing = true;

function typeText() {
  if (i < textElements.length) {
    const text = textElements[i].text;
    const delay = textElements[i].delay;

    if (typing) {
      if (j < text.length) {
        element.innerHTML += text.charAt(j);
        j++;
        setTimeout(typeText, 150); // delay between typing each letter
      } else {
        typing = false;
        setTimeout(clearText, delay); // delay before clearing text
      }
    }
  }
}

function clearText() {
  const text = textElements[i].text;

  if (j > 0) {
    j--;
    element.innerHTML = text.substring(0, j);
    setTimeout(clearText, 50); // delay between clearing each letter
  } else {
    typing = true;
    i++;
    if (i >= textElements.length) {
      i = 0; // reset i to 0
      j = 0; // reset j to 0
    }
    setTimeout(typeText, 500); // delay before typing next text
  }
}

typeText();

// inrease coding hoursNumber and projectNumber
const counters = document.querySelectorAll('.counter');

counters.forEach((counter) => {
  const target = parseInt(counter.dataset.target);
  const speed = target === 58 ? 40 : 0.0001; // adjust the speed for 58
  let isCounting = false;

  const observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting && !isCounting) {
      isCounting = true;
      let count = 0;
      const intervalId = setInterval(() => {
        count += 1;
        counter.textContent = count;
        if (count >= target) {
          clearInterval(intervalId);
        }
      }, speed);
    }
  }, {
    threshold: 1.0, // trigger callback when element is fully visible
  });

  observer.observe(counter);
});

//increase skill progress bar percentages
const progressBar = document.querySelectorAll('.progressCounterBar');

progressBar.forEach((counter) => {
  const target = parseInt(counter.dataset.percentage);
  
  const speed = 10;
  let isCounting = false;

  const observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting && !isCounting) {
      isCounting = true;
      let count = 0;
      const intervalId = setInterval(() => {
        count += 1;
        counter.style.width = `${count}%`;
        if(count >= target) {
          clearInterval(intervalId);
        }
      }, speed);
    }
  }, {
    threshold: 1.0, // trigger callback when element is fully visible
  });

  observer.observe(counter);
});
//scroll to home page on nav click
document.querySelector('#home').addEventListener('click',function(){
  navBarSlide.classList.toggle('show-navBar')
navLines.style.display = "block";
navX.style.display = "none";
  document.querySelector('#homePage').scrollIntoView(
    {behavior:'smooth'})
});
//scroll to about page on nav click
document.querySelector('#about').addEventListener('click',function(){
  navBarSlide.classList.toggle('show-navBar')
navLines.style.display = "block";
navX.style.display = "none";
  document.querySelector('#aboutPage').scrollIntoView(
    {behavior:'smooth'})
});

//scroll to portfolio page on nav click
document.querySelector('#portfolio').addEventListener('click',function(){
  navBarSlide.classList.toggle('show-navBar')
     navLines.style.display="block";
     navX.style.display="none";
  document.querySelector('#portfolioPage').scrollIntoView(
    {behavior:'smooth'})
});
//scroll to services on nav click
document.querySelector('#services').addEventListener('click',function(){
  navBarSlide.classList.toggle('show-navBar')
navLines.style.display = "block";
navX.style.display = "none";
  document.querySelector('#servicesPage').scrollIntoView(
    {behavior:'smooth'})
});
//scroll to contact page on nav click
document.querySelector('#contact').addEventListener('click',function(){
  navBarSlide.classList.toggle('show-navBar')
navLines.style.display = "block";
navX.style.display = "none";
  document.querySelector('#contactPage').scrollIntoView(
    {behavior:'smooth'})
});
// toggle portfolio image controll buttons
const imageControlBtn = document.querySelectorAll('.portfolioImageControlButons');

const allImages = document.querySelectorAll('.portfolioImages');
  

imageControlBtn.forEach((btn) => {
  btn.backgroundColor = 'white';
btn.color = 'black';



btn.addEventListener('click', function(e){
  
  //reset each button's background color to white and text to black
  imageControlBtn.forEach((butn) => {
  butn.style.backgroundColor = 'white';
butn.style.color = 'black';
});

//change background color for currently clicked button to blue and text to white
  const control = e.target;
  control.style.backgroundColor='#0563BB';
  control.style.color='white';
  
  allImages.forEach((image)=>{
     
    const quality=image.dataset.quality;
    console.log(quality)
    if(quality === control.dataset.control ){
      image.style.display='block';
    }else if(control.dataset.control==='all'){
      image.style.display='block';
    }else{
      image.style.display='none';
    }
    
  });
  
});

});

//scroll to top on icon click bottom arrow button
const navToTop=document.querySelector('#navToTop')

navToTop.addEventListener('click', (e)=>{
    navBar.style.display = 'none';
navLines.style.display = "block";
navX.style.display = "none";
  document.querySelector('#homePage').scrollIntoView(
    {behavior:'smooth'})
  
});


// bottom nav arrow when on home page
window.addEventListener('scroll', () => {
  const hm=document.querySelector('.home')
  
 const scrollPosition = window.scrollY;
const triggerPoint = hm.offsetTop+10; 

if (scrollPosition >= triggerPoint) {
  // add your reaction code here
 navToTop.style.display='block';
} else {
  navToTop.style.display='none';
}
    
});
