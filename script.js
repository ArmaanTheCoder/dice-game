var n1 = (Math.random() * 6);
var n1dice = Math.floor(n1);

var n2 = (Math.random() * 6);
var n2dice = Math.floor(n2);


if (n2dice === 0) {
    document.querySelector(".d02").classList.add("visibility");
    document.querySelector(".d03").classList.add("visibility");
    document.querySelector(".d04").classList.add("visibility");
    document.querySelector(".d05").classList.add("visibility");
    document.querySelector(".d06").classList.add("visibility");
}
else if (n2dice === 1) {
    document.querySelector(".d01").classList.add("visibility");
    document.querySelector(".d03").classList.add("visibility");
    document.querySelector(".d04").classList.add("visibility");
    document.querySelector(".d05").classList.add("visibility");
    document.querySelector(".d06").classList.add("visibility");
}

else if (n2dice === 2) {
    document.querySelector(".d01").classList.add("visibility");
    document.querySelector(".d02").classList.add("visibility");
    document.querySelector(".d04").classList.add("visibility");
    document.querySelector(".d05").classList.add("visibility");
    document.querySelector(".d06").classList.add("visibility");
}
else if (n2dice === 3) {
    document.querySelector(".d01").classList.add("visibility");
    document.querySelector(".d02").classList.add("visibility");
    document.querySelector(".d03").classList.add("visibility");
    document.querySelector(".d05").classList.add("visibility");
    document.querySelector(".d06").classList.add("visibility");
}
else if (n2dice === 4) {
    document.querySelector(".d01").classList.add("visibility");
    document.querySelector(".d02").classList.add("visibility");
    document.querySelector(".d03").classList.add("visibility");
    document.querySelector(".d04").classList.add("visibility");
    document.querySelector(".d06").classList.add("visibility");
}
else if (n2dice === 5) {
    document.querySelector(".d01").classList.add("visibility");
    document.querySelector(".d02").classList.add("visibility");
    document.querySelector(".d03").classList.add("visibility");
    document.querySelector(".d04").classList.add("visibility");
    document.querySelector(".d05").classList.add("visibility");
}

if (n1dice === 0) {
    document.querySelector(".d2").classList.add("visibility");
    document.querySelector(".d3").classList.add("visibility");
    document.querySelector(".d4").classList.add("visibility");
    document.querySelector(".d5").classList.add("visibility");
    document.querySelector(".d6").classList.add("visibility");
}
else if (n1dice === 1) {
    document.querySelector(".d1").classList.add("visibility");
    document.querySelector(".d3").classList.add("visibility");
    document.querySelector(".d4").classList.add("visibility");
    document.querySelector(".d5").classList.add("visibility");
    document.querySelector(".d6").classList.add("visibility");
}

else if (n1dice === 2) {
    document.querySelector(".d1").classList.add("visibility");
    document.querySelector(".d2").classList.add("visibility");
    document.querySelector(".d4").classList.add("visibility");
    document.querySelector(".d5").classList.add("visibility");
    document.querySelector(".d6").classList.add("visibility");
}
else if (n1dice === 3) {
    document.querySelector(".d1").classList.add("visibility");
    document.querySelector(".d2").classList.add("visibility");
    document.querySelector(".d3").classList.add("visibility");
    document.querySelector(".d5").classList.add("visibility");
    document.querySelector(".d6").classList.add("visibility");
}
else if (n1dice === 4) {
    document.querySelector(".d1").classList.add("visibility");
    document.querySelector(".d2").classList.add("visibility");
    document.querySelector(".d3").classList.add("visibility");
    document.querySelector(".d4").classList.add("visibility");
    document.querySelector(".d6").classList.add("visibility");
}
else if (n1dice === 5) {
    document.querySelector(".d1").classList.add("visibility");
    document.querySelector(".d2").classList.add("visibility");
    document.querySelector(".d3").classList.add("visibility");
    document.querySelector(".d4").classList.add("visibility");
    document.querySelector(".d5").classList.add("visibility");
}

if (n1dice > n2dice) {
    document.querySelector(".h22").classList.add("visibility");
    document.querySelector(".h33").classList.add("visibility");
}
else if (n1dice < n2dice) {
    document.querySelector(".h11").classList.add("visibility");
    document.querySelector(".h33").classList.add("visibility");
}
else if (n1dice = n2dice) {
    document.querySelector(".h22").classList.add("visibility");
    document.querySelector(".h11").classList.add("visibility");
}