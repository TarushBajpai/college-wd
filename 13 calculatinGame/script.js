let countdown = document.querySelector('.cooldownCount');
let num1 = document.querySelector('.numOne');
let num2 = document.querySelector('.numTwo');
let operator = document.querySelector('.operator');
let input = document.querySelector('#inputResult');
let resultDisplay = document.querySelector('.result');
let base = document.querySelector('.base');
let operators = ['+','-','/','*'];
let calculatedResult;
let timer;

let clock = (timeOutTime)=>{
    input.disabled = false;
    startBtn.disabled = true;
    timer = setInterval(()=>{
    countdown.textContent =timeOutTime;
    if(timeOutTime === 0) {
        clearInterval(timer);
        input.disabled = true;
        startBtn.disabled = false;
        displayResult();
    }
    timeOutTime--;
    },1000);
}

let generateEquation = ()=>{
    let idx = Math.floor(Math.random() * operators.length);

    let randomNum1 = Math.floor(Math.random() * 500) + 1;
    let randomNum2 = Math.floor(Math.random() * 10) + 1;
    
    num1.textContent = randomNum1;
    num2.textContent = randomNum2;
    operator.textContent =operators[idx];
    
    let op = operators[idx];
    switch(op){
        case '+':
            calculatedResult = randomNum1 + randomNum2;
            break;
        case '-':
            calculatedResult = randomNum1 - randomNum2;
            break;
        case '*':
            calculatedResult = randomNum1 * randomNum2;
            break;
        case '/':
            calculatedResult = Number((randomNum1 / randomNum2).toFixed(2));
            break;

    }
}

let displayResult = ()=>{
    if (input.value.trim() === "") {
    alert("INVALID INPUT");
    return;
    }
    let enteredResult = Number(input.value);
    let resultText;
    let correctRes = "";
    if(enteredResult === calculatedResult) {    
        resultText="Correct Answer";
        resultDisplay.style.color = 'green';
        resultDisplay.innerHTML = `${resultText}`;
        base.style.boxShadow = '0 0 8px 4px rgb(3, 255, 53)';
    }
    else{
        resultText= "Wrong Answer";  
        resultDisplay.style.color = 'red';
        resultDisplay.innerHTML = `<span style="color:red;">Wrong Answer</span><br>
                                    <span style="color:green;">Correct Answer: ${calculatedResult}</span>`;
        base.style.boxShadow = '0 0 8px 4px rgb(255, 3, 3)';
    }
    
    
}

let startBtn = document.querySelector('.startBtn');
startBtn.addEventListener("click", () => {
    input.focus();
    base.style.boxShadow = '';
    input.value = "";
    resultDisplay.innerHTML = "";
    generateEquation();
    clock(9);

});
input.addEventListener("keydown", function(event){

    if(event.key === "Enter"){
        clearInterval(timer);
        startBtn.disabled = false;
        input.disaled = true;
        displayResult();
    }

});

