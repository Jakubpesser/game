let time = randint(20, 60)

input.onButtonPressed(Button.A, function () {

    basic.pause(time * 100)
    basic.showIcon(IconNames.Heart)
    music.playTone(Note.GSharp3, 1500)
    basic.pause(1000)
    basic.clearScreen()
})

//random čas mezi 2 a 6 sekund
const leftDP: DigitalPin = DigitalPin.P14;
let leftD: boolean = false;
pins.setPull(leftDP, PinPullMode.PullNone)


basic.forever(function () {
    leftD = pins.digitalReadPin(leftDP) === 0; //leftD je true, pokud detekuje překážku

    basic.pause(20);
    if (leftD == true) {

        basic.showLeds(`
        . . # . .
        . # # . .
        # . # . .
        . . # . .
        # # # # #
        `)
        basic.pause(2000);
        basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    }
})

const rightDP: DigitalPin = DigitalPin.P8;
let rightD: boolean = false;
pins.setPull(rightDP, PinPullMode.PullNone)


basic.forever(function () {
    rightD = pins.digitalReadPin(rightDP) === 0; //leftD je true, pokud detekuje překážku

    basic.pause(20);
    if (rightD == true) {
        basic.showLeds(`
        . # # # .
        # . . . #
        . . . # .
        . .# . .
        # # # # #
        `)
        basic.pause(2000);
        basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    }
})

//jestli sensor detekuje stěnu tak to udělá 1 nebo 2(záleží na jakým sensoru)
let start_timeA = 0


let start_timeB = 0


let result

function timerA() {
    start_timeA = control.millis()
}
input.onButtonPressed(Button.A, function () {

    let timeA = (control.millis() - start_timeA)
    //basic.showNumber(timeA)
})



function timerB() {
    start_timeB = control.millis()
}
input.onButtonPressed(Button.B, function () {

    let timeB = control.millis() - start_timeB
    //basic.showNumber(timeB)
})

if (timeA !== 0) {

    basic.showNumber(8)
}

// if ((control.millis() - start_timeA) && (control.millis() - start_timeB) !== 0) {
//     basic.showLeds(
//     # . . . .
//     . . . # .
//     . . # . .
//     . . . . .
//     . . . . .
//     )
//     result = (control.millis() - start_timeA) - (control.millis() - start_timeB)
//     if (result < 0) {
// basic.showLeds(
// . . . . .
// . . . . .
// . . # . .
// . . # . .
// . . # . .
// )
//     } else if (result > 0) {
//         basic.showLeds(
// . . # . .
// . . # . .
// . . # . .
// . . . . .
// . . . . .
// )
//     } else {
//         basic.showLeds(
// . . . . .
// . . . . .
// . . # . .
// . . . . .
// . . . . .
// )
//     }
// }