let controller = new ScrollMagic.Controller();
let timeline = new TimelineMax();

var choice = document.getElementById("ContactChoice");
var emailInput = document.getElementById('email');
var phoneInput = document.getElementById('phoneNr');
var ELabel = document.getElementById('emailLabel');
var PLabel = document.getElementById('phoneLabel');

document.getElementById("labelCC").style.display = "inline";


choice.style.display = "inline";

choice.addEventListener('click',()=>{
  console.log(choice.value);
  
  if(choice.value == "email"){
    emailInput.style.display = "inline";
    phoneInput.style.display = "none";
    ELabel.style.display = "inline";
    PLabel.style.display = "none";
    
  }else{  
    emailInput.style.display = "none";
    phoneInput.style.display = "inline";
    PLabel.style.display = "inline";
    ELabel.style.display = "none";
  }
})

timeline
  .to(".cb", 10, { y: -500 })
  .to(".bb", 10, { y: -200 }, "-=10")
  .fromTo(".bg", { y: -10 }, { y: -40, duration: 10 }, "-=10")
  .to(".content", 10, { top: "0%" }, "-=10")


new ScrollMagic.Scene({
  triggerElement: "section",
  duration: "200%",
  triggerHook: 0,
})
  .setTween(timeline)
  .setPin("section")
  .addTo(controller);



