let neopixelArray: neopixel.Strip = null
input.onButtonPressed(Button.B, () => {
    neopixelArray.clear()
    neopixelArray.show()
})
input.onButtonPressed(Button.A, () => {
    neopixelArray.range(2, 1).showColor(neopixel.colors(NeoPixelColors.White))
    while (true) {
        neopixelArray.range(0, 2).showColor(neopixel.colors(NeoPixelColors.Red))
        neopixelArray.range(3, 2).showColor(neopixel.colors(NeoPixelColors.Blue))
        basic.pause(333)
        neopixelArray.range(3, 2).showColor(neopixel.colors(NeoPixelColors.Red))
        neopixelArray.range(0, 2).showColor(neopixel.colors(NeoPixelColors.Blue))
        basic.pause(333)
    }
})
neopixelArray = neopixel.create(DigitalPin.P0, 5, NeoPixelMode.RGB)

