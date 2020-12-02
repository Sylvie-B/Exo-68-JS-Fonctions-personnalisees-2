let elementP = document.getElementsByTagName("p");
console.log(elementP);

function alea() {
    return Math.ceil(Math.random()*100);
}
console.log(alea());

for(let i = 0; i < elementP.length; i++){
    elementP.item(i).innerHTML = alea().toString();
}

