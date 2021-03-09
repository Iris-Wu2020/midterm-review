/* Assignment 3
Exercise 6 JavaScript code
*/
console.log("Wu's Output from Assignment 3 Exercise 6");


let hour;
let minute;
let second;
while(true) {
    hour = Number( prompt( 'Enter the hours of your time:' ) );
    if( (hour >= 0) && (hour <= 23) ) {
        break;
    }
}
while (true) {
    minute = Number( prompt( 'Enter the minutes of your time:' ) );
    if( (minute >= 0) && (minute <= 59) ) {
        break;
    }
}

while (true) {
    second = Number( prompt( 'Enter the seconds of your time:' ) );
    if( (second >= 0) && (second <= 59) ) {
        break;
    }
}
console.log(`Time input: ${hour}h${minute}m${second}s`)

second += 1

if (second === 60) {
    minute += 1;
    second = 0;
} 

if (minute === 60) {
    minute = 0;
    hour += 1;
}

if (hour === 24) {
    hour = 0;
}

console.log(`One second later: ${hour}h${minute}m${second}s`)