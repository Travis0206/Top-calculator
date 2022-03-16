
let displayText = document.querySelector(".display-screen");
let btnNum = document.querySelectorAll(".btn-num");
let clearBtn = document.querySelector(".clear-btn");
let btnOperator = document.querySelectorAll(".btn-operator");
let equalBtn = document.querySelector("#equal-btn")
let btnOperating = "";
let num1 = "";
let num2 = "";
let displayConsole = ""
//clear button, changes text content for the display empty
clearBtn.addEventListener("click",()=>{
    displayText.textContent = ""
    num1 =""
    num2 = ""
})

//whenever a numbered button is clicked it changes the display content to that clicked button
btnNum.forEach(btn=>{
    btn.addEventListener("click", (e)=>{
    if(displayConsole == ""){
    let btnTxt = e.target.textContent;
    displayText.textContent += btnTxt;
    }else{
        displayText.textContent = ""
        let btnTxt = e.target.textContent;
        displayText.textContent += btnTxt
        displayConsole = ""
    }
    })
})

//basic math operators
function add(num1,num2){
    num1= parseInt(num1)
    num2= parseInt(num2)
    return num1+num2;
}
function subtract(num1,num2){
    num1= parseInt(num1)
    num2= parseInt(num2)
    return num1-num2;
}
function multiply(num1,num2){
    num1= parseInt(num1)
    num2= parseInt(num2)
    return num1*num2;
}
function divide(num1,num2){
    num1= parseInt(num1)
    num2= parseInt(num2)
    return num1/num2;
}

//operate function calling back the basic math operations
function operate(operator,num1,num2){
    if (operator == "+"){
        console.log(add(num1,num2))
        return add(num1,num2)
    }else if (operator == "-"){
        console.log(subtract(num1,num2))
        return subtract(num1,num2)
    }else if (operator == "*"){
        console.log(multiply(num1,num2))
        return multiply(num1,num2)
    }else if (operator == "/"){
        console.log(divide(num1,num2))
        return divide(num1,num2)
    }
}

// thinking about pushing the values into an object and then having the function input values from the object

// let calculatorValues = {
//     operator: "",
//     firstNumber:"",
//     secondNumber:"",
// }


//this is for the button operators, it saves the previous value as the last text on the display
//it then sets an operator and clears the display
btnOperator.forEach(btn=>{
    btn.addEventListener("click", (e)=>{
    
        if (num1 != ""){
        // num2=num1; 
        num2= displayText.textContent
        console.log(num2)
        displayText.textContent = operate(btnOperating,num1,num2);
        btnOperating = e.target.textContent;
        console.log(btnOperating)
        num1= displayText.textContent;
        displayConsole = num1
        // displayText.textContent = "";
        return btnOperating;  
    } else {
        btnOperating = e.target.textContent;
        num1 = displayText.textContent;
        console.log(num1);
        displayText.textContent = "";
        console.log(btnOperating)
        return btnOperating
    }
  
    })
})

//the equal button sets the current text on the display as the num2 value
//it then calls on the operate function 
equalBtn.addEventListener("click", ()=>{
    num2 = displayText.textContent;
    console.log(num2);
    displayText.textContent = operate(btnOperating,num1,num2);
    displayConsole = displayText.textContent
})


