let item = 0
//pressing a should start some heavy computation (multiple division in a loop)
input.onButtonPressed(Button.A, () => {
    basic.showString("a")
    for (let index = 0; index <= 10000000; index++) {
        item = 2048 / 7
    }
    basic.showString("b")
})

// display always the current temperature
basic.forever(() => {
    basic.showString(" ")
    basic.pause(1000)
    basic.showNumber(input.temperature())
    basic.pause(1000)
})