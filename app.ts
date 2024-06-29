#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";



//displaying welcome message
console.log(
  chalk.bold.yellow(
    `\n  \t\t <<<================================================>>>`
  )
);
console.log(
  chalk.bold.blue(
    `<<<=========>>>  ${chalk.blueBright.bold(
      "Welcome To 'Hafeez Siddiqui' - Student Management System"
    )}  <<<=========>>>`
  
  )
);
console.log(
  chalk.bold.yellow(
    `\t\t <<<===============================================>>>\n`
  )
);


const randomnumber = Math.floor(10000 + Math.random() * 9000)

let myBalance: number = 0

let answer = await inquirer.prompt(
    [
        {
    name:"students",
        type:"input",
    message:chalk.magenta.bold("Enter Student`s name"),
    validate: function (value) {
        if (value.trim() !== "") {
            return true;
        }
        return "Please enter a non-empty value";
    },
},
    {
        name: "courses",
        type: "list",
        message: chalk.green("\nSelect your desired course"),
        choices: ["HTML", "CSS", "JavaScript", "TypeScript"],
    }
])
const tutionfees: { [key: string]: number } ={
    "HTML": 25000,
    "CSS": 28000,
    "JavaScript":39000,
    "TypeScript":50000,
}
console.log(chalk.bold.blue(`tution Fees : ${tutionfees[answer.courses]}/-`))
console.log(`Balance:${myBalance}\n`)


let paymentType = await inquirer.prompt(
    [
        {
            name: "payment",
            type: "list",
            message:chalk.magentaBright("\nChoose a payment method"),
            choices: ["JazzCash", "EasyPaisa", "Bank Transfer"]
    
        },
        {
            name: "amount",
            type: "input",
            message: chalk.greenBright("\nTransfer Money"),
            validate: function (value) {
                if (value.trim() !== "") {
                    return true;
                }
                return "Please enter a non-empty value";
            },
            
        }
    ]
)
console.log(chalk.blue(`Your Selected Payment Method :${paymentType.payment}\n`));

const tutionFee = tutionfees[answer.courses]
const paymentAmount = parseFloat(paymentType.amount)

if (tutionFee === paymentAmount) {
    console.log(chalk.green.bold(`\tCongratulations!, you are sucessfully enrolled in ${answer.courses}\n`));
  
    let ans = await inquirer.prompt(
        [
            {
                name:"Select",
                    type:"list",
                message:"What would you like to do next?",
                choices:["View Status","Exit"]
        
    }
    ]
    )
    if (ans.Select === "View Status") {
        console.log(chalk.magentaBright(`\t\t*****STATUS**********`));
        console.log(chalk.yellow(`1.Student name:${answer.students}`));
        console.log(chalk.blue(`2.Student Id:${randomnumber}`));
        console.log(chalk.cyanBright(`3.Course:${answer.courses}`));
        console.log(chalk.green(`4.Tution Fees:${paymentAmount}/- for ${answer.courses} course paid sucessfully`));
        console.log(chalk.red(`5.Balance :${myBalance}`));
        
    }
    else {
        console.log(chalk.bold.red(`\nExiting Student Management System\n`));
        
    }
}
else {
    console.log(chalk.redBright(`Please enter valid Amount According to your course`));
    
}
