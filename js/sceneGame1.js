// Escena del juego:

class SceneGame extends Phaser.Scene {

    constructor()
    {
        super({key:"SceneGame"})
    }

    preload ()
{
    // Precarga de sonidos:
    this.load.audio('mama', 'mamaMia.mp3' )
    this.load.audio('yuhu', 'wooHoo.mp3' )
    this.load.audio('nooo', 'nooo.mp3' )

    // Precarga de vidas e ingredientes:
    this.load.image('corazon', 'corazon.png')
    this.load.image('ajo', 'ajo.png')
    this.load.image('cebolla', 'cebolla.png')
    this.load.image('harina', 'harina.png')
    this.load.image('lata', 'lata.png')
    this.load.image('queso', 'queso.png')
    this.load.image('tomate', 'tomate.png')

    // Precarga de imágenes del pizzaMan para generar la animación:
    this.load.image('pizzaMan1', 'Sprite-1.png')
    this.load.image('pizzaMan2', 'Sprite-2.png')
    this.load.image('pizzaMan3', 'Sprite-3.png')
    this.load.image('pizzaMan4', 'Sprite-4.png')
    this.load.image('pizzaMan5', 'Sprite-5.png')
    this.load.image('pizzaMan6', 'Sprite-6.png')
    this.load.image('pizzaMan7', 'Sprite-7.png')
    this.load.image('pizzaMan8', 'Sprite-8.png')

    // Precarga de imágenes de la rata para generar la animación:
    this.load.image('rata1', 'Rata sprite 1.png')
    this.load.image('rata2', 'Rata sprite 2.png') 
    this.load.image('rata3', 'Rata sprite 3.png')  
    this.load.image('rata4', 'Rata sprite 4.png')   
    this.load.image('rata5', 'Rata sprite 5.png')   
    this.load.image('rata6', 'Rata sprite 6.png')   

    // Precarga de los sprites de la cocina:
    this.load.image('horno', 'horno1.png')  
    this.load.image('hornoMesa', 'hornoymesa2.png')  
    this.load.image('mesa1', 'mesa1.png') 
    this.load.image('mesa2', 'mesa2.png')   
    this.load.image('mesa3', 'mesa3.png')  
    this.load.image('mesa4', 'mesa4.png')  
    this.load.image('mesaGrande', 'mesagrande.png')   
    this.load.image('mesaMadera1', 'mesamadera1.png')   
    this.load.image('mesaMadera2', 'mesamadera2.png')   
    this.load.image('piso', 'pisotemporal.png')   

}

