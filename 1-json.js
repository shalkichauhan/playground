// const book = {
//     title: " Ego is the enemy",
//     author: "Ryan Holiday"
//
// }
// const bookJSON = JSON.stringify(book)
//
// fs.writeFileSync('1-JSON.json', bookJSON)
// // console.log(bookJSON)
// // const parsedData = JSON.parse(bookJSON)
// // console.log(parsedData.author)
// const fileBuffer = fs.readFileSync('1-JSON.json')

// //console.log(fileBuffer)
// const dataJSON = fileBuffer.toString()
// console.log(dataJSON)
// const data = JSON.parse(dataJSON)
// // console.log(data.title)
// // const fs = require('fs')
//
// // const dataString = JSON.stringify(female)
// //const newFile = fs.writeFileSync('2-JSON.json', female)
//
// //console.log(newFile)
// // const pasr = JSON.parse(dataString)
// // console.log(pasr)
// // // const mydata = fs.writeFileSync('1-JSON.json', female)
// // // console.log(mydata)
// const fs = require('fs')
//
// // const female = {
// //     name: " Andrew",
// //     planet: "earth",
// //     age: 27
// // }
// //
// // const femaleJSON = JSON.stringify(female)
// // fs.writeFileSync('2-JSON.json', femaleJSON)
//
// const readValue = fs.readFileSync('2-JSON.json')
// //console.log(readValue)
// const stringValue = readValue.toString()
// console.log(stringValue)
// const par = JSON.parse(stringValue)
// console.log(par)
// par.planet = "mars"
// par.age = 31
// par.name = 'shalki'
// //console.log(par.planet)
// //const a = fs.appendFileSync('2-JSON.json',' hello ')
//
// const myVal = JSON.stringify(par)
// fs.writeFileSync('2-JSON.json', myVal)
//const my_file = require('1-JSON.json')
// const fs = require('fs')
// const my = fs.readFileSync('1-JSON.json')
//
//
// const correct_data = my.toString()
// const par = JSON.parse(correct_data)
// par.name = 'Gunther'
// par.age = 54
//
// const userJson = JSON.stringify(par)
// fs.writeFileSync('1-JSON.json', userJson)
//
//
//


const fs = require('fs')

const loadNotes = function () {


    const data_buffer = fs.readFileSync('2-JSON.json')
    const string_data = data_buffer.toString()
    const parse_data = JSON.parse(string_data)

    parse_data.name = "Ram"
    parse_data.city = "Sydney"

    new_stringdata = JSON.stringify(parse_data)
    const new_data = fs.writeFileSync('2-JSON.json', new_stringdata)
}


module.exports = loadNotes()

















