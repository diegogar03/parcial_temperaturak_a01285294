input.onButtonPressed(Button.A, function () {
    basic.showNumber(celsius)
    basic.showString("ºC =")
    basic.showNumber(kelvin)
    basic.showString("ºK")
})
let kelvin = 0
let celsius = 0
basic.showString("Diego G A01285294")
celsius = randint(-5, 50)
kelvin = celsius + 273.15
