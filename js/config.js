// Configuración general:

var config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    backgroundColor: "#ffffff",
    // Se inicia con la escena del menú y se crea la instancia de la escena de créditos:
    scene: [Menu, Creditos],
    // scene: [SegundoNivel],
    physics: {
        default: "arcade",
        arcade: {
            debug: false,
            gravity: {
                x: 0,
                y: 0
            }
        }
    },
};

// Ejecución de constructor del objeto "Game" con el objeto "config" como parámetro:
new Phaser.Game(config)

// Variables globales:
// var playMusic
var instanciaEscena2 = true
var lanzaEscena2
var controlaAlfa = true
var vidas
var cambiaEscena = false
// var music
var stopVelocity
var musicaPortada = true
var puntos
var textRefresh = true
var startGame = true
var startGameOver = true
var iniciaGameOver
var puntajeGlobal = 0
var angle = 0
var dibujaCirculo = true
var incrementoTamañoPorcion = 0.12
var incrementoTamañoPizza = .1