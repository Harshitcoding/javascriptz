let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toJSON())
// console.log(myDate.toISOString())
// console.log(myDate.toDateString())
// console.log(myDate.toLocaleDateString())
// console.log(myDate.toUTCString())

//aur Date ka type of object hota h 

console.log(myDate.toLocaleString('Default',{
    weekday : 'long',
    timeZone : "to"

}))
