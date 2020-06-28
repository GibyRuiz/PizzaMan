class GameOver extends Phaser.Scene {

    constructor()
    {
        super({key:"GameOver"});
    }

    preload(){

        this.load.image("gameOver", "pantalla game over 1.png")
    }

    create(){
        this.add.image(400,300, "gameOver").setScale(.5)
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