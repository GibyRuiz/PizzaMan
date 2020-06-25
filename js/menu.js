class Menu extends Phaser.Scene {

    constructor()
    {
        super({key:"Menu"});
    }

    preload(){

        this.load.image("portada", "pizzaManPortada.png")
        this.load.image("play", "botonPlay.png")
    }

    create(){
        this.portada = this.add.image(1400, 300, "portada").setScale(.5)
        this.boton = this.add.image(-100, 490, "play").setScale(.5)


        this.tweens.add({
            targets: this.portada,
            duration: 1000,
            x: 400,
            ease: "Back.easeInOut",

        })

        this.tweens.add({
            targets: this.boton,
            duration: 1000,
            x: 600,
            ease: "Back.easeInOut",

        })

        this.boton.setInteractive()
        var btn = this.boton

        this.boton.on('pointerdown', function () {

        
            cambiaEscena = true
            
        });

        this.boton.on('pointerover', function () {

        btn.setScale(.8)
            
            
        });

        this.boton.on('pointerout', function () {

            btn.setScale(.5)
                
                
            });

    }

    update(){
        if(cambiaEscena){
            this.scene.add("SceneGame", new SceneGame)
            this.scene.start("SceneGame")
            cambiaEscena = false
        }
    }
}