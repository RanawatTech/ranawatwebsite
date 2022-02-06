console.log("hello this console for just testing");


var acc = document.getElementsByClassName("accordion");
var i;
for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        this.classList.toggle("active");

        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        }
        else {
            panel.style.display = "block";
        }
    });
}


window.onscroll = function () { scrollfunction() };

var header = document.getElementsByClassName("header");

var headerb = header.offsetTop;

// function scrollfunction(){
//     if(window.pageYOffset > headerbackground){
//         header.classList.add("headerbackground");
//     }
//     else{
//         header.classList.remove("headerbackground");
//     }
// }

// function scrollfunction() {
//     if (window.pageYOffset > headerb) {
//         document.getElementById("header").style.background = "black";
//     } else {
//         document.getElementById("header").style.background = "red";
//     }
// }

burger = document.querySelector('.burger')
navbar = document.querySelector('.leftheader')
navlist = document.querySelector('.nav-list')


burger.addEventListener('click',()=>{
    navbar.classList.toggle('h-nav')
    navlist.classList.toggle('opacity0')
    Rightnav.classList.toggle('opacity0')
    
})
