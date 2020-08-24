// Escena del menú principal:

class Menu extends Phaser.Scene {

    constructor()
    {
        super({key:"Menu"})
    }

    preload(){

        // Pre carga de assest. Los assets como imágenes y sonidos están a nivel del archivo index.html para
        // aprovechar el path por defecto de Visual Studio y porque Github Pages no los encontraba
        // bien si los ponía en otro lado. Es un problema con el path y por ahora lo pude solucionar asi.
        this.load.image("portada", "pizzaManPortada.png")
        this.load.image("play", "botonPlay.png")
        this.load.image("bgCredits", "backgroundCreditos.png")
        this.load.image("textCredits", "creditos.png")
        this.load.audio("tarantela", "tarantela.mp3" )
    }

    create(){

        // Carga de imágenes:
        this.portada = this.add.image(1400, 300, "portada").setScale(.5)
        this.botonPlay = this.add.image(-100, 490, "play").setScale(.5)
        this.bgCredits = this.add.image(0, 0, "bgCredits").setScale(.25)
        this.txtCredits = this.add.image(0, 0, "textCredits").setScale(.8)
        var txtCredits = this.txtCredits

        // Botón de créditos y play interactivos:
        this.bgCredits.setInteractive()
        this.botonPlay.setInteractive()
        var btn = this.botonPlay

        // Creación de contenedor y agregado de elementos que componen al botón de créditos:
        this.contenedorCreditos = this.add.container(-200, 60, [this.bgCredits, this.txtCredits])
        this.contenedorCreditos.setAlpha(0)

        // Tweens: métodos para hacer transiciones: en el atributo "targets" se apunta al objeto a modificar:
        this.tweens.add({
            targets: this.portada,
            duration: 1000,
            x: 400,
            ease: "Back.easeInOut",

        })

        this.tweens.add({
            targets: this.contenedorCreditos,
            duration: 100,
            alpha: 1,
            delay: 800
        })

        this.tweens.add({
            targets: this.contenedorCreditos,
            duration: 200,
            x: 680,
            delay: 800
        })

        this.tweens.add({
            targets: this.botonPlay,
            duration: 1000,
            x: 600,
            ease: "Back.easeInOut",

        })

        this.tweens.add({
            targets: this.botonPlay,
            scale: .9,
            duration: 150,
            repeat: 5,
            yoyo: true,
            delay: 1200
        })

        // Eventos con el mouse para el botón de créditos:
        this.bgCredits.on("pointerover", function () {

            this.setTint(0x0fff00)
                      
         })

         this.bgCredits.on("pointerout", function () {

            this.clearTint()
            this.setScale(.25)
            txtCredits.setScale(.8)
                       
         })

        this.bgCredits.on("pointerdown", function () {

                this.setScale(.22)
                txtCredits.setScale(.7)
                               
         })

        //  Evento que activa la escena de los créditos cuando se aprieta el botón de créditos:
         var escena = this.scene
         this.bgCredits.on("pointerup", function () {

            this.setScale(.25)
            txtCredits.setScale(.8)
            setTimeout(() => {
                escena.start("Creditos")
            }, 300)
                        
        })

        // Evento que activa la escena del juego cuando se clickea el botón de play:
        this.botonPlay.on("pointerup", function () {

            btn.setScale(.8)
            setTimeout(() => {
                cambiaEscena = true
            }, 300)
            
        })

        // Eventos con el mouse para el botón de play:
        this.botonPlay.on("pointerdown", function () {

        
            btn.setScale(.6)
            
        })

        this.botonPlay.on("pointerover", function () {

        btn.setScale(.8)
        btn.setTint(0xffff00)
            
            
        })

        this.botonPlay.on("pointerout", function () {

            btn.setScale(.5)
            btn.clearTint()
                
        })

    }

    update(){

        // Creación de instancia del objeto SceneGame y carga de la escena del juego. 
        // La variable "startGame" impide que se cree mas de una instancia con el mismo nombre de la escena del juego
        // cuando vuelve a cargar desde el menú:
        if(cambiaEscena){
            if(startGame){
            this.scene.add("SceneGame", new SceneGame)
            if(playMusic){
                this.music = this.sound.add("tarantela", {loop: true})
                // this.music.detune = 100
                // this.sound.pauseOnBlur = false
                this.music.play()
                playMusic = false
                }
            startGame = false
        }
            this.scene.start("SceneGame")
            cambiaEscena = false
        }
    }
}