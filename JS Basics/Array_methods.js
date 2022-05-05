// remove duplicates
const arr = [1,4,2,3,2,1,3,4]
const x= arr.filter((val,index)=>{
    if(arr.indexOf(val)===index){
        return arr
    }
   
})
console.log(x);

// prime Number
function isPrime(num) {
    let count=0;
    for (let index = 0; index <=num; index++) {
        if(num%index===0){
            count = count+1
        }
        
    }
    if(count==2){
        console.log('is a prime number');
    }
    else{
        console.log('not a prime number');
    }
    
}
isPrime(4)

// factorial
const n=3;
let fact=1
for (let index = 1; index <=n; index++) {
    fact = fact*index
}
console.log(fact);
// sort
// const array = [12,3,1,4,45,23,32,100]
// const y= array.sort((a,b)=>a-b)
// console.log(y[y.length-2]);

    // let maximum = parseInt(prompt('enter the maximum number'))
//     while(!maximum){
//         maximum = parseInt(prompt('enter a valid number!'))
//     }
//     const targetNum = Math.floor(Math.random()*maximum)+1
//     console.log(targetNum)

// let guess = parseInt(prompt('enter first guess'))
// while (guess!==targetNum){
//     if(guess>targetNum){
//         guess=parseInt(prompt('too high'))
//     }else{
//         guess=parseInt(prompt('to less'))
//     }
// }
// console.log('you got it')

for (const ele of arr) {
    let x  = ele**ele
    console.log(x)  
}
// iterate objects
const testScore = {
    keenan :123,
    damon:234,
    kim:98,
    shawn:76
}
for (const ele in testScore) {
    console.log(ele);
}