let telecomando = 0
MiniCar.led_rgb(LED_rgb_L_R.LED_R, LED_color.black)
MiniCar.led_rgb(LED_rgb_L_R.LED_L, LED_color.black)
irRemote.connectInfrared(DigitalPin.P16)
basic.showIcon(IconNames.Heart)
basic.pause(500)
basic.forever(function () {
    telecomando = irRemote.returnIrButton()
    if (telecomando == irRemote.irButton(IrButton.Right)) {
        basic.showIcon(IconNames.Happy)
        music.ringTone(523)
    } else {
        basic.showIcon(IconNames.Sad)
        music.ringTone(262)
    }
})
