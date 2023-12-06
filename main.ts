/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Mr. Coxall
 * Created on: Sep 2020
 * This program ...
*/
let distanceToObject:number = 0


radio.setGroup(76)
basic.showIcon(IconNames.Happy)


while (true) {
    basic.clearScreen()
    distanceToObject = sonar.ping(
        DigitalPin.P1,
        DigitalPin.P2,
        PingUnit.Centimeters
    )
    if (distanceToObject <= 10){
  radio.sendString("hello world")

    }else{
        radio.sendString("hello universe")

      basic.showIcon(IconNames.Happy)


        radio.onReceivedString(function (receivedString) {
            basic.clearScreen()
            basic.showString(receivedString)
        })

}
}
