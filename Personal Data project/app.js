
function fn1(){
    var firstname = document.getElementById("fname").value
    var lasttname = document.getElementById("lname").value
    var nation = document.getElementById("nation").value
    var sex = document.getElementById("sex").value
    var codnumeric = document.getElementById("CNP").value
    console.log(firstname, lasttname,nation,sex,codnumeric)
    document.getElementById('show').innerHTML = "Personal Data : "
    document.getElementById('showfname').innerHTML = "First name : " + firstname
    document.getElementById('showlname').innerHTML = "Last name : " + lasttname
    document.getElementById('shownation').innerHTML = "Nationality : " + nation
    document.getElementById('showgender').innerHTML = "Gender : " + sex
    document.getElementById('showCNP').innerHTML = "CNP : " + codnumeric
    
}