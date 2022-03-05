const bluemode = document.querySelector("#bluemode");
const greenmode = document.querySelector("#greenmode");
const purplemode = document.querySelector("#purplemode");
const body = document.querySelector("body")
const lightmode = document.querySelector("#lightmode");


const themeDots = document.getElementsByClassName("theme-dot");


let theme = localStorage.getItem("theme");
if(theme == "null"){
setTheme("light")
}else{
setTheme(theme);
}

for (let i="0"; themeDots.length > i; i++){
themeDots[i].addEventListener("click", function(){
let node = this.dataset.node

//onsole.log("options clicked",node);
console.log(node, this.dataset)
setTheme(node);
})
}

function setTheme(node){
if(node == "light"){
document.getElementById("theme-style").href="panda.css"
}
if(node =="blue"){
document.getElementById("theme-style").href="blue.css"
}
if(node =="green"){
    document.getElementById("theme-style").href="green.css"
}
if(node =="purple"){
document.getElementById("theme-style").href="purple.css"
}
localStorage.setItem("theme",node)
}