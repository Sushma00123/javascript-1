function findingAge(age) {
    if (age>=0 && age<5) {
        console.log('Free');
    }
    else if(age>=5&&age<10){
        console.log('Child $10');
    }
    else if(age>=10&&age<65){
        console.log('Adult $20');
    }
    else{
        console.log('senior$10');
    }
}
findingAge(8)

// const dayOfWeek = prompt('enter a day');
// if (dayOfWeek=='monday') {
//     console.log('sad');
// }
// else if(dayOfWeek=="wednesday"){
//     console.log('Happieee');
// }
// else{
//     console.log('party');
// }

// function getColor(phrase){
//     //WRITE YOUR CODE BETWEEN THIS LINE: ↓ ↓ ↓ ↓ 
//    if(phrase ==='stop'){
//        console.log('red')
//    }
//    else if(phrase ==='slow'){
//        console.log('yellow')
//    }
//    else if(phrase==='go'){
//        console.log('green')
//    }
//    else{
//        console.log('purple')
//    }
   
//     //AND THIS LINE ↑↑↑↑↑
// }

////////////////////////////////////////////////
// const password = prompt('enter password')
// if(password.indexOf(' ')!==-1){
//     console.log('no space')
// }else{
// console.log('password shouldnt contain space')

// }


// const num = 102; // THIS IS THE ONLY LINE YOU SHOULD CHANGE :) 

// // DO NOT TOUCH ANYTHING BELOW (please) 
// if(num <= 100) {
//     if(num >= 50) {
//         console.log("HEY!");
//     }
// } else {
//     if (num < 103) {
//         if(num % 2 === 0){
//             console.log("YOU GOT ME!");
//         }
//     }
// }

const mystery = 'Pbdhsdg7sdh'; //CHANGE THIS VALUE TO MAKE THE CONDITIONAL BELOW TRUE



// LEAVE THIS CODE ALONE! (pretty please)
if(mystery[0] === 'P' && mystery.length > 5 && mystery.indexOf('7') !== -1){
    console.log("YOU GOT IT!!!");
}