input.onButtonPressed(Button.A, function () {
    car.change(LedSpriteProperty.X, -1)
})
function life () {
    music.playTone(175, music.beat(BeatFraction.Half))
    life2 += -1
}
function gameOver () {
    game.setScore(skóre)
    music.startMelody(music.builtInMelody(Melodies.Funeral), MelodyOptions.Once)
    game.gameOver()
}
input.onButtonPressed(Button.B, function () {
    car.change(LedSpriteProperty.X, 1)
})
function start () {
    čas_Od = 0
    čas_Do = 6000
    life2 = 3
    skóre = 0
    game.setLife(3)
    game.setScore(0)
    car = game.createSprite(2, 4)
    A1 = game.createSprite(0, 0)
    A2 = game.createSprite(1, 0)
    A3 = game.createSprite(2, 0)
    A4 = game.createSprite(3, 0)
    A5 = game.createSprite(4, 0)
}
let A5: game.LedSprite = null
let A4: game.LedSprite = null
let A3: game.LedSprite = null
let A2: game.LedSprite = null
let A1: game.LedSprite = null
let čas_Do = 0
let čas_Od = 0
let skóre = 0
let life2 = 0
let car: game.LedSprite = null
music.startMelody(music.builtInMelody(Melodies.Blues), MelodyOptions.Once)
basic.showString("CAR RACING")
basic.showLeds(`
    # . # . #
    . # . # .
    # . # . #
    . # . # .
    # . # . #
    `)
basic.pause(1000)
start()
basic.pause(1000)
basic.forever(function () {
    basic.pause(randint(čas_Od, čas_Do))
    for (let index = 0; index < 4; index++) {
        basic.pause(1000)
        A1.change(LedSpriteProperty.Y, 1)
    }
    if (A1.isTouching(car) && life2 > 0) {
        life()
    }
    if (A1.isTouching(car) && life2 == 0) {
        gameOver()
    }
    basic.pause(1000)
    A1.set(LedSpriteProperty.Y, 0)
    skóre += 1
})
basic.forever(function () {
    basic.pause(randint(čas_Od, čas_Do))
    for (let index = 0; index < 4; index++) {
        basic.pause(1000)
        A2.change(LedSpriteProperty.Y, 1)
    }
    if (A2.isTouching(car) && life2 > 0) {
        life()
    }
    if (A2.isTouching(car) && life2 == 0) {
        gameOver()
    }
    basic.pause(1000)
    A2.set(LedSpriteProperty.Y, 0)
    skóre += 1
})
basic.forever(function () {
    basic.pause(randint(čas_Od, čas_Do))
    for (let index = 0; index < 4; index++) {
        basic.pause(1000)
        A3.change(LedSpriteProperty.Y, 1)
    }
    if (A3.isTouching(car) && life2 > 0) {
        life()
    }
    if (A3.isTouching(car) && life2 == 0) {
        gameOver()
    }
    basic.pause(1000)
    A3.set(LedSpriteProperty.Y, 0)
    skóre += 1
})
basic.forever(function () {
    basic.pause(randint(čas_Od, čas_Do))
    for (let index = 0; index < 4; index++) {
        basic.pause(1000)
        A4.change(LedSpriteProperty.Y, 1)
    }
    if (A4.isTouching(car) && life2 > 0) {
        life()
    }
    if (A4.isTouching(car) && life2 == 0) {
        gameOver()
    }
    basic.pause(1000)
    A4.set(LedSpriteProperty.Y, 0)
    skóre += 1
})
basic.forever(function () {
    basic.pause(randint(čas_Od, čas_Do))
    for (let index = 0; index < 4; index++) {
        basic.pause(1000)
        A5.change(LedSpriteProperty.Y, 1)
    }
    if (A5.isTouching(car) && life2 > 0) {
        life()
    }
    if (A5.isTouching(car) && life2 == 0) {
        gameOver()
    }
    basic.pause(1000)
    A5.set(LedSpriteProperty.Y, 0)
    skóre += 1
})
