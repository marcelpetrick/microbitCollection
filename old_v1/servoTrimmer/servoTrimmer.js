input.onButtonPressed(Button.A, () => {
    pins.servoWritePin(AnalogPin.P1, 0)
    pins.servoWritePin(AnalogPin.P2, 180)
})
input.onButtonPressed(Button.B, () => {
    pins.servoWritePin(AnalogPin.P1, 180)
    pins.servoWritePin(AnalogPin.P2, 0)
})
input.onButtonPressed(Button.AB, () => {
    pins.servoWritePin(AnalogPin.P1, 90)
    pins.servoWritePin(AnalogPin.P2, 90)
})

