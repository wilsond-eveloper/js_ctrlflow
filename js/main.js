// For Loop
// for(let i = 0; i < 5; i++) {
//     console.log(`In loop`, i)
// }

// console.log('Loop finished')
// const names = ['Sam', 'Louis', 'Bruce']

// for(let i = 0; i < names.length; i++) {
//     // console.log(names[i])
//     let html = `<div>${names[i]}</div>`
//     console.log(html)
// }

// While Loop
// const names = ['Sam', 'Louis', 'Bruce']
// let i = 0

// while(i < 5) {
//     console.log(`Inside loop`, i)
//     i++
// }
// let i = 3
// do {
//     console.log('Value of i is: ', i)
//     i++
// }while(i < 5) 


// If statements
// const age = 19

// if(age <= 21) {
//     console.log('You are under age')
// }

// const ninjas = ['shawn', 'ryu', 'chun-li', 'shaun']
// if(ninjas.length > 3) {
//     console.log(`Those are a few ninjas`);
// }

// const password = 'passw0rd'

// if(password.length >= 8) {
//     console.log('The password is long enough')
// }

// Else if statement
// const password = 'pass'

// if(password.length >= 12) {
//     console.log('The password maybe might strong') 
// }
// else if(password.length >= 8) {
//     console.log('The password is long enough')
// } else {
//     console.log("The password isn't long enough")
// }

// Logical operators - OR || and AND && 

// const password = 'p4$$w0rd'

// if(password.length >= 12 && password.includes('@')) {
//     console.log('That password is mighty strong')
// } else if (password.length >= 8 || password.includes('@') && password.length >= 5) {
//     console.log('That password is long enough')
// } else {
//     console.log("That password isn't strong")
// }

// Logical NOT (!)
// let user = false

// if (!user) {
//     console.log('You must be logged in to continue')
// }

// Break and continue

// const scores = [50, 25, 0, 30, 100, 20, 10]

// for (let i = 0; i < scores.length; i++) {
//     if(scores[i] === 0) {
//         continue
//     }

//     console.log('your score: ', scores[i])

//     if(scores[i]=== 100) {
//         console.log('Congrats, you got the top score!')
//         break
//     }
// }

// Switch statements
// const grade = 8.0

// switch(grade) {
//     case 10: 
//         console.log('Congrats you get the higher score')
//         break
//     case 9:
//         console.log('Congrats you get the less higher score')
//         break
//     case 8:
//         console.log('Congrats, you get almost there')
//         break
//     case 7:
//         console.log('Congrats, do better next time')
//         break
//     case 6: 
//         console.log('You better try hard the next time')
//         break
//     case 5:
//         console.log("I'm sorry but you did barely the minimum")
//     default: 
//         console.log("Not a valid gradex")       
// }

// Variables & block scope
const age = 30

if(true) {
    const age = 40;
    const name = 'Max'
    console.log('Inside 1st code block: ', age, name)

    if(true) {
        const age = 50
        console.log('Inside 2nd code block: ', age)
        var test = 'Hello'
    }
}

console.log('Outside code block: ', age, test)
