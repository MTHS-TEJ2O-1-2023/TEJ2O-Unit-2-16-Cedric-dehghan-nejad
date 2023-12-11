/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Cedric
 * Created on: Dec 6 2023
 * This program acts like bluetooth and transfers words from one microbit to another microbit
*/

// variable
let distanceToObject: number = 0
let distanceFromObject = 0

// setup
radio.setGroup(76)
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
    radio.sendString('hello universe')

    basic.showIcon(IconNames.Happy)
  }
})
    // waiting for string from other microbit
radio.onReceivedNumber(function (receivedNumber) {
    basic.clearScreen()
    basic.showString(`${ receivedNumber } cm`)
    distanceFromObject = receivedNumber

    // if distanceFromObject is less then or equal to 10 display to close if not dislay ok
    if (distanceFromObject <= 10) {
        basic.showString('To close.')
    } else {
        basic.showString('Good.')
    }
    basic.pause(500)
    basic.showIcon(IconNames.Happy)
})
