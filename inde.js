
// let names = prompt('what is your name')
// let color = prompt('what is your best color')

// let message = names + ' your best colour is ' +  color

// console.log(message)

// let x = prompt('what is the first number')
// let y = prompt('what is the second number')

// x = Number(x)
// y = Number(y)
// let cal = x + y 

// console.log(cal)


// let adj = prompt('what is your adjacent')
// let opp = prompt('what is your opposite')
// adj = Number(adj)
// opp = Number(opp)

// let hyp = Math.sqrt(adj**2 + opp**2)


// console.log('your hypothenus is ' + hyp)
// let pi = Math.PI
// let r = prompt("what is the radius of the circle")
// r = Number(r)

// let area = pi * r**2

// console.log(area)


// let radius = window.prompt('what is the radius');
// radius = Number(radius)

// let pi = Math.PI
// let periperi = 2 * pi * radius

// console.log(periperi)

// let write = window.prompt('write a  number from 1 to 10');

// write = Number(write)

// if (write == 1){
//     console.log('one')
// }else if (write == 2){
//     console.log('two')
// }else if ( write ==3){
//     console.log('three')
// }else if( write == 4){
//     console.log('four')
// }else if( write ==5){
//     console.log('five')
// }else if (write ==6){
//     console.log('six')
// }else if (write ==7){
//     console.log('seven')
// }else if (write ==8){
//     console.log('eight')
// }else if (write ==9){
//     console.log('nine')
// }else if (write ==10){
//     console.log('ten')
// }    

// else{
//     console.log( write + ' is not between 1 to 10 ')
// }

// looping 

// let count = 0


// while (count< 1000){
//     console.log('while')
//     count++
// }

let trials = 0;  // Initialize a counter to track the number of trials

while (trials < 3) {  // Repeat the loop 3 times
    let write = window.prompt('Write a number from 1 to 10');

    write = Number(write);

    if (write == 1) {
        console.log('one');
    } else if (write == 2) {
        console.log('two');
    } else if (write == 3) {
        console.log('three');
    } else if (write == 4) {
        console.log('four');
    } else if (write == 5) {
        console.log('five');
    } else if (write == 6) {
        console.log('six');
    } else if (write == 7) {
        console.log('seven');
    } else if (write == 8) {
        console.log('eight');
    } else if (write == 9) {
        console.log('nine');
    } else if (write == 10) {
        console.log('ten');
    } else {
        console.log(write + ' is not between 1 and 10');
    }

    trials++;  // Increment the counter for each trial
}

console.log('3 trials complete');  // After the loop finishes, log the completion message

