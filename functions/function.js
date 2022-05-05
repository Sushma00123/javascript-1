// const string = 'sushma'
// console.log(string.charAt(0).toUpperCase()+string.slice(1))

// function sumArray(array){
//     for(let i=0;i<=array.length-1;i++){
//         let total = total+array[i]
//         return total
//     }
    
// }
// sumArray([1,2,3])

function sumArray(arr) {
    let total = 0
    for (let index = 0; index <=arr.length-1; index++) {
        total = total+arr[index]
        
        
    }
    return total
}
sumArray([1,2,3])