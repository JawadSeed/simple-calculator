#!/usr/bin/env node 

import inquirer from "inquirer"

const answer = await inquirer.prompt([
    
{message:"Enter firstnumber", type:"number", name:"FirstNumber"},
{message:"Enter secondnumber", type:"number", name:"SecondNumber"},

{
    message:"select one off the to perform operator",
    type:"list",
    name:"operator",
    choices:["Addition","Multiplication","Subtraction","Division"],
}

]);
//conditional statement//

if (answer.operator === "Addition") {
    console.log("The answer of Addition",answer.FirstNumber + answer.SecondNumber);
} else if (answer.operator === "Subtraction") {
    console.log("The answer of Subtraction",answer.FirstNumber - answer.SecondNumber);
} else if (answer.operator === "Multiplication") {
    console.log("The answer of Multiplication",answer.FirstNumber * answer.SecondNumber);
} else if (answer.operator === "Division") {
    if (answer.SecondNumber === 0) {
        console.log("Error: Division by zero");
    } else {
        console.log("The answer of Division",answer.FirstNumber / answer.SecondNumber);
    }
} else {
    console.log("Invalid operator");
} 


