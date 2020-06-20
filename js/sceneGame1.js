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
   
}

    create ()
    {
        this.anims.create({
            key: 'walk',
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

        this.pizzaMan = this.matter.add.sprite(100, 300, 'pizzaMan1').play("walk")
        this.pizzaMan.anims.pause();
        this.pizzaMan.setFrictionAir(0.15);
        this.pizzaMan.setMass(30);
        this.pizzaMan.setFixedRotation();
        this.matter.world.setBounds(0, 0, 800, 600);


        this.cursors = this.input.keyboard.createCursorKeys();

        
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
            this.pizzaMan.anims.resume();
            this.pizzaMan.thrust(0.06)
        }

        else{

            this.pizzaMan.anims.pause();     
        }
    }

}