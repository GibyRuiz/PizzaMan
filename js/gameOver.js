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
        var textScore = this.add.text(320, 210, 'SCORE: 0', {font: "27px Arial Black", fill: '#af0000' });
        textScore.setShadow(-1, 2, "#ff00ff", 4, true, true);
        var puntajeFinal = 0

        var intervalo = setInterval(() => {
           
            textScore.setText("SCORE: " + puntajeFinal + "\nBEST: " + puntajeGlobal)
            puntajeFinal++
            if(puntajeFinal == puntos + 1){
                clearInterval(intervalo)
            }
        },50)

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