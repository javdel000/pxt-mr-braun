sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    for (let index = 0; index < 4; index++) {
        otherSprite.setPosition(Math.randomRange(0, 512), Math.randomRange(0, 512))
    }
    info.startCountdown(10)
})
let otherSprite: Sprite = null
// When turned on player cannot enter that color
scene.setTile(15, img`
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
`, true)
// When turned on player cannot enter that color
scene.setTile(8, img`
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 9 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 9 9 8 8 8 8 8 8 9 9 8 8 8 8 8 8 8 9 9 8 8 8 8 8 8 
8 8 8 8 8 8 9 9 8 8 8 8 8 8 9 9 8 8 8 8 8 8 8 8 9 8 8 8 8 8 8 8 
8 8 8 8 8 9 9 8 8 8 8 8 8 9 9 8 8 8 8 8 8 8 8 9 8 8 8 8 8 8 8 8 
8 8 8 8 9 9 8 8 8 8 8 8 8 9 8 8 8 8 8 8 8 8 9 9 8 8 8 8 8 8 8 8 
8 8 8 9 9 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 9 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 9 8 8 8 8 8 
8 8 9 9 8 8 8 8 8 8 8 8 8 8 8 8 8 8 9 8 8 8 8 8 8 9 9 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 9 8 8 8 8 8 8 9 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 9 9 8 8 8 8 8 8 8 9 8 8 8 8 8 9 9 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 9 9 8 8 8 8 8 8 8 9 9 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 9 9 8 8 8 8 8 8 8 8 9 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 9 9 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 9 9 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 9 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 9 9 8 8 8 
8 8 9 9 8 8 8 8 8 8 8 8 8 8 8 8 9 9 8 8 8 8 8 8 8 8 9 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 9 8 8 8 8 8 8 8 8 8 9 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 9 9 8 8 8 8 8 8 8 8 8 9 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 9 8 8 8 8 8 8 8 8 8 9 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 9 9 8 8 8 9 9 8 8 8 8 8 8 8 8 8 9 8 8 8 8 8 8 8 
8 8 8 8 8 8 9 9 9 8 8 8 8 8 8 8 8 8 8 8 8 8 8 9 9 8 8 8 8 8 8 8 
8 8 8 8 8 9 9 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 9 8 8 8 8 8 8 8 8 
8 8 8 8 9 9 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 9 9 8 8 8 8 8 8 8 8 8 9 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 9 9 8 8 8 8 8 8 8 8 9 9 8 8 8 8 
8 8 8 8 8 8 8 9 9 8 8 8 8 8 8 8 9 8 8 8 8 8 8 8 8 9 9 8 8 8 8 8 
8 8 8 8 8 8 8 9 8 8 8 8 8 8 8 9 8 8 8 8 8 8 8 8 8 9 8 8 8 8 8 8 
8 8 8 8 8 9 9 8 8 8 8 8 8 8 9 9 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 9 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
`, true)
// When turned on player cannot enter that color
scene.setTile(7, img`
e 7 e 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 e 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 e 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 e 7 7 e 7 7 7 7 e e e 7 7 e 7 7 e e 7 7 7 7 7 7 7 e 7 7 
7 7 7 7 7 7 7 7 e 7 7 e 7 7 7 7 7 7 7 7 7 e 7 7 e e 7 7 7 7 7 7 
7 7 7 7 7 e 7 7 e 7 7 7 7 7 e 7 7 e 7 e 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 e e e 7 e 7 7 7 7 7 7 7 7 e 7 7 e e 7 7 7 7 7 7 7 7 7 7 e 7 
7 7 7 7 7 7 7 7 7 7 e 7 7 7 7 7 e 7 7 7 7 7 7 7 e e e e 7 7 e 7 
7 7 7 7 7 7 e 7 7 7 7 e e 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 e 7 7 e e 7 7 7 7 7 7 7 7 7 e e 7 7 e e 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 e 7 7 7 7 7 e e 7 7 7 7 7 
7 7 7 7 7 7 7 e e 7 7 7 e 7 7 7 7 e 7 7 7 7 7 7 7 e 7 7 7 7 7 7 
7 7 e e 7 7 7 7 e e 7 e 7 7 7 7 7 e 7 7 7 7 7 7 e e 7 7 7 7 7 7 
7 7 7 e e 7 7 7 7 e e 7 7 7 e 7 7 7 7 7 7 7 7 e 7 7 e 7 7 7 7 7 
7 7 7 7 7 7 7 e 7 7 7 7 7 7 7 e 7 7 e e 7 7 7 e e 7 7 7 7 7 e 7 
7 7 7 7 7 7 7 e e 7 7 7 7 7 7 e 7 7 7 7 7 e 7 7 7 e 7 7 7 e e 7 
7 7 7 7 7 7 7 7 e 7 7 e e 7 7 e e 7 e 7 7 7 e 7 7 7 e e 7 7 7 7 
7 7 7 e e 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 e 7 7 7 7 7 7 7 7 
7 7 7 e 7 e 7 7 7 7 7 7 7 7 7 7 7 7 e e 7 7 7 7 7 7 7 e 7 7 7 7 
7 7 7 7 7 e 7 7 7 7 e 7 e 7 7 e 7 7 7 e 7 7 7 7 7 7 7 7 e 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 e 7 e 7 7 e 7 e e e 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 e 7 e 7 7 7 7 e 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 e 7 7 7 7 7 7 7 e 7 7 7 7 7 7 e e 7 7 7 7 e 7 7 
7 7 7 e e 7 7 7 e 7 7 e 7 7 7 7 e e 7 7 7 7 e 7 e 7 7 7 7 7 e 7 
7 7 e 7 e e 7 7 e 7 7 e 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 e 7 
7 7 7 7 7 7 e 7 7 7 7 7 e e 7 7 e e 7 e e 7 7 7 e 7 7 7 7 7 7 7 
7 7 7 e 7 7 7 7 e 7 7 7 7 7 7 e 7 7 7 7 e 7 7 7 e e 7 7 e 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 e e e e 7 7 7 7 7 7 e 7 e 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 e 7 7 7 7 7 7 e 7 7 7 e 7 7 7 7 7 
7 7 7 7 7 7 7 e 7 7 7 7 7 7 7 7 7 7 7 7 7 e e e e 7 e e 7 7 7 7 
7 7 e 7 7 7 7 7 e 7 7 7 7 7 7 7 7 7 7 7 7 e 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 e 7 7 7 e 7 7 7 7 7 7 7 7 7 7 7 7 7 7 e 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
`, false)
// When turned on player cannot enter that color
scene.setTile(5, img`
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 e 5 5 5 5 5 5 5 5 5 5 5 5 5 e 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 e 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 7 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 7 5 5 5 5 5 5 5 e 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 7 5 5 5 5 5 5 5 5 e 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 e 7 7 5 5 5 5 5 7 5 5 5 5 5 5 5 5 e 7 5 5 5 5 5 5 5 5 
5 5 5 5 5 e 3 5 5 7 7 5 7 5 5 5 5 5 5 5 5 5 5 5 7 5 5 5 5 5 5 5 
5 5 5 5 5 5 e 5 5 5 7 7 7 5 5 5 5 5 5 5 5 5 5 5 e 5 5 5 5 5 5 5 
5 5 5 5 5 5 e 5 5 5 5 7 8 7 5 5 5 5 5 5 5 5 5 e 7 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 e 5 5 5 7 8 7 5 5 5 5 5 5 5 5 5 e 7 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 e 5 5 5 7 8 7 5 5 5 5 5 5 5 5 5 e 5 7 5 5 5 5 5 5 
5 5 5 5 5 5 5 e 5 7 5 7 8 7 5 5 5 5 5 5 5 5 5 e 5 7 5 5 5 5 5 5 
5 5 5 5 5 5 5 e 7 5 5 3 7 7 7 5 5 5 5 5 5 5 5 5 5 7 5 5 5 5 5 5 
5 5 5 5 5 e e 7 5 5 5 5 7 7 7 7 7 7 5 5 5 5 5 5 5 7 5 5 5 5 5 5 
5 5 5 5 5 e e 5 5 5 5 5 5 5 7 5 5 7 7 5 5 5 5 5 7 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 e 5 5 5 5 5 5 5 5 5 5 7 5 5 5 5 7 7 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 e e 5 5 5 5 5 5 5 5 5 5 7 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 e 5 5 5 5 5 5 5 5 5 5 7 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 7 e 5 5 5 5 5 5 5 5 5 5 e 7 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 e e 5 5 5 5 5 5 5 5 e e 7 5 e e 5 5 5 5 5 5 5 5 5 
5 5 5 5 e 5 5 e 5 5 5 5 5 5 5 5 7 8 7 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 e 5 5 5 e 5 5 5 5 5 5 5 5 7 7 7 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 e 5 5 e e 5 5 5 5 5 5 5 5 5 7 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 e e e e e 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 e 5 5 5 5 5 
5 5 5 5 5 5 5 e 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 e e 5 5 5 5 5 5 
5 5 5 5 5 5 5 e 5 5 e e e e e 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
`, true)
scene.setTileMap(img`
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f 8 8 8 8 8 8 f 1 1 f 1 1 1 1 1 1 1 1 1 1 1 f 1 f f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f 
f 8 f f f f f f f 1 f 1 f f f f f f f f f 1 f 1 f f 1 f f f f f f f f f f f f f f f f f f f 1 f 
f 8 f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f 1 1 1 f f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f 1 f 
f 8 f 1 f f f f f f f f f f f f f f f 1 f f f f f f 1 f f f f f f f f 1 f f f f f f f 1 f f 1 f 
f 8 f 1 f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f f 1 f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f 1 1 f 1 f 
f 8 f 1 f f f f f f f f f f f f f f f f f f f 1 f f 1 f 1 f 1 f f f f f 1 1 1 1 1 1 f f 1 f 1 f 
f 8 f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f f 1 f 1 f 1 f 1 1 1 f 1 1 1 1 1 1 1 f 1 1 1 f 
f f f f f f 1 f f f f f 1 f f f f f 1 f f f f 1 f f 1 f f f 1 f 1 1 1 f f f f f f f 1 f 1 f 1 f 
f f 8 f 1 1 1 f 1 1 f f 1 1 1 1 1 f 1 1 1 1 1 1 1 1 1 1 1 1 1 f f 1 1 1 1 1 1 1 1 1 1 f 1 f f f 
f f 8 f f 1 f f 1 1 f 1 1 1 1 1 1 f 1 f f f f f f f f f f f 1 1 f 1 f f f f f 1 f f f f 1 f 1 f 
f f 8 8 f 1 f 1 1 1 f 1 f f f f f f 1 1 1 f 1 1 1 1 1 f f f f 1 f 1 f 8 8 8 f 1 f 1 1 1 1 f 1 f 
f f 8 8 f 1 f 1 1 f f 1 f 1 1 1 1 1 1 1 f f 1 f f f 1 f 1 f f 1 f 1 f 8 8 8 f 1 f 1 f f 1 f 1 f 
f 8 8 8 f 1 f f 1 f 1 1 f 1 f f f f f 1 1 1 1 f 1 1 1 1 1 f f 1 f 1 f 8 8 8 f 1 f 1 f f 1 f 1 f 
f 8 8 8 f 1 1 1 1 f 1 1 f 1 f 1 1 1 f f f f f f f f f f f f f 1 f 1 f 8 8 8 f 1 f 1 f f 1 f 1 f 
f 8 8 8 f f f f 1 f 1 1 f 1 f 1 f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f 1 f 8 8 8 f 1 f 1 f f 1 f 1 f 
f f f f f 1 f 1 1 f 1 1 f 1 f 1 f f f f f f f f f f f f f f f f f 1 f f 8 8 f 1 f 1 f f 1 1 1 f 
f 1 1 1 1 1 1 1 1 f 1 1 f 1 f 1 1 1 1 1 1 1 f 1 f 1 f 1 1 1 1 1 1 1 1 f 8 8 f 1 f 1 1 f f f 1 f 
f 1 f f f f f f f f f 1 f 1 f f f f f f f f f 1 f 1 f 1 f f f f f f 1 f 8 8 f 1 f 1 f f 1 1 1 f 
f 1 f 1 1 1 1 1 1 1 f 1 f 1 1 1 1 1 1 1 1 1 1 1 1 1 f 1 f 1 1 1 1 f 1 f 8 8 f 1 f 1 1 1 1 f f f 
f f f f 1 1 1 1 1 1 f 1 f 1 f f f f f f f f f f f 1 f 1 f 1 f 1 f f 1 f 8 8 f 1 f 1 f f f f f f 
f 1 1 f 1 1 1 1 1 1 f 1 f 1 f 1 1 1 1 1 1 f 1 1 f 1 f 1 f 1 f 1 f f 1 f f f f 1 f 1 f 1 1 1 1 f 
f 1 1 1 f 1 1 1 1 1 f 1 f 1 f 1 f f f f f f 1 1 f 1 1 1 f 1 f 1 1 1 1 1 1 1 1 1 f 1 f 1 1 1 1 f 
f 1 1 1 1 f 1 1 1 1 f 1 f 1 f 1 1 f 1 1 1 1 1 1 1 1 1 1 f 1 f f f f f f f f f f f 1 f f f f f f 
f 1 1 1 1 1 f 1 1 1 f 1 f 1 f 1 f f 1 f f f f f f f f f f f f f 1 1 1 1 1 1 1 1 f 1 1 1 1 1 1 f 
f 1 1 1 1 1 1 f 1 1 f 1 f 1 f 1 1 1 1 f 1 1 1 1 1 1 1 1 1 1 1 f 1 1 1 1 1 1 1 1 f 1 1 1 1 1 1 f 
f 1 1 1 1 1 1 1 f f f 1 f f f f f f f f 1 1 1 1 1 1 1 1 1 1 1 f f f f f f f f f f 1 1 1 1 1 1 f 
f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f 
f 1 f f f f f f f f f f f f f f f f f f 1 1 1 1 1 1 1 1 1 1 1 f f f 1 f 1 1 1 1 1 1 1 1 1 1 1 f 
f 1 f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f 8 f 1 1 1 1 1 1 1 1 1 1 1 f 8 f 1 f 1 1 1 1 1 1 1 1 1 1 1 f 
f 1 f f f f f f f f f f f f 1 f 1 f 8 f f f f f f f f f f f f f 8 f 1 f 1 1 1 1 1 1 1 1 1 1 1 f 
f 1 f 1 1 1 1 1 1 1 1 1 1 f 1 f 1 f 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 f 1 f 1 1 1 1 1 1 1 1 1 1 1 f 
f 1 1 1 f f f f f f f f 1 f 1 f 1 f f f f f f f 1 f f 1 f f f f f f 1 f 1 1 1 1 1 1 1 1 1 1 1 f 
f 1 f 1 f 1 1 1 1 1 1 f 1 1 1 f 1 1 1 1 1 1 1 1 1 f f 1 1 1 1 1 1 1 1 f 1 1 1 1 1 1 1 1 1 1 1 f 
f 1 f 1 f 1 f f f f 1 f f f f f f f f f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f 1 1 1 1 1 1 1 1 1 1 1 f 
f 1 f 1 1 1 1 1 1 1 1 1 1 1 f 1 1 1 1 f f f f f f f f f f f f f f f f f f 1 1 1 1 1 1 1 1 1 1 f 
f 1 f f f f f f f f f f f 1 f 1 1 1 1 1 1 f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f 
f 1 1 1 f 1 1 1 1 1 1 1 1 1 f 1 1 1 1 1 1 f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f 
f 1 f f f f f f f f f f f f f 1 1 1 1 1 1 f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f 
f 1 f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f 
f 1 f 1 f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f 
f 1 f 1 f f f f f f f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f 
f 1 f 1 1 1 1 1 1 1 f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f 
f 1 f f f f f f 1 1 f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f 
f 1 1 1 1 1 1 1 1 1 f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f 
f 1 f f f f f f f f f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f 
f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
`, TileScale.ThirtyTwo)
let mySprite = sprites.create(img`
. . . . f f f f . . . . . 
. . f f f f f f f f . . . 
. f f f f f f c f f f . . 
f f f f f f c c f f f c . 
f f f c f f f f f f f c . 
c c c f f f e e f f c c . 
f f f f f e e f f c c f . 
f f f b f e e f b f f f . 
. f 4 1 f 4 4 f 1 4 f . . 
. f e 4 4 4 4 4 4 e f . . 
. f f f e e e e f f f . . 
f e f b 7 7 7 7 b f e f . 
e 4 f 7 7 7 7 7 7 f 4 e . 
e e f 6 6 6 6 6 6 f e e . 
. . . f f f f f f . . . . 
. . . f f . . f f . . . . 
`, SpriteKind.Player)
// Controls the Sprite
controller.moveSprite(mySprite, 200, 100)
// The camera follows sprite throughout game
scene.cameraFollowSprite(mySprite)
mySprite.setPosition(141, 117)
for (let index = 0; index < 80; index++) {
    otherSprite = sprites.create(img`
. . 2 2 b b b b b . . . . . . . 
. 2 b 4 4 4 4 4 4 b . . . . . . 
2 2 4 4 4 4 d d 4 4 b . . . . . 
2 b 4 4 4 4 4 4 d 4 b . . . . . 
2 b 4 4 4 4 4 4 4 d 4 b . . . . 
2 b 4 4 4 4 4 4 4 4 4 b . . . . 
2 b 4 4 4 4 4 4 4 4 4 e . . . . 
2 2 b 4 4 4 4 4 4 4 b e . . . . 
. 2 b b b 4 4 4 b b b e . . . . 
. . e b b b b b b b e e . . . . 
. . . e e b 4 4 b e e e b . . . 
. . . . . e e e e e e b d b b . 
. . . . . . . . . . . b 1 1 1 b 
. . . . . . . . . . . c 1 d d b 
. . . . . . . . . . . c 1 b c . 
. . . . . . . . . . . . c c . . 
`, SpriteKind.Food)
    otherSprite.setPosition(Math.randomRange(32, 512), Math.randomRange(0, 512))
    mySprite.z = 1
}
info.startCountdown(1000)
