let elementP = document.getElementsByTagName("p");

function alea() {
    return Math.ceil(Math.random()*100);
}

for(let i = 0; i < elementP.length; i++){
    elementP.item(i).innerHTML = alea().toString();
}
