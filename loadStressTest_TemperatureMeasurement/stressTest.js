let m_placeholder = 0
let m_doComputation = 0
let m_currentTemperature = 0

// pressing buttonB should stop the computation
input.onButtonPressed(Button.B, () => {
    basic.showNumber(m_currentTemperature)
})

// pressing buttonA should start some heavy computation
// inside the event-loop (multiple division in a loop)
input.onButtonPressed(Button.A, () => {
    // is: invert the current value
    m_doComputation = (m_doComputation + 1) % 1
})

m_doComputation = 0
// display always the current temperature
basic.forever(() => {
    // save the current temperature
    let oldTemperature = m_currentTemperature;
    m_currentTemperature = input.temperature();

    // if changed from last run, then display it
    if (oldTemperature != m_currentTemperature) {
        basic.showNumber(m_currentTemperature)
    }

    // here in the main-loop is the heavy computation-block: has to be improved ... does not look really heavy
    if (m_doComputation) {
        for (let iterator = 0; iterator <= 999; iterator++) {
            m_placeholder = 43264257 / 7
        }
    }
})

