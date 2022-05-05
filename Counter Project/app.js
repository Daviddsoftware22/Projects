var submitButton1 = document.getElementById("btnincrease")
submitButton1.addEventListener("click",onBtnClickIncrease)

var submitButton2 = document.getElementById("btndecrease")
submitButton2.addEventListener("click",onBtnClickDecrease)

var submitButton3 = document.getElementById("btnreset")
submitButton3.addEventListener("click",onBtnClickReset)


var x = 0
document.getElementById("number").innerHTML = x
function onBtnClickIncrease() {
    x++
    document.getElementById("number").innerHTML = x
}

function onBtnClickDecrease() {
    x--
    document.getElementById("number").innerHTML = x
}

function onBtnClickReset () {
    x = 0
    document.getElementById("number").innerHTML = x
}