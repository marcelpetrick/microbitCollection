let placeholder = 0
let m_doComputation = 0
// pressing a should start some heavy computation
// inside the event-loop (multiple division in a loop)
input.onButtonPressed(Button.A, () => {
    m_doComputation = 1
})
// pressing b should stop that
input.onButtonPressed(Button.B, () => {
    m_doComputation = 0
})
m_doComputation = 0
// display always the current temperature
basic.forever(() => {
    basic.showString(" ")
    basic.showNumber(input.temperature())
    if (m_doComputation) {
        basic.showString("a")
        for (let iterator = 0; iterator <= 200000; iterator++) {
            placeholder = 43264257 / 7
        }
        basic.showString("b")
    }
})
