let showPoliceLights = 0
let neopixelArray: neopixel.Strip = null
function policeLights() {
    if (showPoliceLights) {
        while (true) {
            neopixelArray.range(2, 1).showColor(neopixel.colors(NeoPixelColors.White))
            neopixelArray.range(0, 2).showColor(neopixel.colors(NeoPixelColors.Red))
            neopixelArray.range(3, 2).showColor(neopixel.colors(NeoPixelColors.Blue))
            basic.pause(333)
            neopixelArray.range(3, 2).showColor(neopixel.colors(NeoPixelColors.Red))
            neopixelArray.range(0, 2).showColor(neopixel.colors(NeoPixelColors.Blue))
            basic.pause(333)
        }
    } else {
        neopixelArray.clear()
        neopixelArray.show()
    }
}
function togglePoliceLightsState() {
    showPoliceLights = (showPoliceLights + 1) % 2
    basic.showNumber(showPoliceLights)
}
input.onButtonPressed(Button.B, () => {
    pins.servoWritePin(AnalogPin.P1, 180)
    pins.servoWritePin(AnalogPin.P2, 0)
    togglePoliceLightsState()
    policeLights()
})
input.onButtonPressed(Button.AB, () => {
    pins.servoWritePin(AnalogPin.P1, 90)
    pins.servoWritePin(AnalogPin.P2, 90)
    togglePoliceLightsState()
    policeLights()
})
input.onButtonPressed(Button.A, () => {
    pins.servoWritePin(AnalogPin.P1, 0)
    pins.servoWritePin(AnalogPin.P2, 180)
    togglePoliceLightsState()
    policeLights()
})
neopixelArray = neopixel.create(DigitalPin.P0, 5, NeoPixelMode.RGB)
showPoliceLights = 0

