
function init(){
    document.getElementById("bevitelGomb").addEventListener("click", bevitel);
}

function torles(e){
    e.target.parentNode.remove();
}

function bevitel(){
    let bevitelText = document.getElementById("bevitelMezo").value;
    if (bevitelText == '') {
        alert('Nem tudod a semmit csinálni! Adj meg egy tényleges dolgot!');
        return;
    }
    let li = document.createElement("li");
    let span1 = document.createElement("span");
    span1.classList.add("bevitelSzoveg");
    let span2 = document.createElement("span");
    span2.classList.add("x");
    span2.classList.add("float-right");

    let checkbox = document.createElement("input");
    checkbox.setAttribute("type", "checkbox");

    li.appendChild(checkbox);
    span1.textContent = bevitelText + " ";
    span2.innerHTML = "x";
    span2.addEventListener("click", torles);
    li.appendChild(span1);
    li.appendChild(span2);
    document.getElementById("lista").appendChild(li);


/*
    let formDiv = document.getElementById("form");
    let bevitelGomb = document.getElementById("bevitelGomb");
    let bevitelMezo = document.getElementById("bevitelMezo");
    
    formDiv.removeChild(bevitelMezo);
    formDiv.removeChild(bevitelGomb);*/
}




document.addEventListener("DOMContentLoaded", init);