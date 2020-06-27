class Menu extends Phaser.Scene {

    constructor()
    {
        super({key:"Menu"});
    }

    preload(){

        this.load.image("portada", "pizzaManPortada.png")
        this.load.image("play", "botonPlay.png")
        this.load.image("bgCredits", "backgroundCreditos.png")
        this.load.image("textCredits", "creditos.png")


    }

    create(){
        this.portada = this.add.image(1400, 300, "portada").setScale(.5)
        this.boton = this.add.image(-100, 490, "play").setScale(.5)
        this.bgCredits = this.add.image(0, 0, "bgCredits").setScale(.25)
        this.txtCredits = this.add.image(0, 0, "textCredits").setScale(.8)

        this.bgCredits.setInteractive()
        this.contenedorCreditos = this.add.container(680, 60, [this.bgCredits, this.txtCredits])


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

        this.bgCredits.on('pointerover', function () {

            this.setTint(0x0fff00)
                
                
         });

         this.bgCredits.on('pointerout', function () {

            this.clearTint()
                
                
         });

        this.bgCredits.on('pointerdown', function () {

                this.setScale(.22)
                    
                    
         });
         var escena = this.scene
         this.bgCredits.on('pointerup', function () {

            this.setScale(.25)
            escena.start("Creditos")
   
                        
        });

        this.boton.setInteractive()
        var btn = this.boton

        this.boton.on('pointerup', function () {

            btn.setScale(.8)
            cambiaEscena = true
        });

        this.boton.on('pointerdown', function () {

        
            btn.setScale(.6)
            
        });

        this.boton.on('pointerover', function () {

        btn.setScale(.8)
        btn.setTint(0xffff00)
            
            
        });

        this.boton.on('pointerout', function () {

            btn.setScale(.5)
            btn.clearTint()
                
                
            });

        this.tweens.add({
            targets: this.boton,
            scale: .9,
            duration: 150,
            repeat: 5,
            yoyo: true,
            delay: 1200
        })

    }

    update(){
        if(cambiaEscena){
            this.scene.add("SceneGame", new SceneGame)
            this.scene.start("SceneGame")
            cambiaEscena = false
        }
    }
}