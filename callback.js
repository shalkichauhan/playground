// setTimeout(() => {
//     console.log(" ..")
// }, 2000)
//
//
// const shalki = (x, callback) => {
//     setTimeout(() => {
//         const data = x + 5
//
//         callback(data)
//     }, 1000)
//
//
// }
//
// shalki(4, (y) => {
//     console.log(y)
// })
//
//
// const sum = (a, b, callback) => {
//
//     setTimeout(() => {
//         const f = a + b
//         callback(f)
//     }, 6000)
// }
//
// sum(3, 5, (v) => {
//     console.log(v)
// })
//const request = require('request')
const shalki = require('./weather_app.js')


shalki(1, (y) => {
    console.log(y)
})