//s-w---sWon   //w-g----w won   //s-g--g won

let [computer_score,user_score]=[0,0]
let result =document.getElementById('result')
let choice_object={
    'snake':{
        'snake':'draw',
        'water':'win',
        'gun':'lose'
    },
    'water':{
        'snake':'lose',
        'water':'draw',
        'gun':'win'
    },
    'gun':{
        'snake':'win',
        'water':'lose',
        'gun':'draw'
    }
}



 function checker(input) {
    
var choices=['snake','water','gun']

var num= Math.floor(Math.random()*3)
console.log(num);
 
document.getElementById("comp_choice").innerHTML=`computer choose <span> ${choices[num].toUpperCase()}</span>`

document.getElementById("user_choice").innerHTML=`you choose <span> ${input.toUpperCase()}</span>`

let computer_choice=choices[num]
console.log(computer_choice);
 let a =choice_object[input][computer_choice]
 console.log(a);
 
switch(choice_object[input][computer_choice]){
    case 'win':
        result.style.cssText="background-color:#cefdce;color:#689f38";
        result.innerHTML='YOU WIN'
        user_score++; 
        break;

    case 'lose':
            result.style.cssText="background-color:#ffdde0;color:#d32f2f";
            result.innerHTML='YOU LOSE'
            computer_score++;
            break;
    default:
        result.style.cssText="background-color:#e5e5e5;color:#808080";
        result.innerHTML='DRAW'
        break;         
}
document.getElementById("computer_score").innerHTML=computer_score;
document.getElementById("user_score").innerHTML=user_score;

 }
 
 