class Creditos extends Phaser.Scene {

    constructor()
    {
        super({key:"Creditos"});
    }

    preload(){
    }


    create(){

        this.configText = {
            x: 260,
            y: -1450,
            text: "créditos",
            style:{
                fontFamily: "Piedra, cursive",
                fontSize: 40,
            }
        }
    
        this.scoreText = this.make.text(this.configText);

        this.scoreText.setText(["Esteban Ruiz\n\n\n","Guido Culasso\n\n\n","Guido Cursio\n\n\n","Sofía Perassi\n\n\n","Denise \n\n\n"
        ,"Matías Biase\n\n\n","Luis Tello\n\n\n","Julián\n\n\n\n\n\n","    CRÉDITOS"])
        
        this.tweens.add({
            targets: this.scoreText,
            y: 1000,
            ease: 'linear',
            duration: 30000,
            delay: 2000
        });
    }
}

