let Distancia = 0
basic.showIcon(IconNames.Happy)
basic.showString("Hello!")
basic.forever(function () {
    Tinybit.RGB_Car_Program().showColor(neopixel.colors(NeoPixelColors.Red))
    Tinybit.RGB_Car_Program().show()
    Distancia = Tinybit.Ultrasonic_Car()
    if (Distancia < 10) {
        Tinybit.CarCtrlSpeed(Tinybit.CarState.Car_Back, 80)
        basic.pause(200)
        Tinybit.CarCtrlSpeed(Tinybit.CarState.Car_SpinRight, 100)
        basic.pause(200)
    } else {
        Tinybit.CarCtrlSpeed(Tinybit.CarState.Car_Run, 100)
    }
})
