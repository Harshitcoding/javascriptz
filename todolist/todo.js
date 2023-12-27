const inputbox = document.querySelector("#input-box")
const listcontainer = document.querySelector("#list-container")

function myfunc(){
   if(inputbox.value === ""){
    alert ("you have to write something")
   }else{
    let li = document.createElement("li")
    li.innerHTML = inputbox.value
    listcontainer.appendChild(li);
    let span = document.createElement("span")
    span.innerHTML = "\u00d7"
    li.appendChild(span);
   }
   inputbox.value = ""
   saveData()
}

listcontainer.addEventListener("click" , function (e) {
    if(e.target.tagName === "li"){
        e.target.classList.toggle("checked");
        saveData()
    }else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();   
        saveData() 
    }
},false)

function saveData() {
    localStorage.setItem("data" , listcontainer.innerHTML)
}

function showtast(){
    listcontainer.innerHTML = localStorage.getItem("data")
}

showtast()