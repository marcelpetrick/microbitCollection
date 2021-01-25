let list: number[] = []
let m_placeholder = 0
let m_currentTemperature = 0
let oldTemperature = 0
// pressing buttonA should start some heavy
// computation inside the event-loop (multiple
// division in a loop)
input.onButtonPressed(Button.A, () => {
    // is: invert the current value
    m_doComputation = (m_doComputation + 1) % 2
})
// pressing buttonB should stop the computation
input.onButtonPressed(Button.B, () => {
    basic.showNumber(m_currentTemperature)
    basic.showString(m_doComputation ? "run" : "idle")
})
let m_doComputation = 0
m_placeholder = 0
m_doComputation = 0
for (let i = 0; i < 100; i++) {
    list.push(Math.random(10))
}
// display always the current temperature
basic.forever(() => {
    // save the current temperature
    oldTemperature = m_currentTemperature
    m_currentTemperature = input.temperature()
    // if changed from last run, then display it
    if (oldTemperature != m_currentTemperature) {
        basic.showNumber(m_currentTemperature)
    }
})
control.inBackground(() => {
    // here in the main-loop is the heavy
    // computation-block: has to be improved ... does not
    // look really heavy
    if (m_doComputation) {
        for (let value of list) {
            value = value * Math.random(10) % Math.random(101)
        }
    }
})

