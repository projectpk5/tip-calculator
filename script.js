
const customButton = document.getElementById("buttonFormat1");
const customInput = document.getElementById("buttonFormat2");
let billValue = Number(document.getElementById("bill").value);
let numberOfPeople = Number(document.getElementById("people").value);

customButton.addEventListener(
    "click", function customFunction() {
        customButton.style.display = "none";
        customInput.style.display = "block";
        customInput.style.width = "50%";
})

// for custom tip
customInput.addEventListener(
    "keypress", function buttonFunction(event) {
        if (event.key=="Enter") {
            event.preventDefault();
            let customValue = Number(document.getElementById("buttonFormat2").value);
            customButton.style.display = "block";
            customInput.style.display = "none";;
            calculateTip(customValue);
        }
    }
)


// for fixed tip
document.querySelectorAll('.buttonFormat').forEach((button)=>{
    button.addEventListener('click', function() {
    const fixedTip = Number(this.textContent.slice(0,-1));
    calculateTip(fixedTip);
})
})


// tip calculator
function calculateTip(fixedTip) {
    if (numberOfPeople === "") {
        console.log((fixedTip/100)*billValue);
        document.getElementById("perPersonAmount").value = `$${(fixedTip/100)*billValue}`;
        document.getElementById("totalTipAmount").value = `$${(fixedTip/100)*billValue}`;
    } else if (numberOfPeople !== "") {
        console.log(((fixedTip/100)*billValue)/numberOfPeople);
        document.getElementById("perPersonAmount").value = `$${(fixedTip/100)*billValue}`;
        document.getElementById("totalTipAmount").value = `$${((fixedTip/100)*billValue)/numberOfPeople}`;
    }
}

// reset button
document.getElementById("resetButton").addEventListener('click', ()=>{
    document.getElementById("perPersonAmount").value = "$";
    document.getElementById("totalTipAmount").value = "$";
    document.getElementById("bill").value = "";
    document.getElementById("people").value = "";
    document.getElementById("buttonFormat2").value = "";
})