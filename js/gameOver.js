class JuegoTerminado extends Phaser.Scene {

    constructor()
    {
        super({key:"JuegoTerminado"});
    }

    preload(){
        
        this.load.image("finishGame", "gOver.png")
    }

    create(){
        this.imgGameOver = this.add.sprite(400, -400, "finishGame").setScale(.5)

        this.tweens.add({
            targets: this.imgGameOver,
            duration: 300,
            delay: 0,
            y: 300,
            ease: "Bounce"
        })


        this.tweens.add({
            targets: music,
            detune:100,
            duration: 2000,
            delay: 0,
            ease: "Linear"
        })

        this.tweens.add({
            targets: music,
            volume:0,
            duration: 4000,
            delay: 3000,
            ease: "Power1"
        })
        var escena = this.scene

        setTimeout(() => {
            
            escena.start("Menu");
        }, 8000)
    }
}