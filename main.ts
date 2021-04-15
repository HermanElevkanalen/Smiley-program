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
    basic.showString("ditt navn")
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
