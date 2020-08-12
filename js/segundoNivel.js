// Dejo preparado la configuración de la cámara para armar el segundo nivel:

        // Zoom:
        // this.cameras.main.setZoom(valor);

        // La cámara sigue al personaje:
        // this.cameras.main.startFollow(personaje, true, delay X, delay Y);

        // La cámara se puede desplazar hasta el punto límite indicado:
        // this.cameras.main.setBounds(origenX, origenY, finalX, finalY);

        // Se ammplían los límites colisionables del juego:
        // this.physics.world.setBounds(origenX, origenY, finalX, finalY);

        // SetScrollFactor:
        // Hace que el texto se fije a la cámara. Sirve para otros assets.
        // text = this.add.text(origenX, origenY).setText('text').setScrollFactor(0);

        // Dead zone:
        // La zona muerta toma un rectángulo que tiene como centro el punto central de la cámara. 
        // Permite que el objetivo se mueva libremente por la zona sin que la cámara lo siga.
        // this.cameras.main.setDeadzone(tamaño en x, tamaño en y);

        // Viewport (tamaño y posición de la cámara):
        // this.cameras.main.setViewport(origenX, origenY, ancho, alto);

        // Guardar la cámara en una variable:
        // var cam = this.cameras.main;
        // Hacer más chica la cámara y por lo tanto la visión de la escena:
        // cam.setViewport(origenX, origenY, ancho, alto);
        // Otra fomra de hacer zoom:
        // cam.zoom = valor;
        // Hacer scroll:
        // cam.scrollX = valor;
        // cam.scrollY = valor;

        // Agregar mas cámaras:
        // this.cameras.add(origenX, origenY, tamañoX, tamañoY);

        // Sacudir:
        // cam.shake(duración en ms, intensidad); <= Se puede colocar en el update sin condicional

        // Hacer que la imágen aparezca como si fuera que se le sube el alfa y que dispare como un flash:
        // cam.flash(duración en ms); <= Se puede colocar en el update sin condicional
        // Lo que ocurre es que al principio la imagen carga con la información de los pixeles al máximo y se ve blanca
        // cam.flash(duración en ms, 1, 1, 1); <= con los valores 1 se controla el color del flash.

        // Hacer que la imágen desaparezca como si fuera que se le baja el alfa:
        // cam.fade(duración en ms);

 class SegundoNivel extends Phaser.Scene {

       constructor()
        {
            super({key:"SegundoNivel"})
        }

        preload(){

                this.load.image('piso', 'piso.png')
                this.load.image('horno', 'horno1.png')  
                this.load.image('hornoMesa', 'hornoymesa2.png')  
                this.load.image('mesa1', 'mesa1.png') 
                this.load.image('mesa2', 'mesa2.png')   
                this.load.image('mesa3', 'mesa3.png')  
                this.load.image('mesa4', 'mesa4.png')  
                this.load.image('mesaGrande', 'mesagrande.png')   
                this.load.image('mesaMadera1', 'mesamadera1.png')   
                this.load.image('mesaMadera2', 'mesamadera2.png') 

                this.load.image('pizzaMan1', 'Sprite-1.png')
                this.load.image('pizzaMan2', 'Sprite-2.png')
                this.load.image('pizzaMan3', 'Sprite-3.png')
                this.load.image('pizzaMan4', 'Sprite-4.png')
                this.load.image('pizzaMan5', 'Sprite-5.png')
                this.load.image('pizzaMan6', 'Sprite-6.png')
                this.load.image('pizzaMan7', 'Sprite-7.png')
                this.load.image('pizzaMan8', 'Sprite-8.png')

                this.load.image('ajo', 'ajo.png')
                this.load.image('cebolla', 'cebolla.png')
                this.load.image('harina', 'harina.png')
                this.load.image('lata', 'lata.png')
                this.load.image('queso', 'queso.png')
                this.load.image('tomate', 'tomate.png')
                this.load.image('porcion', 'pedazo de pizza .png')

                this.load.audio('yuhu', 'wooHoo.mp3' )

                this.load.image('corazon', 'corazon.png')

                this.load.image('pizza', 'pizza completa.png')

                this.load.image('rata1', 'Rata sprite 1.png')
                this.load.image('rata2', 'Rata sprite 2.png') 
                this.load.image('rata3', 'Rata sprite 3.png')  
                this.load.image('rata4', 'Rata sprite 4.png')   
                this.load.image('rata5', 'Rata sprite 5.png')   
                this.load.image('rata6', 'Rata sprite 6.png')   

                this.load.image('rataAzul1', 'rata sprite azul 1 png.png')
                this.load.image('rataAzul2', 'rata sprite azul 2 png.png') 
                this.load.image('rataAzul3', 'rata sprite azul 3 png.png')  
                this.load.image('rataAzul4', 'rata sprite azul 4 png.png') 

                this.load.image('cucaracha1', 'cucaracha sprite 1.png')   
                this.load.image('cucaracha2', 'cucaracha sprite 2.png')   
                this.load.image('cucaracha3', 'cucaracha sprite 3.png')   

        }

        create(){

                // this.cameras.main.setZoom(.34)

                stopVelocity = true
                dibujaCirculo = true

                var yuhu = this.sound.add('yuhu')
                yuhu.detune = 400
                yuhu.volume = 3

                this.add.image(0, 0, "piso").setOrigin(0)
                this.add.image(740, 0, "piso").setOrigin(0)
                this.add.image(-740, 0, "piso").setOrigin(0)

                this.grupoCocina = this.physics.add.staticGroup()
                this.grupoCocina.create(700, 50, 'mesa3')
                this.grupoCocina.create(374, 60, 'mesa1')
                this.grupoCocina.create(699, 550, 'mesa2')
                this.grupoCocina.create(749, 152, 'mesa4')
                this.grupoCocina.create(320, 328, 'mesaGrande')
                this.grupoCocina.create(50, 100, 'mesaMadera1')
                this.grupoCocina.create(50, 550, 'mesaMadera2')
                this.grupoCocina.create(1490, 338, 'horno')
                this.grupoCocina.create(340, 550, 'hornoMesa')
                this.grupoCocina.create(-500, 50, 'mesa3')
                this.grupoCocina.create(-374, 300, 'mesa1')
                this.grupoCocina.create(-210, 310, 'mesa2')
                this.grupoCocina.create(-490, 310, 'mesa4')
                this.grupoCocina.create(1440, 103, 'mesaGrande')
                this.grupoCocina.create(-690, 498, 'mesaMadera1')
                this.grupoCocina.create(970, 130, 'mesaMadera2')
                this.grupoCocina.create(1180, 130, 'mesaMadera2')
                this.grupoCocina.create(1388, 550, 'hornoMesa')
                this.grupoCocina.create(1050, 398, 'mesaMadera1')

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

                this.grupoIngredientes.create(-700, 250, "tomate").setScale(1.3)
                this.grupoIngredientes.create(-600, 450, "cebolla").setScale(1.4)
                this.grupoIngredientes.create(-140, 560, "ajo").setScale(1.4)
                this.grupoIngredientes.create(-550, 560, "queso").setScale(1.5)
                this.grupoIngredientes.create(-650, 50, "lata").setScale(1.4)
                this.grupoIngredientes.create(1000, 40, "harina").setScale(1.4)
                this.grupoIngredientes.create(1195, 40, "tomate").setScale(1.3)
                this.grupoIngredientes.create(1250, 450, "lata").setScale(1.4)
                this.grupoIngredientes.create(1350, 300, "ajo").setScale(1.4)
                this.grupoIngredientes.create(1195, 350, "queso").setScale(1.5)
                this.grupoIngredientes.create(1160, 540, "harina").setScale(1.4)
                this.grupoIngredientes.create(-300, 50, "cebolla").setScale(1.4)

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
            
                this.anims.create({
                        key: 'rataAzulWalk',
                        frames: [
                            { key: 'rataAzul1' },
                            { key: 'rataAzul2' },
                            { key: 'rataAzul3' },
                            { key: 'rataAzul4' },
                            
                        ],
                        frameRate: 15,
                        repeat: -1
                })

                this.anims.create({
                        key: 'cucarachaWalk',
                        frames: [
                            { key: 'cucaracha1' },
                            { key: 'cucaracha2' },
                            { key: 'cucaracha3' },
                            
                        ],
                        frameRate: 10,
                        repeat: -1
                })

                var corazones = this.add.group({
                        key: 'corazon',
                        repeat: 2,
                        setXY:
                        {
                            x: 672,
                            y: 35,
                            stepX: 39
                        },
                        setScale: { x: .25, y: .25 }
                })

                this.ratasYcucarachas = this.physics.add.group()
                this.rata1 = this.ratasYcucarachas.create(-50, 560, 'rata1').play("rataWalk")
                this.rata2 = this.ratasYcucarachas.create(850, 558, 'rata1').play("rataWalk")
                this.rata3 = this.ratasYcucarachas.create(140, 559, 'rataAzul1').play("rataAzulWalk")
                this.rata4 = this.ratasYcucarachas.create(-600, 480, 'rata1').play("rataWalk")
                this.rata4.setSize(60, 25).angle = 90
                this.rata5 = this.ratasYcucarachas.create(460, 255, 'rataAzul1').play("rataAzulWalk")
                this.rata5.setSize(60, 25).angle = 90
                this.rata6 = this.ratasYcucarachas.create(-699, 175, 'rataAzul1').play("rataAzulWalk")
                this.rata6.setSize(60, 25).angle = 90
                this.cucaracha1 = this.ratasYcucarachas.create(538, 560, 'cucaracha1').play("cucarachaWalk")
                this.cucaracha2 = this.ratasYcucarachas.create(-588, 560, 'cucaracha1').play("cucarachaWalk")
                this.cucaracha3 = this.ratasYcucarachas.create(1188, 560, 'cucaracha1').play("cucarachaWalk")


                corazones.children.iterate(function (child) {

                            child.setScrollFactor(0)
                
                        })

                this.porcionPizza = this.add.image(680, 57, "porcion").setScale(.12)
                this.porcionPizza.alpha = 0

                this.circle = new Phaser.Geom.Circle(50, 300, 50)
                this.triangleTop = new Phaser.Geom.Triangle.BuildEquilateral(53, 220, 30)
                this.triangleBottom = new Phaser.Geom.Triangle.BuildEquilateral(53, 340, 30)
                this.triangleRight = new Phaser.Geom.Triangle.BuildEquilateral(115, 287, 30)
                this.triangleLeft = new Phaser.Geom.Triangle.BuildEquilateral(-17, 287, 30)

                Phaser.Geom.Triangle.Rotate(this.triangleBottom, 1.035)
                Phaser.Geom.Triangle.Rotate(this.triangleRight, -.5)
                Phaser.Geom.Triangle.Rotate(this.triangleLeft, .5)


                this.graphics = this.add.graphics({ fillStyle: { color: 0xee0000 } })

                this.pizzaMan = this.physics.add.sprite(50, 300, 'pizzaMan1').setCollideWorldBounds(true)
                this.pizzaMan.setCircle(17, 12, 15) 

                this.pizza = this.add.image(400, 300, "pizza").setScale(.1)
                this.pizza.alpha = 0
                this.pizza.setScrollFactor(0)

                this.cameras.main.startFollow(this.pizzaMan)

                this.cameras.main.setBounds(-740, 0, 2275, 600);

                this.cursors = this.input.keyboard.createCursorKeys()

                this.physics.add.collider(this.pizzaMan, this.grupoCocina)

                this.physics.world.setBounds(-740, 0, 2270, 600);

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

                this.physics.add.overlap(this.pizzaMan, this.grupoIngredientes, (player, ing) => {

                        yuhu.play()

                        ing.disableBody(true, true)
                        this.porcionPizza.x = ing.x
                        this.porcionPizza.y = ing.y + 15
                        this.porcionPizza.alpha = .4

                        var intervalo1 = setInterval(() => {
                        incrementoTamañoPorcion += .013
                        this.porcionPizza.setScale(incrementoTamañoPorcion)

                        if(incrementoTamañoPorcion >= .6){

                                this.porcionPizza.alpha = .2
                        }

                        if(incrementoTamañoPorcion >= .8){

                                this.porcionPizza.alpha = 0
                                incrementoTamañoPorcion = .12
                                this.porcionPizza.setScale(incrementoTamañoPorcion)
                                clearInterval(intervalo1)
                        }

                        }, 1)} )

        }

        update(){

                this.pizzaMan.setVelocity(0)

                if (this.grupoIngredientes.countActive(true) === 0){

                        this.pizza.alpha = 1
            
                        if(incrementoTamañoPizza <= .7){
            
                            this.pizza.setScale(incrementoTamañoPizza += .02)
                        }
                }

                if(dibujaCirculo){

                        angle += 0.15
                        this.graphics.clear();
                        this.circle.radius = 50 - Math.cos(angle) * 3
                        this.triangleTop.top = 205 - Math.cos(angle) * 15
                        this.triangleBottom.top = 370 + Math.cos(angle) * 15
                        this.triangleRight.left = 120 + Math.cos(angle) * 15
                        this.triangleLeft.left = -45 - Math.cos(angle) * 15
                        this.graphics.fillCircleShape(this.circle)
                        this.graphics.fillTriangleShape(this.triangleTop)
                        this.graphics.fillTriangleShape(this.triangleBottom)
                        this.graphics.fillTriangleShape(this.triangleRight)
                        this.graphics.fillTriangleShape(this.triangleLeft)

                }


                if(stopVelocity){
                        
                        if (this.cursors.left.isDown)
                        {
                                this.pizzaMan.angle -= 4
                        }
                        
                        else if (this.cursors.right.isDown)
                        {
                                this.pizzaMan.angle += 4
                        }

                        if (this.cursors.up.isDown )
                        {
                                dibujaCirculo = false
                                this.graphics.clear();
                                this.pizzaMan.setVelocity(Math.cos((this.pizzaMan.angle * Math.PI)/180) * 300, Math.sin((this.pizzaMan.angle * Math.PI)/180) * 300)
                        }
                }
        }
}