    create ()
    {
        // Variables que recuperan los valores que necesitan al inicio de la escena:
        stopVelocity = true
        vidas = 3
        playMusic = true
        iniciaGameOver = true
        puntos = 0

        // Adición de sonidos:
        var mama = this.sound.add('mama')
        var yuhu = this.sound.add('yuhu')
        this.noo = this.sound.add('nooo')

        // Configuración de sonidos:
        yuhu.detune = 400
        yuhu.volume = 3
        mama.detune = 1000
        this.mama = mama
        music.detune = 200
        this.sound.pauseOnBlur = false
        
        this.add.image(0, 0, "piso").setOrigin(0)
        this.add.image(665, 0, "piso").setOrigin(0)

        // Creación de grupo de elementos de la cocina:
        this.grupoCocina = this.physics.add.staticGroup()
        this.grupoCocina.create(700, 50, 'mesa3')
        this.grupoCocina.create(374, 60, 'mesa1')
        this.grupoCocina.create(699, 550, 'mesa2')
        this.grupoCocina.create(749, 152, 'mesa4')
        this.grupoCocina.create(320, 328, 'mesaGrande')
        this.grupoCocina.create(50, 100, 'mesaMadera1')
        this.grupoCocina.create(50, 550, 'mesaMadera2')
        this.grupoCocina.create(750, 338, 'horno')
        this.grupoCocina.create(340, 550, 'hornoMesa')

        // Creación de grupo de ingredientes:
        this.grupoIngredientes = this.physics.add.group()
        this.grupoIngredientes.create(750, 250, "tomate").setScale(1.3)
        this.grupoIngredientes.create(750, 450, "cebolla").setScale(1.4)
        this.grupoIngredientes.create(140, 560, "ajo").setScale(1.4)
        this.grupoIngredientes.create(550, 560, "queso").setScale(1.5)
        this.grupoIngredientes.create(650, 150, "lata").setScale(1.4)
        this.grupoIngredientes.create(530, 60, "harina").setScale(1.4)
        this.grupoIngredientes.create(145, 40, "tomate").setScale(1.3)
        this.grupoIngredientes.create(50, 450, "lata").setScale(1.4)
        this.grupoIngredientes.create(500, 300, "ajo").setScale(1.4)
        this.grupoIngredientes.create(195, 350, "queso").setScale(1.5)
        this.grupoIngredientes.create(260, 40, "harina").setScale(1.4)
        this.grupoIngredientes.create(400, 200, "cebolla").setScale(1.4)

        // Animación de las ratas:
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
        })

        // Creación de grupo de ratas:
        this.ratas = this.physics.add.group()
        this.rata1 = this.ratas.create(450, 460, 'rata1').play("rataWalk")
        this.rata2 = this.ratas.create(620, 460, 'rata1').play("rataWalk")
        this.rata3 = this.ratas.create(200, 50, 'rata1').play("rataWalk")
        this.rata4 = this.ratas.create(40, 480, 'rata1').play("rataWalk")
        this.rata4.setSize(60, 25).angle = 90
        this.rata5 = this.ratas.create(140, 180, 'rata1').play("rataWalk")
        this.rata5.setSize(60, 25).angle = 90

        // Creación de grupo de corazones:
        var corazones = this.add.group({
            key: 'corazon',
            repeat: 2,
            setXY:
            {
                x: 622,
                y: 35,
                stepX: 39
            },
            setScale: { x: .25, y: .25 }
        })

        // Carga y configuración del sprite del pizzaMan:
        this.pizzaMan = this.physics.add.sprite(50, 300, 'pizzaMan1').setCollideWorldBounds(true)
        this.pizzaMan.setCircle(17, 12, 15)  
        
        // Carga y configuración del texto de puntaje:
        var textScore = this.add.text(607, 63, 'SCORE: 0', {font: "27px Arial Black", fill: '#af0000' })
        textScore.setShadow(-1, 2, "#ff00ff", 4, true, true)


        // Animación del pizzaMan:
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
        })


        // Tweens de las ratas para que vayan de un punto a otro y vuelvan:
        this.tweenRata1 = this.tweens.add({
            targets: this.rata1,
            duration:2000,
            y: 150,
            repeat: -1,
            yoyo: true,
            ease: 'linear',                
                    
        })

        this.tweenRata2 = this.tweens.add({
            targets: this.rata2,
            duration:2000,
            y: 150,
            repeat: -1,
            yoyo: true,
            ease: 'linear',
            delay: 1500
        })

        this.tweenRata3 = this.tweens.add({
            targets: this.rata3,
            duration:2000,
            y: 470,
            repeat: -1,
            yoyo: true,
            ease: 'linear'
        })

        this.tweenRata4 = this.tweens.add({
            targets: this.rata4,
            duration:3000,
            x: 770,
            repeat: -1,
            yoyo: true,
            ease: 'linear'
        })

        this.tweenRata5 =this.tweens.add({
            targets: this.rata5,
            duration:2000,
            x: 670,
            repeat: -1,
            yoyo: true,
            ease: 'linear'
        })

        // Creación de controles del teclado: 
        this.cursors = this.input.keyboard.createCursorKeys()

        // Eventos controlar la animación del pizzaMan con la flecha "arriba" del teclado,
        // tanto cuando se aprieta como cuando se suelta:
        this.input.keyboard.on("keyup_UP", () => {

            this.pizzaMan.anims.restart()
            this.pizzaMan.anims.stop("pizzaManWalk")
        })

        this.input.keyboard.on("keydown_UP", () => {

            if(stopVelocity == true){

                this.pizzaMan.anims.play("pizzaManWalk")

            }
            else{

                this.pizzaMan.anims.stop("pizzaManWalk")
            }
        })
        

        // Colisión entre el pizzaMan y los elementos de la cocina:
        this.physics.add.collider(this.pizzaMan, this.grupoCocina)

        // Colisión entre el pizzaMan y los ingredienes:
        this.physics.add.overlap(this.pizzaMan, this.grupoIngredientes, (player, ing) => {
            ing.disableBody(true, true)
            puntos++
            textScore.setText("SCORE: " + puntos)
            yuhu.play()
            } )

        // Colisión entre el pizzaMan y las ratas:
        this.physics.add.overlap(this.pizzaMan, this.ratas, chocaRatas)

        // Función que se llama cuando el personaje choca con una rata:
        var pizzaMan = this.pizzaMan
        function chocaRatas(){
            
            // La variable "controlaAlfa" controla que no se ejecute denuevo el código de la función hasta que no haya
            // terminado de ejecutarse por completo
            if(controlaAlfa){                
                   
                controlaAlfa = false

                if(vidas > 0){
                    
                    // Suena el mama mia! cada vez que chocamos una rata:
                    mama.play()

                setTimeout(() => {
                    pizzaMan.setAlpha(0.4)
                    pizzaMan.setTint(0xff0000)
                }, 150)
                
                setTimeout(() => {
                    pizzaMan.setAlpha(1)
                    pizzaMan.clearTint()
                }, 250)

                setTimeout(() => {
                    pizzaMan.setAlpha(0.4)
                    pizzaMan.setTint(0xff0000)
                }, 350)

                setTimeout(() => {
                    pizzaMan.setAlpha(1)
                    pizzaMan.clearTint()
                }, 450)
            }

            setTimeout(() => {
               
               vidas--

               if(vidas > -1){
                // Se quita un corazón cada vez que se choca con una rata:
                    var arrCorazones = corazones.getChildren()[corazones.getChildren().length -1]

                    if(arrCorazones !== undefined){
                    arrCorazones.destroy()
                    }
               }

               controlaAlfa = true
            }, 750)
        }

    }   

}
    

    update(){

        // Rotación de los ingredientes:
        Phaser.Actions.Rotate(this.grupoIngredientes.getChildren(), .05)

        // Se prepara para lanzar la escena de game over:
        if(vidas == 0){
            
            stopVelocity = false
            this.pizzaMan.setVelocity(0,0)
            this.pizzaMan.angle += 30
            this.pizzaMan.setScale(1.5)
            this.pizzaMan.setCircle(5, 30, 30)
            this.pizzaMan.alpha = 1
            this.noo.detune = 400
            this.noo.volume = 2
            this.noo.play()

            // Se prepara el puntaje que va a aparecer en la escena de game over como "best":
            if(puntos > puntajeGlobal){

            puntajeGlobal = puntos }

            // Se dispara la escena de game over:
            var escena = this.scene
            
            setTimeout(() => {

                if(startGameOver){
                
                escena.add("JuegoTerminado", new JuegoTerminado)
                startGameOver = false
                }

                if(iniciaGameOver){
                    escena.start("JuegoTerminado")
                    iniciaGameOver = false
                }
                
            }, 1000)

        }

        // Se detiene el personaje acá tambien por las dudas:
        this.pizzaMan.setVelocity(0)

        // Las ratas van mas rápido cuando se juntan todos los ingredientes:
        if (this.grupoIngredientes.countActive(true) === 0){
            this.tweenRata1.timeScale +=.2
            this.tweenRata2.timeScale +=.2
            this.tweenRata3.timeScale +=.2
            this.tweenRata4.timeScale +=.2
            this.tweenRata5.timeScale +=.2

            // Vuelven a aparecer los ingredientes una vez que se juntaron todos:
            this.grupoIngredientes.children.iterate(function (child) {

                child.enableBody(true, child.x, child.y, true, true)
    
            })
        }

        // Variable "stopVelocity" que controla que no se ejecute más el código que no se necesita al perder:
        if(stopVelocity){

        // Controladores para hacer girar al pizzaMan:
            if (this.cursors.left.isDown)
            {
                this.pizzaMan.angle -= 4
            }
            
            else if (this.cursors.right.isDown)
            {
                this.pizzaMan.angle += 4
            }

            // Controlador para hacer avanzar al pizzaMan:
            if (this.cursors.up.isDown )
            {
                // Fórmula para calcular el vector de dirección del pizzaMan:
                this.pizzaMan.setVelocity(Math.cos((this.pizzaMan.angle * Math.PI)/180) * 300, Math.sin((this.pizzaMan.angle * Math.PI)/180) * 300)

                // Variable "playMusic" para controlar que la música se reproduzca una sola vez.
                // La música se activa solo cuando se aprieta el cursor UP. Tuve que forzarla de esa manera
                // porque no arrancaba siempre que cargaba la escena. Hay un bug con la música que todavía no pude
                // solucionar y lo hace cuando, estando en la escena de game over, minimizamos o cambiamos la ventana
                // del navegador por unos segundos y al volver a la ventana del juego la música sigue sonando en vez de parar
                // al cargar la escena del menú, lo que hace que se pisen las pistas al cargar la escena del juego.
                if(playMusic){

                    music.play()
                    playMusic = false
                }
            }

        }
        
        // Lógica para hacer que las ratas se den vuelta:
        if(this.rata1.y == 150){

            this.rata1.flipY = true
        }

        else if(this.rata1.y == 460){

            this.rata1.flipY = false
        }

        if(this.rata2.y == 150){

            this.rata2.flipY = true
        }

        else if(this.rata2.y == 460){

            this.rata2.flipY = false
        }

        if(this.rata3.y == 50){

            this.rata3.flipY = true
        }

        else if(this.rata3.y == 470){

            this.rata3.flipY = false
        }

        if(this.rata4.x == 770){

            this.rata4.flipY = true
        }

        else if(this.rata4.x == 40){

            this.rata4.flipY = false
        }

        if(this.rata5.x == 670){

            this.rata5.flipY = true
        }

        else if(this.rata5.x == 140){

            this.rata5.flipY = false
        }

    }

}