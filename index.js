#! /user/bin/env node
const randomNumber = Math.floor(Math.random() * 6 + 1);
import inquirer from "inquirer";
const answers = await inquirer.prompt([{
        name: "guessNumber",
        type: "number",
        message: "Please guess a number between 1-6",
    },]);
if (answers.guessNumber == randomNumber) {
    console.log("Congratulation You guessed the correct number");
}
else {
    console.log("You guessed wrong number");
}
