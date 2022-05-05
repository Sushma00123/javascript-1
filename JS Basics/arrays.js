const a=[1,2,3,4,6]
a[2] = 21;
console.log(a);

// concat

// const b=['sushma',32,'bangalore']
// const ans = a.concat(b)
// console.log(ans.includes('sushma'))
// console.log(ans.indexOf('bangalore',5))
// console.log(ans.reverse())//modify the original array
// console.log(ans)
// console.log(ans.slice(2,6))


const restaurant = {
    name: 'Ichiran Ramen',
    address: `${Math.floor(Math.random() * 100) + 1} Johnson Ave`,
    city: 'Brooklyn',
    state: 'NY',
    zipcode: '11206',
}
const fullAddress = restaurant.address+restaurant.city+restaurant.state+restaurant.zipcode
console.log(fullAddress);

for(let i=1; i<=6; i++){
    console.log('da ba dee da ba daa')
}

// for (let index = 25; index>=0; index--){
//   console.log(index);
    
// }
const people = ["Scooby", "Velma", "Daphne", "Shaggy", "Fred"]; //DONT TOUCH THIS LINE!
for (let index = 0; index < people.length; index++) {
console.log(people[index].toUpperCase())
    
}