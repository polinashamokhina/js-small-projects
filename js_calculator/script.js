const operButtons = document.querySelectorAll(".operator");
const calculButton = document.querySelector("#calculate");
const num1 = document.querySelector("#num1");
const num2 = document.querySelector("#num2");
const resultSpan = document.querySelector("#result");

let selectedOperator = "+";
let result = 0;

operButtons.forEach(
    (button) => {   //стрелочная функция
        button.addEventListener("click", function() {  //анонимная функция
            operButtons.forEach(btn => btn.style.background = "#ccc")
            this.style.background = "#58ab58";
            selectedOperator = this.getAttribute("data-op");
            console.log(selectedOperator);
        })
    }
)

calculButton.addEventListener("click", function() {  //анонимная функция
    if (selectedOperator == "+"){
        result = Number(num1.value) + Number(num2.value);
    }
    else if (selectedOperator == "-"){
        result = Number(num1.value) - Number(num2.value);
    }
    else if (selectedOperator == "*"){
        result = Number(num1.value) * Number(num2.value);
    }
    else if (selectedOperator == "/"){
        if (num2.value == 0){
            console.log("You cannot devide by 0");
            result = "Деление на 0 невозможно, пожалуйста, введите другое число2";
        }
        else {
            result = Number(num1.value) / Number(num2.value);
        }
        
    }
    console.log(result);
    resultSpan.innerText = result;
})

