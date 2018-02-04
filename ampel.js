let Ampel_zeigt_Rot = 0
input.onButtonPressed(Button.A, () => {
    if (Ampel_zeigt_Rot == 1) {
        pins.digitalWritePin(DigitalPin.P1, 1)
        basic.pause(1000)
        pins.digitalWritePin(DigitalPin.P0, 0)
        pins.digitalWritePin(DigitalPin.P1, 0)
        pins.digitalWritePin(DigitalPin.P2, 1)
        Ampel_zeigt_Rot = 0
    } else {
        pins.digitalWritePin(DigitalPin.P1, 1)
        pins.digitalWritePin(DigitalPin.P2, 0)
        basic.pause(1000)
        pins.digitalWritePin(DigitalPin.P1, 0)
        pins.digitalWritePin(DigitalPin.P0, 1)
        Ampel_zeigt_Rot = 1
    }
    basic.pause(500)
})
Ampel_zeigt_Rot = 1
pins.digitalWritePin(DigitalPin.P0, 1)
