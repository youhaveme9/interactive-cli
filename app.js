// import { exec } from 'child_process';
// exec('sudo npm install express')
console.log(process.cwd())
var path = process.cwd()
var directory = path.substring(path.lastIndexOf('/')+1);
console.log(directory)