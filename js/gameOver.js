// Escena game over:

class JuegoTerminado extends Phaser.Scene {

    constructor()
    {
        super({key:"JuegoTerminado"})
    }

    preload(){

        // Precarga de background:
        this.load.image("finishGame", "gOver.png")
    }

    create(){

        // Carga de backgroun:
        this.imgGameOver = this.add.sprite(400, -400, "finishGame").setScale(.5)

        // Configuración del texto del puntaje final:
        var textScore = this.add.text(320, 210, 'SCORE: 0', {font: "27px Arial Black", fill: '#af0000' })
        textScore.setShadow(-1, 2, "#ff00ff", 4, true, true)

        // Intervalo que se encarga de actualizar el contador del puntaje:
        var puntajeFinal = 0

        var intervaloBestScore = setInterval(() => {
           
            textScore.setText("SCORE: " + puntajeFinal + "\nBEST: " + puntajeGlobal)
            puntajeFinal++
            if(puntajeFinal == puntos + 1){
                clearInterval(intervaloBestScore)
            }
        },50)

        // Tween para que el background carge de arriba hacia abajo con rebote:
        this.tweens.add({
            targets: this.imgGameOver,
            duration: 300,
            delay: 0,
            y: 300,
            ease: "Bounce"
        })

        // Tween para que la música disminuya la escala tonal cuando arranca la escena:
        this.tweens.add({
            targets: music,
            detune:100,
            duration: 2000,
            delay: 0,
            ease: "Linear"
        })

        // Tween para que la música disminuya el volumen al final:
        this.tweens.add({
            targets: music,
            volume:0,
            duration: 4000,
            delay: 3000,
            ease: "Power1"
        })

        // Función que carga el menú principal después de unos segundos:
        var escena = this.scene

        setTimeout(() => {
            
            escena.start("Menu")
        }, 8000)
    }
}