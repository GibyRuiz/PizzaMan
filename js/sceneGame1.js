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

        this.rata = this.add.sprite(200, 300, 'rata1').play("rataWalk")

        
        this.pizzaMan = this.matter.add.sprite(100, 300, 'pizzaMan1')
        this.pizzaMan.setFrictionAir(0.15);
        this.pizzaMan.setMass(30);
        this.pizzaMan.setFixedRotation();
        this.matter.world.setBounds(0, 0, 800, 600);


        this.cursors = this.input.keyboard.createCursorKeys();

        this.input.keyboard.on("keyup_UP", () => {
            this.pizzaMan.anims.restart();

            this.pizzaMan.anims.stop("pizzaManWalk");
        })

        this.input.keyboard.on("keydown_UP", () => {
            this.pizzaMan.anims.play("pizzaManWalk");
        })

        
    }

    update(){

        if (this.cursors.left.isDown)
        {
            this.pizzaMan.setAngularVelocity(-0.1);
        }
        
        else if (this.cursors.right.isDown)
        {
            this.pizzaMan.setAngularVelocity(0.1);
        }

        if (this.cursors.up.isDown)
        {
            this.pizzaMan.thrust(0.06)
        }

    }

}