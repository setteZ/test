telecomando = 0
MiniCar.led_rgb(LED_rgb_L_R.LED_R, LED_color.BLACK)
MiniCar.led_rgb(LED_rgb_L_R.LED_L, LED_color.BLACK)
irRemote.connect_infrared(DigitalPin.P16)
basic.show_icon(IconNames.HEART)
basic.pause(500)

def on_forever():
    global telecomando
    telecomando = irRemote.return_ir_button()
    if telecomando == irRemote.ir_button(IrButton.UP):
        basic.show_icon(IconNames.HAPPY)
    else:
        basic.show_icon(IconNames.SAD)
basic.forever(on_forever)
