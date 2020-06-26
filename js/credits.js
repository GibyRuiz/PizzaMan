class Creditos extends Phaser.Scene {

    constructor()
    {
        super({key:"Creditos"});
    }

    preload(){

    this.load.image('rata1', 'Rata sprite 1.png');   
    this.load.image('rata2', 'Rata sprite 2.png');   
    this.load.image('rata3', 'Rata sprite 3.png');   
    this.load.image('rata4', 'Rata sprite 4.png');   
    this.load.image('rata5', 'Rata sprite 5.png');   
    this.load.image('rata6', 'Rata sprite 6.png');   

    this.load.image('pizzaMan1', 'Sprite-1.png');
    this.load.image('pizzaMan2', 'Sprite-2.png');
    this.load.image('pizzaMan3', 'Sprite-3.png');
    this.load.image('pizzaMan4', 'Sprite-4.png');
    this.load.image('pizzaMan5', 'Sprite-5.png');
    this.load.image('pizzaMan6', 'Sprite-6.png');
    this.load.image('pizzaMan7', 'Sprite-7.png');
    this.load.image('pizzaMan8', 'Sprite-8.png');   

    this.load.image('piso', 'pisotemporal.png');   

    }


    create(){

        this.tweens.add({
            targets: music,
            detune:0,
            duration: 500,
            delay: 500,
            ease: "Linear"
        })

        this.add.image(0, 0, "piso").setOrigin(0).setTint(0xff2d00)
        this.add.image(665, 0, "piso").setOrigin(0).setTint(0xff2d00)
        this.rata = this.add.sprite(100, 300, "rata1").setOrigin(0).setScale(1.5)

        this.pizzaMan = this.add.sprite(610, 330, "pizzaMan1")

        this.anims.create({
            key: 'rataWalk',
            frames: [
                { key: 'rata1' },
                { key: 'rata2' },
                { key: 'rata3' },
                { key: 'rata4' },
                { key: 'rata5' },
                { key: 'rata6' },
                


            ],
            frameRate: 15,
            repeat: -1
        });

        this.rata.play("rataWalk")

        this.anims.create({
            key: 'pizzaManWalk',
            frames: [
                { key: 'pizzaMan1' },
                { key: 'pizzaMan2' },
                { key: 'pizzaMan3' },
                { key: 'pizzaMan4' },
                { key: 'pizzaMan5' },
                { key: 'pizzaMan6' },
                { key: 'pizzaMan7' },
                { key: 'pizzaMan8' },


            ],
            frameRate: 23,
            repeat: -1
        });

        this.pizzaMan.play("pizzaManWalk")


        this.configText = {
            x: 280,
            y: -1450,
            text: "créditos",
            style:{
                fontFamily: "Piedra, cursive",
                fontSize: 40,
            }
        }
    
        this.creditsText = this.make.text(this.configText);

        this.creditsText.setText(["Esteban Ruiz\n\n\n","Guido Culasso\n\n\n","Guido Cursio\n\n\n","Sofía Perassi\n\n\n","Denise Rey\n\n\n"
        ,"Matías Biase\n\n\n","Luis Tello\n\n\n","Julián Hang\n\n\n\n\n\n","CRÉDITOS"])
        
        this.tweens.add({
            targets: this.creditsText,
            y: 1000,
            ease: 'linear',
            duration: 30000,
            delay: 2000
        });

        this.tweens.add({
            targets: [this.pizzaMan, this.rata],
            alpha: 0,
            ease: 'linear',
            duration: 3000,
            delay: 25000
        });

        this.tweens.add({
            targets: music,
            volume:0,
            duration: 4000,
            delay: 25000,
            ease: "Power1"
        })

       
    }

    update(){
        this.pizzaMan.angle += 3

        
    }
}

