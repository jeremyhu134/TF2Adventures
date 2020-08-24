class Mission3Scene extends Phaser.Scene {
    constructor() {
		super({ key: 'Mission3Scene' })
	}
    preload(){
        //backgrounds
        this.load.image('invisibleplatform','tf2images/invisibleplatform.png');
        this.load.image('hightowerbg','tf2images/hightowerbg.png');
        this.load.image('dialoguebox','tf2images/dialoguebox.png');
        this.load.image('arrowkey','tf2images/arrowkey.png');
        this.load.image('shootbutton','tf2images/shoot.png');
        //audio
        this.load.audio('pistol_shoot', 'tf2images/pistol_shoot.mp3');
        this.load.audio('rocketlauncher_shoot', 'tf2images/rocketlauncher_shoot.mp3');
        this.load.audio('explode', 'tf2images/explode.mp3');
        this.load.audio('snowymusic', 'tf2images/snowymusic.mp3');
        this.load.audio('scout_pain', 'tf2images/scout_pain.mp3');
        this.load.audio('robosoldier_pain', 'tf2images/robosoldier_pain.mp3');
        this.load.audio('robosoldier_taunt', 'tf2images/robosoldier_taunt.mp3');
        this.load.audio('redscout_taunt', 'tf2images/redscout_taunt.mp3');
        //characters
        this.load.spritesheet('redscout','tf2images/RedScout.png',{frameWidth: 45,frameHeight:65});
        this.load.spritesheet('robosoldier','tf2images/RoboSoldier.png',{frameWidth: 60,frameHeight:65});
        //bullets
        this.load.image('bullet','tf2images/bullet.png');
        this.load.image('rocket','tf2images/rocket.png');
    }
    create(){
        gameState.mobilecontrols = function(scene){
            scene.add.text(20, 510, `MobileControls :`, { fontSize: '15px', fill: '#FFFFFF' });
            gameState.jumpbutton = scene.add.image(180,500, 'arrowkey').setOrigin(0,0).setInteractive(); 
            gameState.shootbutton = scene.add.image(250,500, 'shootbutton').setOrigin(0,0).setInteractive(); 
            gameState.jumpbutton.on('pointerdown', () => {
                if(gameState.heroshooting === false){
                    if(!gameState.hero.body.touching.down){
                        gameState.hero.anims.play('scoutjump',true);
                    }
                    else {
                        gameState.hero.anims.play('scoutidle',true);
                    }
                    gameState.hero.body.checkCollision.down = true;
                    if(gameState.hero.body.touching.down && gameState.herojumpcooldown === false){
                        gameState.hero.setVelocityY(-500);
                        gameState.herojumpcooldown = true;
                        scene.time.addEvent({
                            delay: 1800,
                            callback: ()=>{
                                gameState.herojumpcooldown = false;
                            },  
                            startAt: 0,
                            timeScale: 1
                        }); 
                    }
                }
            });
            gameState.shootbutton.on('pointerdown', () => {
                if(gameState.heroshooting === false && gameState.hero.body.touching.down){
                    gameState.heroshooting = true;
                    gameState.hero.anims.play('scoutshoot',true);
                    scene.time.addEvent({
                        delay: 500,
                        callback: ()=>{
                            gameState.shootpistol.play();
                            gameState.herobullets.create(gameState.hero.x+30, gameState.hero.y, 'bullet').setGravityX(2000).setGravityY(-1000);
                        },  
                        startAt: 0,
                        timeScale: 1
                    }); 
                    scene.time.addEvent({
                        delay: 1000,
                        callback: ()=>{
                            gameState.heroshooting = false;
                        },  
                        startAt: 0,
                        timeScale: 1
                    }); 
                }
            });
        }
        gameState.playing = true;
        gameState.cursors = this.input.keyboard.createCursorKeys();
        gameState.keys = this.input.keyboard.addKeys('W,S,A,D,R,SPACE,SHIFT');
        gameState.dialogueover = false;
        this.add.image(0,0,'hightowerbg').setOrigin(0,0);
        gameState.dialogueswitch = 1;
        gameState.dialoguenumber = 0;
        gameState.redscoutdialogue = ['Damn, this one is actually wearing a tincan.','Hey! Don\'t talk about my mama!','That\'s it! Get over here!'];
        gameState.robosoldierdialogue = ['You will be sent home to your mama in a box!','*LAUGHTER* Come and get it maggot!'];
        gameState.dialoguebox = this.add.image(50,400,'dialoguebox').setOrigin(0,0);
        gameState.scouttext = this.add.text(65, 445, `RedScout = ${gameState.redscoutdialogue[gameState.dialoguenumber]}`, { fontSize: '15px', fill: '#00000' });
        gameState.dialoguecooldown = 50;
        gameState.robosoldiertext = this.add.text(65, 445, ``, { fontSize: '15px', fill: '#00000' });
        this.time.addEvent({
            delay: 1,
            callback: ()=>{
                gameState.dialoguecooldown -= 1;
            },  
            startAt: 0,
            timeScale: 1,
            repeat: -1
        }); 
        gameState.dialogue = function(scene){
            scene.input.on('pointerdown', () => {
                if(gameState.dialoguecooldown <= 0 && gameState.dialogueover === false){
                    if(gameState.dialogueswitch === 1){
                        gameState.dialogueswitch = 2;
                    } 
                    else if(gameState.dialogueswitch === 2){
                        gameState.dialoguenumber += 1;
                        gameState.dialogueswitch = 1;
                    } 
                    if(gameState.dialogueswitch === 1){
                        gameState.robosoldiertext.destroy();
                        gameState.scouttext = scene.add.text(65, 445, `RedScout = ${gameState.redscoutdialogue[gameState.dialoguenumber]}`, { fontSize: '15px', fill: '#00000' }); 
                    }
                    else if(gameState.dialogueswitch === 2){
                        gameState.scouttext.destroy();
                        gameState.robosoldiertext = scene.add.text(65, 445, `RoboSoldier = ${gameState.robosoldierdialogue[gameState.dialoguenumber]}`, { fontSize: '15px', fill: '#00000' });
                    }
                    gameState.dialoguecooldown = 50;
                }
            });
            if(gameState.dialoguenumber === 2 && gameState.dialogueswitch === 2){
                gameState.dialogueover = true;
                gameState.scouttext.destroy();
                gameState.robosoldiertext.destroy();
                gameState.dialoguebox.destroy();
                gameState.herohealthtext = scene.add.text(180, 250, `${gameState.herohealth}/20`, { fontSize: ' bold 20px', fill: '#00000'});
                gameState.enemyherohealthtext = scene.add.text(560, 250, `${gameState.enemyherohealth}/100`, { fontSize: 'bold 20px', fill: '#00000' });
                gameState.mobilecontrols(scene);
            }
        }
        gameState.snowymusic = this.sound.add('snowymusic');
        gameState.explode = this.sound.add('explode');
        gameState.invisibleplatform = this.physics.add.staticGroup();
        gameState.invisibleplatform.create(0,355,'invisibleplatform').setOrigin(0,0).refreshBody(0);
        gameState.loopSound = {
            loop: true,
            volume: 1
        }
        gameState.snowymusic.play(gameState.loopSound);
        //animations
        this.anims.create({
            key: 'scoutidle',
            repeat: -1,
            frameRate: 5,
            frames:this.anims.generateFrameNames('redscout',{start: 0,end: 3})
        });
        this.anims.create({
            key: 'scoutjump',
            repeat: -1,
            frameRate: 5,
            frames:this.anims.generateFrameNames('redscout',{start: 4,end: 4})
        });
        this.anims.create({
            key: 'scoutshoot',
            frameRate: 5,
            frames:this.anims.generateFrameNames('redscout',{start: 5,end: 8})
        });
        this.anims.create({
            key: 'robosoldieridle',
            repeat: -1,
            frameRate: 5,
            frames:this.anims.generateFrameNames('robosoldier',{start: 0,end: 3})
        });
        this.anims.create({
            key: 'robosoldiershoot',
            repeat: -1,
            frameRate: 6,
            frames:this.anims.generateFrameNames('robosoldier',{start: 4,end: 10})
        });
        //fighter
        gameState.hero = this.physics.add.sprite(250,323,'redscout');
        gameState.scoutpain = this.sound.add('scout_pain');
        gameState.scouttaunt = this.sound.add('redscout_taunt');
        gameState.herohealth = 20;
        gameState.herobullets = this.physics.add.group();
        gameState.herobullets.outOfBoundsKill = true;
        gameState.heroshooting = false;
        gameState.herojumpcooldown = false;
        this.physics.add.collider(gameState.hero, gameState.invisibleplatform);
        gameState.hero.anims.play('scoutidle',true);
        gameState.shootpistol = this.sound.add('pistol_shoot');
        gameState.shootrocketlauncher = this.sound.add('rocketlauncher_shoot');
        gameState.scoutmovement = function(scene){
            if(gameState.heroshooting === false){
                if(!gameState.hero.body.touching.down){
                    gameState.hero.anims.play('scoutjump',true);
                }
                else {
                    gameState.hero.anims.play('scoutidle',true);
                }
                gameState.hero.body.checkCollision.down = true;
                if(gameState.cursors.up.isDown && gameState.hero.body.touching.down && gameState.herojumpcooldown === false){
                    gameState.hero.setVelocityY(-500);
                    gameState.herojumpcooldown = true;
                    scene.time.addEvent({
                        delay: 900,
                        callback: ()=>{
                            gameState.herojumpcooldown = false;
                        },  
                        startAt: 0,
                        timeScale: 1
                    }); 
                }
            }
            if(gameState.keys.SPACE.isDown && gameState.heroshooting === false && gameState.hero.body.touching.down){
                gameState.heroshooting = true;
                gameState.hero.anims.play('scoutshoot',true);
                scene.time.addEvent({
                    delay: 500,
                    callback: ()=>{
                        gameState.shootpistol.play();
                        gameState.herobullets.create(gameState.hero.x+30, gameState.hero.y, 'bullet').setGravityX(2000).setGravityY(-1000);
                    },  
                    startAt: 0,
                    timeScale: 1
                }); 
                scene.time.addEvent({
                    delay: 1000,
                    callback: ()=>{
                        gameState.heroshooting = false;
                    },  
                    startAt: 0,
                    timeScale: 1
                }); 
            }
        }
        //robodemoman
        gameState.enemyhero = this.physics.add.sprite(550,323,'robosoldier');
        gameState.robosoldierpain = this.sound.add('robosoldier_pain');
        gameState.robosoldiertaunt = this.sound.add('robosoldier_taunt');
        gameState.enemyherohealth = 100;
        gameState.enemyherobullets = this.physics.add.group();
        gameState.enemyherobullets.outOfBoundsKill = true;
        gameState.enemyheroshooting = false;
        this.physics.add.collider(gameState.enemyhero, gameState.invisibleplatform);
        gameState.enemyhero.anims.play('robosoldieridle',true);
        gameState.robosoldiermovement = function(scene){
            if(gameState.enemyheroshooting === false){
                console.log('lol');
                gameState.enemyhero.anims.play('robosoldieridle',true);
                gameState.hero.body.checkCollision.down = true;
            }
            if(gameState.enemyheroshooting === false){
                gameState.enemyheroshooting = true;
                scene.time.addEvent({
                    delay: 4500,
                    callback: ()=>{
                        scene.time.addEvent({
                            delay: 800,
                            callback: ()=>{
                                gameState.enemyhero.anims.play('robosoldiershoot',true);
                                scene.time.addEvent({
                                    delay: 400,
                                    callback: ()=>{
                                        if(gameState.enemyherohealth > 0){
                                            var random = Math.ceil(Math.random()*2);
                                            if(random == 1){
                                                gameState.shootrocketlauncher.play();
                                                gameState.enemyherobullets = scene.physics.add.sprite(gameState.enemyhero.x,gameState.enemyhero.y,`rocket`).setGravityY(-1000);
                                                scene.physics.moveTo(gameState.enemyherobullets,gameState.hero.x, gameState.hero.y,300); 
                                            }
                                            else {
                                                gameState.shootrocketlauncher.play();
                                                gameState.enemyherobullets = scene.physics.add.sprite(gameState.enemyhero.x,gameState.enemyhero.y,`rocket`).setGravityY(-1000);
                                                scene.physics.moveTo(gameState.enemyherobullets,gameState.hero.x, 232,300); 
                                            }
                                        }
                                    },  
                                    startAt: 0,
                                    timeScale: 1
                                }); 
                            },  
                            startAt: 0,
                            timeScale: 1,
                            repeat: 3
                        }); 
                        scene.time.addEvent({
                            delay: 4000,
                            callback: ()=>{
                                gameState.enemyheroshooting = false;
                            },  
                            startAt: 0,
                            timeScale: 1
                        }); 
                    },  
                    startAt: 0,
                    timeScale: 1
                });
            }
        }
    }
    
    update(){
        this.physics.add.overlap(gameState.enemyherobullets, gameState.hero,(ammo, hero)=>{
            gameState.scoutpain.play();
            gameState.explode.play();
            ammo.destroy();
            gameState.herohealth -= 6;
            gameState.herohealthtext.destroy();
            gameState.herohealthtext = this.add.text(180, 250, `${gameState.herohealth}/20`, { fontSize: ' bold 20px', fill: '#00000'});
            if(gameState.herohealth <= 0){
                gameState.herohealthtext.destroy();
                gameState.herohealthtext = this.add.text(180, 250, `0/20`, { fontSize: ' bold 20px', fill: '#00000'});
                this.physics.pause();
                gameState.playing = false;
                gameState.snowymusic.setMute(true);
                gameState.robosoldiertaunt.play();
                gameState.status = 'defeat';
                this.time.addEvent({
                    delay: 3000,
                    callback: ()=>{
                        this.scene.start('DandVScene');
                    },  
                    startAt: 0,
                    timeScale: 1
                });
            }
        });
        this.physics.add.overlap(gameState.herobullets, gameState.enemyhero,(ammo, hero)=>{
            gameState.robosoldierpain.play();
            hero.destroy();
            gameState.enemyherohealth -= 5;
            gameState.enemyherohealthtext.destroy();
            gameState.enemyherohealthtext = this.add.text(560, 250, `${gameState.enemyherohealth}/100`, { fontSize: 'bold 20px', fill: '#00000' });
            if(gameState.enemyherohealth <= 0){
                gameState.enemyherohealthtext.destroy();
                gameState.enemyherohealthtext = this.add.text(560, 250, `0/75`, { fontSize: 'bold 20px', fill: '#00000' });
                this.physics.pause();
                gameState.missionnumber = 4;
                localStorage.missionnumber = gameState.missionnumber;
                gameState.playing = false;
                gameState.snowymusic.setMute(true);
                gameState.scouttaunt.play();
                gameState.status = 'victory';
                this.time.addEvent({
                    delay: 3000,
                    callback: ()=>{
                        this.scene.start('DandVScene');
                    },  
                    startAt: 0,
                    timeScale: 1
                });
            }
        });
        if(gameState.dialogueover === true){
            if(gameState.playing === true){
                gameState.scoutmovement(this); 
                gameState.robosoldiermovement(this);
            }
            else{
                
            }
        }
        else {
            gameState.dialogue(this);
        }
    }
}





