import React, { useEffect } from 'react';
import Phaser from 'phaser';
import './Game.css'

const Game = ({wallPositions, dataSent}) => {
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
// Create game elements
    function create() {
        // Create game elements here
        const parentWidth = this.game.config.width;
        const parentHeight = this.game.config.height;

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
            console.log(wallPositions);
            console.log(parentWidth, parentHeight);
        } else {
            walls = [
                {
                    objPosX: 30.5,
                    objPosY: 23,
                    width: 245,
                    height: 0,
                    type: 0
                },
                {
                    objPosX: 31,
                    objPosY: 338,
                    width: 0,
                    height: -315,
                    type: 1
                },
                {
                    objPosX: 325.5,
                    objPosY: 22,
                    width: 210,
                    height: 0,
                    type: 0
                },
                {
                    objPosX: 535.5,
                    objPosY: 21,
                    width: 0,
                    height: 319,
                    type: 1
                },
                {
                    objPosX: 535.5,
                    objPosY: 339,
                    width: -259,
                    height: 0,
                    type: 0
                },
                {
                    objPosX: 231.5,
                    objPosY: 338,
                    width: -201,
                    height: 0,
                    type: 0
                },
                {
                    objPosX: 368,
                    objPosY: 22,
                    width: 0,
                    height: 38,
                    type: 1
                },
                {
                    objPosX: 364.5,
                    objPosY: 59,
                    width: 130,
                    height: 0,
                    type: 0
                },
                {
                    objPosX: 108.5,
                    objPosY: 61,
                    width: -43,
                    height: 0,
                    type: 0
                },
                {
                    objPosX: 64.5,
                    objPosY: 60,
                    width: 0,
                    height: 34,
                    type: 1
                },
                {
                    objPosX: 139.5,
                    objPosY: 61,
                    width: 0,
                    height: 33,
                    type: 1
                },
                {
                    objPosX: 64.5,
                    objPosY: 94,
                    width: 75,
                    height: 0,
                    type: 0
                },
                {
                    objPosX: 108.5,
                    objPosY: 93,
                    width: 0,
                    height: 49,
                    type: 1
                },
                {
                    objPosX: 30.5,
                    objPosY: 125,
                    width: 45,
                    height: 0,
                    type: 0
                },
                {
                    objPosX: 63.5,
                    objPosY: 158,
                    width: 0,
                    height: 26,
                    type: 1
                },
                {
                    objPosX: 63.5,
                    objPosY: 184,
                    width: 99,
                    height: 0,
                    type: 0
                },
                {
                    objPosX: 141,
                    objPosY: 142,
                    width: 0,
                    height: 127,
                    type: 1
                },
                {
                    objPosX: 141.5,
                    objPosY: 269,
                    width: 161,
                    height: 0,
                    type: 0
                },
                {
                    objPosX: 230.5,
                    objPosY: 337,
                    width: 0,
                    height: -35,
                    type: 1
                },
                {
                    objPosX: 230.5,
                    objPosY: 300,
                    width: 46,
                    height: 0,
                    type: 0
                },
                {
                    objPosX: 275.5,
                    objPosY: 300,
                    width: 0,
                    height: -31,
                    type: 1
                },
                {
                    objPosX: 302.5,
                    objPosY: 339,
                    width: 0,
                    height: -39,
                    type: 1
                },
                {
                    objPosX: 302.5,
                    objPosY: 300,
                    width: 42,
                    height: 0,
                    type: 0
                },
                {
                    objPosX: 344.5,
                    objPosY: 300,
                    width: 0,
                    height: -66,
                    type: 1
                },
                {
                    objPosX: 394.5,
                    objPosY: 232,
                    width: -218,
                    height: 0,
                    type: 0
                },
                {
                    objPosX: 175.5,
                    objPosY: 232,
                    width: 0,
                    height: -28,
                    type: 1
                },
                {
                    objPosX: 175.5,
                    objPosY: 203,
                    width: 0,
                    height: -2,
                    type: 1
                },
                {
                    objPosX: 175.5,
                    objPosY: 200,
                    width: 63,
                    height: 0,
                    type: 0
                },
                {
                    objPosX: 238.5,
                    objPosY: 200,
                    width: 0,
                    height: -86,
                    type: 1
                },
                {
                    objPosX: 108.5,
                    objPosY: 116,
                    width: 0,
                    height: 2,
                    type: 1
                },
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
        mouse = this.physics.add.sprite(16, 16, 'mouse');
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

export default Game;
