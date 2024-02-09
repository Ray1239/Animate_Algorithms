import React, { useEffect } from 'react';
import Phaser from 'phaser';
import './Maze.css'

const Maze = ({wallPositions, dataSent}) => {
  useEffect(() => {
    // Calculate the initial width based on the percentage
    let desiredWidth = 570;
    let desiredHeight = 360;

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
        // this.load.image('maze', process.env.PUBLIC_URL + '/maze.png');
        // this.load.image('dude', process.env.PUBLIC_URL + '/assets/dude.png');
        // this.load.spritesheet('dude', 
        //     process.env.PUBLIC_URL + 'assets/dude.png',
        //     { frameWidth: 32, frameHeight: 48 }
        // );
        this.load.image('mouse', process.env.PUBLIC_URL + '/mouse.png');
    }

    var maze;
    var mouse;
    // Create game elements
    function create() {

        this.add.image(desiredWidth / 2, desiredHeight / 2, 'background');
        
        // Create maze group
        maze = this.physics.add.staticGroup();

        // const graphics = this.add.graphics();
        // graphics.lineStyle(2, 0xFFFFFF, 1);
        // const wall1 = graphics.lineBetween(0, 0, 570, 360);
        // wall1.physics.add.staticGroup();
        // const wall1 = this.add.line(70, 30, 0, 0, 140, 0, 0xFFFFFF);
        // const wall2 = this.add.line(570/2, 210, 0, 0, 0, -140, 0xFFFFFF);
        // maze.add(wall1);
        // maze.add(wall2);

        var walls;
        // Create maze structure
        if(dataSent === true){
            walls = wallPositions;
        } else {
            walls = [
                {
                    "objPosX": 34,
                    "objPosY": 27,
                    "width": 217,
                    "height": 0,
                    "type": 0
                },
                {
                    "objPosX": 284.5,
                    "objPosY": 27,
                    "width": 256,
                    "height": 0,
                    "type": 0
                },
                {
                    "objPosX": 540.5,
                    "objPosY": 27,
                    "width": 0,
                    "height": 311,
                    "type": 1
                },
                {
                    "objPosX": 540.5,
                    "objPosY": 338,
                    "width": -232,
                    "height": 0,
                    "type": 0
                },
                {
                    "objPosX": 277.5,
                    "objPosY": 337,
                    "width": -243,
                    "height": 0,
                    "type": 0
                },
                {
                    "objPosX": 33.5,
                    "objPosY": 337,
                    "width": 0,
                    "height": -311,
                    "type": 1
                },
                {
                    "objPosX": 322.5,
                    "objPosY": 27,
                    "width": 0,
                    "height": 28,
                    "type": 1
                },
                {
                    "objPosX": 322.5,
                    "objPosY": 54,
                    "width": 158,
                    "height": 0,
                    "type": 0
                },
                {
                    "objPosX": 540.5,
                    "objPosY": 84,
                    "width": -60,
                    "height": 0,
                    "type": 0
                },
                {
                    "objPosX": 480.5,
                    "objPosY": 115,
                    "width": -158,
                    "height": 0,
                    "type": 0
                },
                {
                    "objPosX": 322.5,
                    "objPosY": 114,
                    "width": 0,
                    "height": -31,
                    "type": 1
                },
                {
                    "objPosX": 281.5,
                    "objPosY": 82,
                    "width": 41,
                    "height": 0,
                    "type": 0
                },
                {
                    "objPosX": 282,
                    "objPosY": 54,
                    "width": -30,
                    "height": 0,
                    "type": 0
                },
                {
                    "objPosX": 251.5,
                    "objPosY": 53,
                    "width": 0,
                    "height": 91,
                    "type": 1
                },
                {
                    "objPosX": 251.5,
                    "objPosY": 144,
                    "width": 71,
                    "height": 0,
                    "type": 0
                },
                {
                    "objPosX": 322.5,
                    "objPosY": 144,
                    "width": 0,
                    "height": 67,
                    "type": 1
                },
                {
                    "objPosX": 540.5,
                    "objPosY": 212,
                    "width": -189,
                    "height": 0,
                    "type": 0
                },
                {
                    "objPosX": 350.5,
                    "objPosY": 211,
                    "width": 0,
                    "height": -96,
                    "type": 1
                },
                {
                    "objPosX": 380.5,
                    "objPosY": 115,
                    "width": 0,
                    "height": -33,
                    "type": 1
                },
                {
                    "objPosX": 350.5,
                    "objPosY": 54,
                    "width": 0,
                    "height": 27,
                    "type": 1
                },
                {
                    "objPosX": 423.5,
                    "objPosY": 114,
                    "width": 0,
                    "height": -33,
                    "type": 1
                },
                {
                    "objPosX": 540.5,
                    "objPosY": 140,
                    "width": -160,
                    "height": 0,
                    "type": 0
                },
                {
                    "objPosX": 380.5,
                    "objPosY": 140,
                    "width": 0,
                    "height": 40,
                    "type": 1
                },
                {
                    "objPosX": 380.5,
                    "objPosY": 180,
                    "width": 100,
                    "height": 0,
                    "type": 0
                },
                {
                    "objPosX": 283.5,
                    "objPosY": 115,
                    "width": 0,
                    "height": 96,
                    "type": 1
                },
                {
                    "objPosX": 283.5,
                    "objPosY": 211,
                    "width": -32,
                    "height": 0,
                    "type": 0
                },
                {
                    "objPosX": 250.5,
                    "objPosY": 211,
                    "width": 0,
                    "height": 28,
                    "type": 1
                },
                {
                    "objPosX": 250.5,
                    "objPosY": 239,
                    "width": 256,
                    "height": 0,
                    "type": 0
                },
                {
                    "objPosX": 506.5,
                    "objPosY": 338,
                    "width": 0,
                    "height": -74,
                    "type": 1
                },
                {
                    "objPosX": 477.5,
                    "objPosY": 239,
                    "width": 0,
                    "height": 70,
                    "type": 1
                },
                {
                    "objPosX": 477.5,
                    "objPosY": 309,
                    "width": -36,
                    "height": 0,
                    "type": 0
                },
                {
                    "objPosX": 440.5,
                    "objPosY": 309,
                    "width": 0,
                    "height": 28,
                    "type": 1
                },
                {
                    "objPosX": 279,
                    "objPosY": 337,
                    "width": 0,
                    "height": -29,
                    "type": 1
                },
                {
                    "objPosX": 277.5,
                    "objPosY": 308,
                    "width": 30,
                    "height": 0,
                    "type": 0
                },
                {
                    "objPosX": 308.5,
                    "objPosY": 307,
                    "width": 0,
                    "height": -27,
                    "type": 1
                },
                {
                    "objPosX": 308.5,
                    "objPosY": 278,
                    "width": 132,
                    "height": 0,
                    "type": 0
                },
                {
                    "objPosX": 410.5,
                    "objPosY": 337,
                    "width": 0,
                    "height": -29,
                    "type": 1
                },
                {
                    "objPosX": 410.5,
                    "objPosY": 308,
                    "width": -72,
                    "height": 0,
                    "type": 0
                },
                {
                    "objPosX": 243.5,
                    "objPosY": 336,
                    "width": 0,
                    "height": -28,
                    "type": 1
                },
                {
                    "objPosX": 308.5,
                    "objPosY": 278,
                    "width": -90,
                    "height": 0,
                    "type": 0
                },
                {
                    "objPosX": 218.5,
                    "objPosY": 277,
                    "width": 0,
                    "height": -134,
                    "type": 1
                },
                {
                    "objPosX": 283.5,
                    "objPosY": 174,
                    "width": -33,
                    "height": 0,
                    "type": 0
                },
                {
                    "objPosX": 33.5,
                    "objPosY": 277,
                    "width": 31,
                    "height": 0,
                    "type": 0
                },
                {
                    "objPosX": 64.5,
                    "objPosY": 277,
                    "width": 0,
                    "height": 26,
                    "type": 1
                },
                {
                    "objPosX": 218.5,
                    "objPosY": 173,
                    "width": -157,
                    "height": 0,
                    "type": 0
                },
                {
                    "objPosX": 63,
                    "objPosY": 172,
                    "width": 0,
                    "height": -30,
                    "type": 1
                },
                {
                    "objPosX": 251.5,
                    "objPosY": 111,
                    "width": -116,
                    "height": 0,
                    "type": 0
                },
                {
                    "objPosX": 135.5,
                    "objPosY": 139,
                    "width": 0,
                    "height": -29,
                    "type": 1
                },
                {
                    "objPosX": 135.5,
                    "objPosY": 110,
                    "width": 0,
                    "height": -28,
                    "type": 1
                },
                {
                    "objPosX": 199.5,
                    "objPosY": 81,
                    "width": -138,
                    "height": 0,
                    "type": 0
                },
                {
                    "objPosX": 63,
                    "objPosY": 80,
                    "width": 0,
                    "height": -30,
                    "type": 1
                },
                {
                    "objPosX": 62,
                    "objPosY": 50,
                    "width": 72,
                    "height": 0,
                    "type": 0
                },
                {
                    "objPosX": 200,
                    "objPosY": 80,
                    "width": 0,
                    "height": -31,
                    "type": 1
                },
                {
                    "objPosX": 33.5,
                    "objPosY": 223,
                    "width": 67,
                    "height": 0,
                    "type": 0
                },
                {
                    "objPosX": 219.5,
                    "objPosY": 250,
                    "width": -117,
                    "height": 0,
                    "type": 0
                },
                {
                    "objPosX": 158.5,
                    "objPosY": 249,
                    "width": 0,
                    "height": 53,
                    "type": 1
                },
                {
                    "objPosX": 158.5,
                    "objPosY": 302,
                    "width": 59,
                    "height": 0,
                    "type": 0
                },
                {
                    "objPosX": 159.5,
                    "objPosY": 173,
                    "width": 0,
                    "height": 49,
                    "type": 1
                },
                {
                    "objPosX": 159.5,
                    "objPosY": 222,
                    "width": 29,
                    "height": 0,
                    "type": 0
                },
                {
                    "objPosX": 188.5,
                    "objPosY": 222,
                    "width": 0,
                    "height": -25,
                    "type": 1
                }
            ]
        }

        

        walls.forEach(wall => {
            var startPos;
            if(wall.type === 0){
                let width = Math.abs(wall.width);
                if(Math.sign(wall.width) === 1){                    
                    startPos = wall.width/2 + wall.objPosX;
                } else {
                    startPos = wall.objPosX - Math.abs(wall.width)/2;
                }
                const wallLine = this.add.line(startPos, wall.objPosY, 0, 0, width, wall.height, 0xffffff);
                maze.add(wallLine);
            } else if(wall.type === 1){
                let height = Math.abs(wall.height);
                if(Math.sign(wall.height) === 1){
                    startPos = wall.height/2 + wall.objPosY;
                } else {
                    startPos = wall.objPosY - Math.abs(wall.height) / 2;  // Corrected calculation
                    console.log(height);
                    console.log(startPos);
                    console.log(wall.objPosY);
                    console.log(wall.height);
                }
                const wallLine = this.add.line(wall.objPosX, startPos, 0, 0, wall.width, height, 0xffffff);
                maze.add(wallLine);
            }
        });

        // mouse
        mouse = this.physics.add.sprite(270, 10, 'mouse');
        mouse.setCollideWorldBounds(true);
        mouse.setSize(16, 16); 
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
  }, [wallPositions, dataSent]); // Empty dependency array ensures useEffect runs only once

  return <div id="game-container"></div>;
};

export default Maze;
