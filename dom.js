// let myIdElement=document.getElementById("my-div");
// let myTagElements=document.getElementsByTagName("p");
// let myClassElement=document.getElementsByClassName("my-span");
// let myQueryElement=document.querySelector(".my-span");
// let myQueryAllElement=document.querySelectorAll(".my-span");
// console.log(myIdElement);
// console.log(myTagElements[1]);
// // myTagElements[1].innerHTML="ruba";
// console.log(myClassElement[1]);

// console.log(myQueryElement);
// console.log(myQueryAllElement[1]);
// console.log(document.body);
// console.log(document.links[1].href);

let myElement= document.querySelector(".js");
let myLink=document.querySelector(".link");

console.log(myLink.getAttribute("class"));
console.log(myLink.getAttribute("href"));


console.log(myElement.innerHTML);
console.log(myElement.textContent);

myElement.innerHTML="Text From <span>main.js</span> File ";
myElement.textContent="Text From <span>main.js</span> File ";




document.images[0].src="http//google.com";
document.images[0].alt="atttt";

