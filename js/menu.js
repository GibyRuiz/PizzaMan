class Menu extends Phaser.Scene {

    constructor()
    {
        super({key:"Menu"});
    }

    preload(){

        this.load.image("portada", "pizzaManPortada.png")
        this.load.image("play", "botonPlay.png")
        this.load.audio('tarantela', 'tarantela.mp3')
    }

    create(){
        this.music = this.sound.add('tarantela', {loop: true});
        var music = this.music
        this.portada = this.add.image(1400, 300, "portada").setScale(.5)
        this.boton = this.add.image(-100, 490, "play").setScale(.5)

        this.portada.setInteractive()

        this.portada.on("pointerover", function(){
           if(musicaPortada){
            music.play()
            musicaPortada = false
        }
        })


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

        this.boton.on('pointerup', function () {

            btn.setScale(.8)
            cambiaEscena = true
            music.stop()
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