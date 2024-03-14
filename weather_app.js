const request = require('request')

const ur1 = (x, callback) => {

    const url1 = 'https://api.tvmaze.com/search/shows?q=girls'
    request({url: url1, json: true}, (error, response) => {
        if (error) {
            console.log(" we faced an error.....")
        } else {
            callback(response._events.end[x])
        }
    })


}

// ur1(1, (y) => {
//     console.log(y)
// })

module.exports = ur1


// const url1 = 'https://api.oceandrivers.com/static/resources.json'
//
// request({url: url1, json: true}, (error, response) => {
//
//     if (error) {
//         console.log(" wait a minute, There is an error in first url : weather ")
//     } else if (response.body.error) {
//         console.log(" unable to find the location")
//     } else {
//
//         console.log(" the answer is ...", response.body, " \n the EnD")
//
//     }
// })
//
//
// const url2 = 'https://api.tvmaze.com/search/shows?q=girls'
//
// request({url: url2, json: true}, (error, response) => {
//     if (error) {
//         console.log(" There is an error in second URL: TV show ")
//     } else {
//         console.log(response._events.end[1])
//
//     }
// })

