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

        // Tween para que el background carge de arriba hacia abajo con rebote:
        this.tweens.add({
            targets: this.imgGameOver,
            duration: 300,
            delay: 0,
            y: 300,
            ease: "Bounce"
        })

        // Función que carga el menú principal después de unos segundos:

        setTimeout(() => {
            
            this.scene.start("Menu")
        }, 4000)
    }
}