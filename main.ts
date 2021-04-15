input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . # . # .
        . . # . .
        . . . . .
        # . . . #
        . # # # .
        `)
})
input.onGesture(Gesture.Shake, function () {
    basic.showString("dit navn")
})
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        . # . # .
        . . # . .
        . . . . .
        . # # # .
        # . . . #
        `)
})
