document.addEventListener("DOMContentLoaded", function(){

const form = document.getElementById("formContainer");

// popup open function (Hero / Footer)
function openForm(button){

const rect = button.getBoundingClientRect();

form.style.display = "block";
form.style.position = "absolute";
form.style.transform = "none";

// center below button
let leftPos = rect.left + window.scrollX + rect.width/2 - form.offsetWidth/2;

// prevent right overflow
if(leftPos + form.offsetWidth > window.innerWidth){
leftPos = window.innerWidth - form.offsetWidth - 20;
}

// prevent left overflow
if(leftPos < 20){
leftPos = 20;
}

// set position
form.style.top = rect.bottom + window.scrollY + 10 + "px";
form.style.left = leftPos + "px";

}


// ---------------- NAVBAR BUTTON ----------------

document.getElementById("demoBtn").onclick=function(e){

e.preventDefault();

form.style.display = "block";
form.style.position = "fixed";
form.style.top = "30%";
form.style.left = "60%";
form.style.transform = "translate(-50%, -50%)";

};


// ---------------- HERO BUTTON ----------------

document.getElementById("heroDemoBtn").onclick=function(e){
e.preventDefault();
openForm(this);
};


// ---------------- FOOTER BUTTON ----------------

document.getElementById("footerDemoBtn").onclick=function(e){
e.preventDefault();
openForm(this);
};


// ---------------- CANCEL BUTTON ----------------

document.getElementById("cancelBtn").onclick=function(){
form.style.display="none";
document.getElementById("demoForm").reset();
};


// ---------------- EMAILJS ----------------

emailjs.init("Okxs_6Es2Bg3KD17F");


// ---------------- FORM SUBMIT ----------------

document.getElementById("demoForm").addEventListener("submit", function(e){

e.preventDefault();

emailjs.sendForm("service_3ulb8xl","template_i0bj52q",this)
.then(function(){

alert("Request Demo Successfully Sent!");

document.getElementById("demoForm").reset();
form.style.display="none";

})
.catch(function(error){

alert("Failed to send request");
console.log(error);

});

});

});