var config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    backgroundColor: "#B7B2F6",
    scene: [Menu, Creditos],
    physics: {
        default: 'arcade',
        arcade: {
            debug: false,
            gravity: {
                x: 0,
                y: 0
            }
        }
    },

};

var game = new Phaser.Game(config);
var playMusic = true;
var controlaAlfa = true;
var vidas = 3;
var cambiaEscena = false;
var music;
var stopVelocity = true;
musicaPortada = true;
var puntos = 0;



