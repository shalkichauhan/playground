// const obj = {
//     party: " birthday party ",
//     guests: "friends",
//     name: ['shalki', 'ankit', 'zubin'],
//     myfun() {
//         this.name.forEach((x) => {
//             console.log(x)
//         })
//
//     }
// }
//
// obj.myfun()
// Goal: Create method to get incomplete tasks
//
// 1. Define getTasksToDo method
// 2. Use filter to to return just the incompleted tasks (arrow function)
// 3. Test your work by running the script

const tasks = {
    tasks: [{
        text: 'Grocery shopping',
        completed: true
    }, {
        text: 'Clean yard',
        completed: false
    }, {
        text: 'Film course',
        completed: false
    }],
    getTasksToDo() {


        const a = this.tasks.filter((n) => {
            return n.completed === false
        })
        return a


    }

    //     const shalki = this.tasks.filter((x) => {
    //         return (x.completed === false)
    //
    //     })
    //     return shalki
    // }
}

console.log(tasks.getTasksToDo())
