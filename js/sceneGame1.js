class SceneGame extends Phaser.Scene {

    constructor()
    {
        super({key:"SceneGame"});
    }

    preload ()
{
    // this.load.audio('tarantela', 'tarantela.mp3' )
    this.load.audio('mama', 'mamaMia.mp3' )
    this.load.audio('yuhu', 'wooHoo.mp3' )
    this.load.audio('nooo', 'nooo.mp3' )


    this.load.image('corazon', 'corazon.png');

    this.load.image('ajo', 'ajo.png');
    this.load.image('cebolla', 'cebolla.png');
    this.load.image('harina', 'harina.png');
    this.load.image('lata', 'lata.png');
    this.load.image('queso', 'queso.png');
    this.load.image('tomate', 'tomate.png');

    this.load.image('pizzaMan1', 'Sprite-1.png');
    this.load.image('pizzaMan2', 'Sprite-2.png');
    this.load.image('pizzaMan3', 'Sprite-3.png');
    this.load.image('pizzaMan4', 'Sprite-4.png');
    this.load.image('pizzaMan5', 'Sprite-5.png');
    this.load.image('pizzaMan6', 'Sprite-6.png');
    this.load.image('pizzaMan7', 'Sprite-7.png');
    this.load.image('pizzaMan8', 'Sprite-8.png');   

    this.load.image('rata1', 'Rata sprite 1.png');   
    this.load.image('rata2', 'Rata sprite 2.png');   
    this.load.image('rata3', 'Rata sprite 3.png');   
    this.load.image('rata4', 'Rata sprite 4.png');   
    this.load.image('rata5', 'Rata sprite 5.png');   
    this.load.image('rata6', 'Rata sprite 6.png');   

    this.load.image('horno', 'horno1.png');   
    this.load.image('hornoMesa', 'hornoymesa2.png');  
    this.load.image('mesa1', 'mesa1.png');   
    this.load.image('mesa2', 'mesa2.png');   
    this.load.image('mesa3', 'mesa3.png');   
    this.load.image('mesa4', 'mesa4.png');   
    this.load.image('mesaGrande', 'mesagrande.png');   
    this.load.image('mesaMadera1', 'mesamadera1.png');   
    this.load.image('mesaMadera2', 'mesamadera2.png');   
    this.load.image('piso', 'pisotemporal.png');   

}

    create ()
    {
        stopVelocity = true;
        vidas = 3;
        playMusic = true;
        // this.music = this.sound.add('tarantela', {loop: true});
        var mama = this.sound.add('mama');
        var yuhu = this.sound.add('yuhu');
        this.noo = this.sound.add('nooo');
        yuhu.detune = 400
        yuhu.volume = 3
        mama.detune = 1000
        this.mama = mama
        
        

        this.sound.pauseOnBlur = false
        
        music.detune = 200

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

        this.add.image(0, 0, "piso").setOrigin(0)
        this.add.image(665, 0, "piso").setOrigin(0)


        this.grupoCocina = this.physics.add.staticGroup();
        this.grupoCocina.create(700, 50, 'mesa3');
        this.grupoCocina.create(374, 60, 'mesa1');
        this.grupoCocina.create(699, 550, 'mesa2');
        this.grupoCocina.create(749, 152, 'mesa4');
        this.grupoCocina.create(320, 328, 'mesaGrande');
        this.grupoCocina.create(50, 100, 'mesaMadera1');
        this.grupoCocina.create(50, 550, 'mesaMadera2');
        this.grupoCocina.create(750, 338, 'horno');
        this.grupoCocina.create(340, 550, 'hornoMesa')

        this.grupoIngredientes = this.physics.add.group();
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


        var textScore = this.add.text(610, 60, 'SCORE: 0', { font: '30px Piedra, cursive', fill: '#bf0000' });
       
        this.ratas = this.physics.add.group();

        this.rata1 = this.ratas.create(450, 460, 'rata1').play("rataWalk")
        this.rata2 = this.ratas.create(620, 460, 'rata1').play("rataWalk")
        this.rata3 = this.ratas.create(200, 50, 'rata1').play("rataWalk")
        this.rata4 = this.ratas.create(40, 480, 'rata1').play("rataWalk")
        this.rata4.setSize(60, 25).angle = 90
        this.rata5 = this.ratas.create(140, 180, 'rata1').play("rataWalk")
        this.rata5.setSize(60, 25).angle = 90




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

        

        
        this.pizzaMan = this.physics.add.sprite(50, 300, 'pizzaMan1').setCollideWorldBounds(true)
        this.pizzaMan.setCircle(17, 12, 15)        

        this.cursors = this.input.keyboard.createCursorKeys();

        this.input.keyboard.on("keyup_UP", () => {
            this.pizzaMan.anims.restart();

            this.pizzaMan.anims.stop("pizzaManWalk");
        })

        this.input.keyboard.on("keydown_UP", () => {
            this.pizzaMan.anims.play("pizzaManWalk");
        })
        

        
        this.physics.add.collider(this.pizzaMan, this.grupoCocina);

        this.physics.add.overlap(this.pizzaMan, this.grupoIngredientes, (player, ing) => {
            ing.disableBody(true, true);
            puntos++
            textScore.setText("SCORE: " + puntos)
            yuhu.play()
             } );

        this.physics.add.overlap(this.pizzaMan, this.ratas, chocaRatas);

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
            
    
        });

        

        var pizzaMan = this.pizzaMan

        function chocaRatas(){
            mama.play()

            
            if(controlaAlfa){
                controlaAlfa = false
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

            setTimeout(() => {
               controlaAlfa = true
               vidas--
               var arrCorazones = corazones.getChildren()[corazones.getChildren().length -1]
               arrCorazones.destroy()
            }, 750)
        }

        

    }   


}
    

    update(){

        
        Phaser.Actions.Rotate(this.grupoIngredientes.getChildren(), .05);

        if(vidas == 0){
            
            stopVelocity = false
            this.pizzaMan.setVelocity(0,0)
            this.pizzaMan.angle += 30
            this.pizzaMan.setScale(1.5)
            this.pizzaMan.setCircle(5, 30, 30)
            this.pizzaMan.alpha = 1
            this.mama.volume = 0
            this.noo.detune = 400
            this.noo.volume = 2
            this.noo.play()
            var escena = this.scene
            
            
            setTimeout(() => {

                if(startGameOver){
                
                escena.add("GameOVer", new GameOver)
                startGameOver = false
            }
                escena.start("GameOver")
            }, 1000)

        }

        this.pizzaMan.setVelocity(0)

        if (this.grupoIngredientes.countActive(true) === 0){
            this.tweenRata1.timeScale +=.2;
            this.tweenRata2.timeScale +=.2;
            this.tweenRata3.timeScale +=.2;
            this.tweenRata4.timeScale +=.2;
            this.tweenRata5.timeScale +=.2;

            this.grupoIngredientes.children.iterate(function (child) {

                child.enableBody(true, child.x, child.y, true, true);
    
            });
        }

        if (this.cursors.left.isDown)
        {
            this.pizzaMan.angle -= 4
        }
        
        else if (this.cursors.right.isDown)
        {
            this.pizzaMan.angle += 4
        }

        if (this.cursors.up.isDown && stopVelocity)
        {
            this.pizzaMan.setVelocity(Math.cos((this.pizzaMan.angle * Math.PI)/180) * 300, Math.sin((this.pizzaMan.angle * Math.PI)/180) * 300)
            if(playMusic){
            music.play()
            playMusic = false
            }
        }

        if(this.rata1.y == 150){
            this.rata1.flipY = true;
        }

        else if(this.rata1.y == 460){
            this.rata1.flipY = false;

        }

        if(this.rata2.y == 150){
            this.rata2.flipY = true;
        }

        else if(this.rata2.y == 460){
            this.rata2.flipY = false;

        }

        if(this.rata3.y == 50){
            this.rata3.flipY = true;
        }

        else if(this.rata3.y == 470){
            this.rata3.flipY = false;

        }

        
        if(this.rata4.x == 770){
            this.rata4.flipY = true;
        }

        else if(this.rata4.x == 40){
            this.rata4.flipY = false;

        }

        if(this.rata5.x == 670){
            this.rata5.flipY = true;
        }

        else if(this.rata5.x == 140){
            this.rata5.flipY = false;

        }

       

    }

}