#!/usr/bin/env node
import chalk from "chalk";
import inquirer from 'inquirer';
import gradient from 'gradient-string';
import chalkAnimation from "chalk-animation";
import figlet from 'figlet';
import { createSpinner } from "nanospinner";


const sleep = (ms = 2000) => new Promise((r) => setTimeout(r, ms));
async function welcome(){
    const title = chalkAnimation.rainbow('Hello World !! Welcome to GitDetails\n');
    await sleep();
    title.stop();
}

let name;
let version;
let description;
let startPoint;
let type;
let keyword;
let author;
let license;



console.log(`${chalk.cyanBright('Hello guys')}`)

async function askDetails() {

    var path = process.cwd()
    var directory = path.substring(path.lastIndexOf('/')+1);
    const pkgName = await inquirer.prompt({
      name: 'pkgName',
      type: 'input',
      message: 'package name',
      default() {
        return directory;
      },
    });
    name = pkgName.pkgName;
  }
  
    console.log(name)

  //   const answers1 = await inquirer.prompt({
  //     name: 'userName',
  //     type: 'input',
  //     message: 'What is your age?',
  //     default() {
  //       return 'noName';
  //     },
  //   });
  
  //   console.log(answers1.userName)
  // }

// async function askUser(){
//     const choice = await inquirer.prompt({
//         name:'options',
//         type:'list',
//         message:'Choose the option',
//         choices:[
//             'Repos',
//             'User Details',
//             'Data',
//             'Fav Language'
//         ]
//     });
//     console.log(choice.options)
// }

await welcome();
await askDetails()
await askUser()