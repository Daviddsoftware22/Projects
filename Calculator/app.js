let display = document.getElementById("display")

let buttons = Array.from(document.getElementsByClassName("button"))

buttons.map(button => {
    button.addEventListener('click', (e) => {
        switch(e.target.innerText){
            case 'CE':
                display.innerText = "";
                break
            case '=':
                try{
                    display.innerText= eval(display.innerText)
                } catch {
                display.innerText= "EROOR";
                }
                break
            case 'Clear':
                if(display.innerText){
                    display.innerText = display.innerText.slice(0,-1);
                }
                break
            default:
                display.innerText += e.target.innerText
        }
    })
})

console.log(button)