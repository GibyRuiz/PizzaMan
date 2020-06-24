class SceneGame extends Phaser.Scene {

    constructor()
    {
        super({key:"SceneGame"});
    }

    preload ()
{

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


        this.ratas = this.physics.add.group();

        this.rata1 = this.ratas.create(450, 460, 'rata1').play("rataWalk")
        this.rata2 = this.ratas.create(620, 460, 'rata1').play("rataWalk")
        this.rata3 = this.ratas.create(200, 50, 'rata1').play("rataWalk")
        this.rata4 = this.ratas.create(40, 480, 'rata1').play("rataWalk")
        this.rata4.setSize(70, 30).angle = 90
        this.rata5 = this.ratas.create(140, 180, 'rata1').play("rataWalk")
        this.rata5.setSize(70, 30).angle = 90




        this.tweens.add({
            targets: this.rata1,
            duration:2000,
            y: 150,
            repeat: -1,
            yoyo: true,
            ease: 'linear'
        })

        this.tweens.add({
            targets: this.rata2,
            duration:2000,
            y: 150,
            repeat: -1,
            yoyo: true,
            ease: 'linear',
            delay: 1500
        })

        this.tweens.add({
            targets: this.rata3,
            duration:2000,
            y: 470,
            repeat: -1,
            yoyo: true,
            ease: 'linear'
        })

        this.tweens.add({
            targets: this.rata4,
            duration:3000,
            x: 770,
            repeat: -1,
            yoyo: true,
            ease: 'linear'
        })

        this.tweens.add({
            targets: this.rata5,
            duration:2000,
            x: 670,
            repeat: -1,
            yoyo: true,
            ease: 'linear'
        })

        
        this.pizzaMan = this.physics.add.sprite(50, 300, 'pizzaMan1').setCollideWorldBounds(true)
        this.pizzaMan.setSize(50, 50)        

        this.cursors = this.input.keyboard.createCursorKeys();

        this.input.keyboard.on("keyup_UP", () => {
            this.pizzaMan.anims.restart();

            this.pizzaMan.anims.stop("pizzaManWalk");
        })

        this.input.keyboard.on("keydown_UP", () => {
            this.pizzaMan.anims.play("pizzaManWalk");
        })
        

        
        this.physics.add.collider(this.pizzaMan, this.grupoCocina);

        // COLISIONES:
        // forma 1:
        // this.physics.add.collider(sprite, [ grupo1, grupo2, ... ], function);

        // forma 2:
        // this.physics.add.overlap(sprite, grupo, function);

        // GRUPOS:
        // group.createMultiple({ key: ['imagen2', 'imagen1', ...]});
        // Phaser.Actions.SetXY(grupo.getChildren(), origenX, origenY, stepX);
        // Phaser.Actions.SetXY([group.getChildren()[0]], origenX, origenY, stepX);



    }

    update(){

        this.pizzaMan.setVelocity(0)

        if (this.cursors.left.isDown)
        {
            this.pizzaMan.angle -= 4
            
        }
        
        else if (this.cursors.right.isDown)
        {
            this.pizzaMan.angle += 4
        }

        if (this.cursors.up.isDown)
        {
            this.pizzaMan.setVelocity(Math.cos((this.pizzaMan.angle * Math.PI)/180) * 300, Math.sin((this.pizzaMan.angle * Math.PI)/180) * 300)

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