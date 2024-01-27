import React, { useEffect } from 'react';
import Phaser from 'phaser';
import './Game.css'

const Game = () => {
  useEffect(() => {
    // Calculate the initial width based on the percentage
    let desiredWidth = window.innerWidth * 0.45;
    let desiredHeight = window.innerHeight * 0.5;

    // Create a new Phaser game config
    const config = {
        type: Phaser.AUTO,
        width: desiredWidth,
        height: desiredHeight,
        parent: 'game-container',
        physics: {
            default: 'arcade',
            arcade: {
                debug: false
            }
        },
        scene: {
            preload: preload,
            create: create,
            update: update,
        },
    };

    // Initialize Phaser game
    const game = new Phaser.Game(config);

    // Preload assets
    function preload() {
      // Load game assets here
        this.load.image('background', process.env.PUBLIC_URL + '/Land.webp');
        this.load.image('maze', process.env.PUBLIC_URL + '/maze.png');
        // this.load.image('dude', process.env.PUBLIC_URL + '/assets/dude.png');
        this.load.spritesheet('dude', 
            process.env.PUBLIC_URL + 'assets/dude.png',
            { frameWidth: 32, frameHeight: 48 }
        );
        this.load.image('mouse', process.env.PUBLIC_URL + '/mouse.png');
    }

    var maze;
    var mouse;
    // Create game elements
    function create() {
        // Create game elements here
        const parentWidth = this.game.config.width;
        const parentHeight = this.game.config.height;

        this.add.image(desiredWidth / 2, desiredHeight / 2, 'background');
        maze = this.physics.add.staticGroup();
        const mazeSprite = maze.create(parentWidth / 2, parentHeight / 2, 'maze');
        mazeSprite.setSize(desiredWidth, desiredHeight);
        mazeSprite.setOrigin(0.5, 0.5);
        this.physics.world.enable(maze);

        // mouse
        mouse = this.physics.add.sprite(100, 450, 'mouse');
        mouse.setCollideWorldBounds(true);

        mouse.setFrame(0);
        // this.anims.create({
        //     key: 'left',
        //     frames: this.anims.generateFrameNumbers('mouse', {start: 0, end: 3}),
        //     frameRate: 10,
        //     repeat: -1
        // });

        // this.anims.create({
        //     key: 'turn',
        //     frames: [ { key: 'mouse', frame: 4 } ],
        //     frameRate: 20
        // });
        
        // this.anims.create({
        //     key: 'right',
        //     frames: this.anims.generateFrameNumbers('mouse', { start: 5, end: 8 }),
        //     frameRate: 10,
        //     repeat: -1
        // });

        this.physics.add.collider(mouse, maze);
    }

    // Update game logic (if needed)
    function update() {
        // Update logic here
        var cursors = this.input.keyboard.createCursorKeys();
        if (cursors.left.isDown)
        {
            mouse.setVelocityX(-160);

            // mouse.anims.play('left', true);
        }
        else if (cursors.right.isDown)
        {
            mouse.setVelocityX(160);

            // mouse.anims.play('right', true);
        }
        else if (cursors.up.isDown)
        {
            mouse.setVelocityY(160);
        }
        else
        {
            mouse.setVelocityX(0);

            // mouse.anims.play('turn');
        }

        if (cursors.up.isDown) {
            mouse.setVelocityY(-160);
        } else if (cursors.down.isDown) {
            mouse.setVelocityY(160);
        } else {
            mouse.setVelocityY(0);
        }

    }
    // Cleanup function
    return () => {
      game.destroy(true);
    };
  }, []); // Empty dependency array ensures useEffect runs only once

  return <div id="game-container"></div>;
};

export default Game;
