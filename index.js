//* TASK 1
let button = document.querySelector(".btn");
console.log(button);
let text = document.querySelector("#paragraph");
console.log(text);
//* TASK 2
let image = document.querySelector(".img");
image.src = "../img/images.jfif";
//* TASK 3
let link = document.querySelector("#link");
link.href = "https://www.google.com/";
let alt = document.querySelector("[alt^='linked img']");
alt.alt = "new description";
//* TASK 4
let items = document.querySelector(".list-item");
items.textContent = "Support";
