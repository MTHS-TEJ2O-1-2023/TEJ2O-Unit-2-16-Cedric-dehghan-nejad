/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Cedric
 * Created on: Dec 6 2023
 * This program acts like bluetooth and transfers words from one microbit to another microbit
*/

// variable
let distanceToObject: number = 0

// setup
radio.setGroup(7)
basic.showIcon(IconNames.Happy)

// distanceToObject setup
input.onButtonPressed(Button.A, function () {
  basic.clearScreen()
  distanceToObject = sonar.ping(
    DigitalPin.P1,
    DigitalPin.P2,
    PingUnit.Centimeters
  )
  // if distanceToObject is <= 10 show hello world if more than 10 then show hello universe
  if (distanceToObject <= 10) {
    radio.sendString('too close')
  } else {
    radio.sendString('too far')

    basic.showIcon(IconNames.Happy)
  }
})
    radio.onReceivedString(function (receivedString) {
    basic.clearScreen()
    basic.showString(receivedString)
    basic.showIcon(IconNames.Happy)
})

