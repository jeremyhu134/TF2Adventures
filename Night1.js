    var ldoorSprite;
    var llightSprite;
            
    var rdoorSprite;
    var rlightSprite;

    var power = 100;

    var AM = 12;

    var ldoorOpen = true;
    var rdoorOpen = true;

    var llightOn = false;
    var rlightOn = false;

    var cameraOn = false;

    var second = 10;
    var secondcons = 10;

    var powerlevel = 1;

    var camPOS = 1;

    var bonniePOS = 7;  
    var bonniecooldown = 0;
    var chicaPOS = 7;
    var chicacooldown = 0;
    var freddyPOS = 7;
    var freddycooldown = 0;
    var foxyPOS = 7;
    var foxycooldown = 0;
    
    function reset(){
        second = 10;
        secondcons = 10;
        powerlevel = 1;
        camPOS = 1;
        AM = 12;
        power = 100;
        cameraOn = false;
        ldoorOpen = true;
        rdoorOpen = true;
        llightOn = false;
        rlightOn = false;
    }

    class camera extends Phaser.Scene {
        constructor() {
            super({ key: 'camera' })
        }
        preload(){
            this.load.audio('camsound','audio/nightintro.mp3');
            this.load.audio('static','audio/static.mp3');
            this.load.image('bg','fnafpicture/blackscreen.png');
            this.load.image('static','fnafpicture/static.png');
            this.load.image('CAMSlayout','fnafpicture/CAMSlayout.png');
            this.load.image('CAM2B','fnafpicture/CAM2B.png');
            this.load.image('CAM2Bc','fnafpicture/CAM2Bc.png');
            this.load.image('bonnieCAM2Bc','fnafpicture/bonnieCAM2Bc.png');
            this.load.image('CAM2A','fnafpicture/CAM2A.png');
            this.load.image('CAM2Ac','fnafpicture/CAM2Ac.png');
            this.load.image('bonnieCAM2Ac','fnafpicture/bonnieCAM2Ac.png');
            this.load.image('CAM3','fnafpicture/CAM3.png');
            this.load.image('CAM1C','fnafpicture/CAM1C.png');
            this.load.image('CAM5','fnafpicture/CAM5.png');
            this.load.image('CAM5c','fnafpicture/CAM5c.png');
            this.load.image('bonnieCAM5c','fnafpicture/bonnieCAM5c.png');
            this.load.image('CAM1B','fnafpicture/CAM1B.png');   
            this.load.image('CAM1Bc','fnafpicture/CAM1Bc.png');
            this.load.image('bonnieCAM1Bc','fnafpicture/bonnieCAM1Bc.png');
            this.load.image('chicaCAM1Bc','fnafpicture/chicaCAM1Bc.png');
            this.load.image('bonniechicaCAM1Bc','fnafpicture/bonniechicaCAM1Bc.png');
            this.load.image('CAM1A','fnafpicture/CAM1A.png');
            this.load.image('CAM1Ac','fnafpicture/CAM1Ac.png');
            this.load.image('bonnieCAM1Ac','fnafpicture/bonnieCAM1Ac.png');
            this.load.image('chicaCAM1Ac','fnafpicture/chicaCAM1Ac.png');
            this.load.image('bonniechicaCAM1Ac','fnafpicture/bonniechicaCAM1Ac.png');
            this.load.image('CAM7','fnafpicture/CAM7.png');
            this.load.image('CAM7c','fnafpicture/CAM7c.png');
            this.load.image('chicaCAM7c','fnafpicture/chicaCAM7c.png');
            this.load.image('CAM6','fnafpicture/CAM6.png');
            this.load.image('CAM6c','fnafpicture/CAM6c.png');
            this.load.image('CAM4A','fnafpicture/CAM4A.png');
            this.load.image('CAM4Ac','fnafpicture/CAM4Ac.png');
            this.load.image('chicaCAM4Ac','fnafpicture/chicaCAM4Ac.png');
            this.load.image('CAM4B','fnafpicture/CAM4B.png');
            this.load.image('CAM4Bc','fnafpicture/CAM4Bc.png');
            this.load.image('chicaCAM4Bc','fnafpicture/chicaCAM4Bc.png');
            this.load.image('CAM3c','fnafpicture/CAM3c.png');
            this.load.image('bonnieCAM3c','fnafpicture/bonnieCAM3c.png');
            this.load.image('CAM1Cc','fnafpicture/CAM1Cc.png');
        }
        create(){
            gameState.camsound = this.sound.add('camsound');
            gameState.static = this.sound.add('static');
            //background
            gameState.camerabg = this.add.sprite(0,0,'CAM2Bc').setOrigin(0,0).setDepth(0).setScale(10);
            //cameralayout
            this.scene.bringToTop('camera');
            gameState.CAMSlayout = this.add.sprite(650,140,'CAMSlayout').setOrigin(0,0).setDepth(1);
            
            gameState.CAMS2B = this.add.sprite(750,430,'CAM2B').setOrigin(0,0).setInteractive().setDepth(1);
            gameState.CAMS2A = this.add.sprite(750,385,'CAM2A').setOrigin(0,0).setInteractive().setDepth(1);
            gameState.CAMS3 = this.add.sprite(650,365,'CAM3').setOrigin(0,0).setInteractive().setDepth(1);
            gameState.CAMS1C = this.add.sprite(680,270,'CAM1C').setOrigin(0,0).setInteractive().setDepth(1);
            gameState.CAMS5 = this.add.sprite(600,200,'CAM5').setOrigin(0,0).setInteractive().setDepth(1);
            gameState.CAMS1B = this.add.sprite(720,170,'CAM1B').setOrigin(0,0).setInteractive().setDepth(1);
            gameState.CAMS1A = this.add.sprite(780,110,'CAM1A').setOrigin(0,0).setInteractive().setDepth(1);
            gameState.CAMS7 = this.add.sprite(1090,180,'CAM7').setOrigin(0,0).setInteractive().setDepth(1);
            gameState.CAMS6 = this.add.sprite(1050,320,'CAM6').setOrigin(0,0).setInteractive().setDepth(1);
            gameState.CAMS4A = this.add.sprite(950,385,'CAM4A').setOrigin(0,0).setInteractive().setDepth(1);
            gameState.CAMS4B = this.add.sprite(950,430,'CAM4B').setOrigin(0,0).setInteractive().setDepth(1);
            gameState.CAMS2B.on('pointerdown', () => {
                gameState.static.pause();
                gameState.camsound.play();
                camPOS = 1;
                gameState.camerabg.destroy();
                gameState.checkcam(this);
            });
            gameState.CAMS2A.on('pointerdown', () => {
                gameState.static.pause();
                gameState.camsound.play();
                camPOS = 2;
                gameState.camerabg.destroy();
                gameState.checkcam(this);
            });
            gameState.CAMS3.on('pointerdown', () => {
                gameState.static.pause();
                gameState.camsound.play();
                camPOS = 3;
                gameState.camerabg.destroy();
                gameState.checkcam(this);
            });
            gameState.CAMS1C.on('pointerdown', () => {
                gameState.static.pause();
                gameState.camsound.play();
                camPOS = 4;
                gameState.camerabg.destroy();
                gameState.camerabg = this.add.sprite(0,0,'CAM1Cc').setOrigin(0,0).setDepth(0).setScale(10);
            });
            gameState.CAMS5.on('pointerdown', () => {
                gameState.static.pause();
                gameState.camsound.play();
                camPOS = 5;
                gameState.camerabg.destroy();
                gameState.checkcam(this);
            });
            gameState.CAMS1B.on('pointerdown', () => {
                gameState.static.pause();
                gameState.camsound.play();
                camPOS = 6;
                gameState.camerabg.destroy();
                gameState.checkcam(this);
            });
            gameState.CAMS1A.on('pointerdown', () => {
                gameState.static.pause();
                console.log(bonniecooldown);
                gameState.camsound.play();
                camPOS = 7;
                gameState.camerabg.destroy();
                gameState.checkcam(this);
            });
            gameState.CAMS7.on('pointerdown', () => {
                gameState.static.pause();
                gameState.camsound.play();
                camPOS = 8;
                gameState.camerabg.destroy();
                gameState.checkcam(this);
            });
            gameState.CAMS6.on('pointerdown', () => {
                gameState.static.pause();
                gameState.camsound.play();
                camPOS = 9;
                gameState.camerabg.destroy();
                gameState.camerabg = this.add.sprite(0,0,'CAM6c').setOrigin(0,0).setDepth(0);
            });
            gameState.CAMS4A.on('pointerdown', () => {
                gameState.static.pause();
                gameState.camsound.play();
                camPOS = 10;
                gameState.camerabg.destroy();
                gameState.checkcam(this);
            });
            gameState.CAMS4B.on('pointerdown', () => {
                gameState.static.pause();
                gameState.camsound.play();
                camPOS = 11;
                gameState.camerabg.destroy();
                gameState.checkcam(this);
            });
        }
        update(){
            if(bonniecooldown <= 10){
                if(camPOS == bonniePOS){
                    gameState.static.play();
                    gameState.camerabg.destroy();
                    gameState.camerabg = this.add.sprite(0,0,'static').setOrigin(0,0).setDepth(0).setScale(10);
                }
                this.time.addEvent({
                    delay: 500,
                    callback: ()=>{
                        if(camPOS == bonniePOS){
                            gameState.static.play();
                            gameState.camerabg.destroy();
                            gameState.camerabg = this.add.sprite(0,0,'static').setOrigin(0,0).setDepth(0).setScale(10);
                        }
                    },
                    startAt: 0,
                    timeScale: 1,
                });
            }
            if(chicacooldown <= 10){
                if(camPOS == chicaPOS){
                    gameState.static.play();
                    gameState.camerabg.destroy();
                    gameState.camerabg = this.add.sprite(0,0,'static').setOrigin(0,0).setDepth(0).setScale(10);
                }
                this.time.addEvent({
                    delay: 500,
                    callback: ()=>{
                        if(camPOS == chicaPOS){
                            gameState.static.play();
                            gameState.camerabg.destroy();
                            gameState.camerabg = this.add.sprite(0,0,'static').setOrigin(0,0).setDepth(0).setScale(10);
                        }
                    },
                    startAt: 0,
                    timeScale: 1,
                });
            }
        }
    }

    class Night1 extends Phaser.Scene {
        constructor() {
            super({ key: 'Night1' })
        }
        preload(){
            this.load.image('bg','fnafpicture/blackscreen.png');
            this.load.image('Office','fnafpicture/Office.png');
            this.load.spritesheet('ldoor','fnafpicture/ldoor.png',{frameWidth: 120,frameHeight:393});
            this.load.spritesheet('bonnieJumpscare','fnafpicture/bonnieJumpscare.png',{frameWidth: 240,frameHeight:100});
            this.load.spritesheet('chicaJumpscare','fnafpicture/chicaJumpscare.png',{frameWidth: 240,frameHeight:100});
            this.load.image('rdoor','fnafpicture/rdoor.png');
            this.load.image('llighton','fnafpicture/llighton.png');
            this.load.image('bonniellighton','fnafpicture/bonniellighton.png');
            this.load.image('chicallighton','fnafpicture/chicallighton.png');
            this.load.image('button','fnafpicture/button.png');
            this.load.image('mbutton', 'fnafpicture/muteb.png');
            this.load.image('camera','fnafpicture/cambutton.png');
            this.load.image('gusage','fnafpicture/greenusage.png');
            this.load.image('yusage','fnafpicture/yellowusage.png');
            this.load.image('rusage','fnafpicture/redusage.png');
            this.load.audio('doormove', 'audio/doormove.mp3');
            this.load.audio('windowscare', 'audio/windowscare.mp3');
            this.load.audio('lighttrigger', 'audio/lighttrigger.mp3');
            this.load.audio('officenoise', 'audio/officenoise.mp3');
            this.load.audio('cameranoise', 'audio/cameranoise.mp3');
            this.load.audio('ambient1', 'audio/ambient1.mp3');
            this.load.audio('phonecall', 'audio/phonecall1.mp3');
            this.load.audio('robotscream', 'audio/robotscream.mp3');
        }
        create(){
            bonniecooldown = 15000;
            chicacooldown = 19000;
            gameState.bonnieMovement = function(scene){
                bonniecooldown -= 1;
                if(bonniecooldown <= 0){
                    if(gameState.night === 1){
                       bonniecooldown = Math.ceil(Math.random()*500)+2500; 
                    }
                    if(bonniePOS == 7){
                        bonniePOS = 6;
                    }
                    else if(bonniePOS == 6){
                        gameState.random = Math.ceil(Math.random()*2);
                        if(gameState.random == 1){
                            bonniePOS = 5; 
                        }
                        else if(gameState.random == 2){
                            bonniePOS = 2; 
                        }
                    }
                    else if(bonniePOS == 5){
                        bonniePOS = 2;
                    }
                    else if(bonniePOS == 2){
                        gameState.random = Math.ceil(Math.random()*2);
                        if(gameState.random == 1){
                            bonniePOS = 3; 
                        }
                        else if(gameState.random == 2){
                            bonniePOS = 1; 
                        }
                    }
                    else if(bonniePOS == 3){
                        gameState.random = Math.ceil(Math.random()*2);
                        if(gameState.random == 1){
                            bonniePOS = 2; 
                        }
                        else if(gameState.random == 2){
                            bonniePOS = 1; 
                        }
                    }
                    else if(bonniePOS == 1){
                        bonniecooldown = Math.ceil(Math.random()*500)+700;
                        if(llightOn == true){
                            llightSprite.destroy();
                            gameState.lighttrigger.pause();
                        }
                        bonniePOS = 0;
                    }
                    else if(bonniePOS == 0){
                        if(ldoorOpen == false){
                            if(llightOn == true){
                                powerlevel -= 1;
                                llightSprite.destroy();
                            }
                            gameState.lighttrigger.pause();
                            llightOn = false;
                            gameState.random = Math.ceil(Math.random()*2);
                            if(gameState.random == 1){
                                bonniePOS = 7; 
                            }
                            else if(gameState.random == 2){
                                bonniePOS = 6; 
                            }
                        }
                        else{
                            scene.scene.pause('camera');
                            scene.scene.bringToTop('Night1');
                            gameState.robotscream.play();
                            cameraOn = false;
                            if(llightOn == true){
                                llightSprite.destroy();
                            }
                            gameState.jumpscaresprite = scene.add.sprite(0,0,'bonnieJumpscare').setOrigin(0,0).setDepth(4).setScale(5);
                            gameState.jumpscaresprite.anims.play('bonnieJS',true);
                            gameState.officenoise.pause();
                            gameState.phonecall.pause();
                            gameState.lighttrigger.pause();
                            gameState.ambient1.pause();
                            gameState.doormove.pause();
                            scene.time.addEvent({
                                delay: 1500,
                                callback: ()=>{
                                    gameState.robotscream.pause();
                                    scene.scene.stop('Night1');
                                    scene.scene.stop('camera');
                                    reset();
                                    scene.scene.start('gameOver');
                                },
                                startAt: 0,
                                timeScale: 1,
                            });
                        }
                    }
                }
            }
            gameState.chicaMovement = function(scene){
                chicacooldown -= 1;
                if(chicacooldown <= 0){
                    if(gameState.night === 1){
                       chicacooldown = Math.ceil(Math.random()*500)+2100; 
                    }
                    else if(gameState.night === 2){
                       chicacooldown = 2100; 
                    }
                    if(chicaPOS == 7){
                        chicaPOS = 6;
                    }
                    else if(chicaPOS == 6){
                        gameState.random = Math.ceil(Math.random()*4);
                        if(gameState.random == 1){
                            chicaPOS = 8; 
                        }
                        else if(gameState.random == 2){
                            chicaPOS = 9; 
                        }
                        else if(gameState.random == 3|| gameState.random == 4){
                            chicaPOS = 10; 
                        }
                    }
                    else if(chicaPOS == 8){
                        gameState.random = Math.ceil(Math.random()*3);
                        if(gameState.random == 1){
                            chicaPOS = 6; 
                        }
                        else if(gameState.random == 2){
                            chicaPOS = 10; 
                        }
                    }
                    else if(chicaPOS == 9){
                        gameState.random = Math.ceil(Math.random()*3);
                        if(gameState.random == 1){
                            chicaPOS = 6; 
                        }
                        else if(gameState.random == 2){
                            chicaPOS = 10; 
                        }
                    }
                    else if(chicaPOS == 10){
                        chicaPOS = 11;
                    }
                    else if(chicaPOS == 11){
                        chicacooldown = Math.ceil(Math.random()*500)+700;
                        if(rlightOn == true){
                            rlightSprite.destroy();
                            gameState.lighttrigger.pause();
                        }
                        chicaPOS = 0; 
                    }
                    else if(chicaPOS == 0){
                        if(rdoorOpen == false){
                            if(rlightOn == true){
                                rlightSprite.destroy();
                                powerlevel -= 1;
                            }
                            gameState.lighttrigger.pause();
                            rlightOn = false;
                            gameState.random = Math.ceil(Math.random()*2);
                            if(gameState.random == 1){
                                chicaPOS = 7; 
                            }
                            else if(gameState.random == 2){
                                chicaPOS = 6; 
                            }
                        }
                        else{
                            scene.scene.pause('camera');
                            scene.scene.bringToTop('Night1');
                            gameState.robotscream.play();
                            cameraOn = false;
                            if(rlightOn == true){
                                rlightSprite.destroy();
                            }
                            gameState.jumpscaresprite = scene.add.sprite(0,0,'chicaJumpscare').setOrigin(0,0).setDepth(4).setScale(5);
                            gameState.jumpscaresprite.anims.play('chicaJS',true);
                            gameState.officenoise.pause();
                            gameState.phonecall.pause();
                            gameState.lighttrigger.pause();
                            gameState.ambient1.pause();
                            gameState.doormove.pause();
                            scene.time.addEvent({
                                delay: 1500,
                                callback: ()=>{
                                    gameState.robotscream.pause();
                                    scene.scene.stop('Night1');
                                    scene.scene.stop('camera');
                                    reset();
                                    scene.scene.start('gameOver');
                                },
                                startAt: 0,
                                timeScale: 1,
                            });
                        }
                    }
                }
            }
            this.anims.create({
                key: 'ldoorclose',
                frameRate: 20,
                frames:this.anims.generateFrameNames('ldoor',{start: 0,end: 6})
            });
            this.anims.create({
                key: 'ldooropen',
                frameRate: 20,
                frames:this.anims.generateFrameNames('ldoor',{start: 7,end: 12})
            });
            this.anims.create({
                key: 'rdoorclose',
                frameRate: 20,
                frames:this.anims.generateFrameNames('ldoor',{start: 0,end: 6})
            });
            this.anims.create({
                key: 'rdooropen',
                frameRate: 20,
                frames:this.anims.generateFrameNames('ldoor',{start: 7,end: 12})
            });
            this.anims.create({
                key: 'bonnieJS',
                frameRate: 20,
                repeat: -1,
                frames:this.anims.generateFrameNames('bonnieJumpscare',{start: 0,end: 7})
            });
            this.anims.create({
                key: 'chicaJS',
                frameRate: 20,
                repeat: -1,
                frames:this.anims.generateFrameNames('chicaJumpscare',{start: 0,end: 7})
            });
            this.scene.launch('camera');
            var loopSound = {
                loop: true,
                volume: 0.4
            }
            var loopSound2 = {
                loop: true,
                volume: 1.5
            }
            gameState.ldoor = this.physics.add.group();
            gameState.rdoor = this.physics.add.group();
            gameState.camera = this.physics.add.group();
            //background
            this.add.image(0,0,'bg').setOrigin(0,0).setDepth(0);
            this.add.image(0,0,'Office').setOrigin(0,0).setDepth(2);
            /*this.physics.add.collider(, , function() {
                
            });*/  
            this.add.sprite(100,window.innerHeight-60,'gusage').setOrigin(0,0);
            this.scene.pause('camera');
            //audio
            gameState.doormove = this.sound.add('doormove');
            gameState.windowscare = this.sound.add('windowscare');
            gameState.lighttrigger = this.sound.add('lighttrigger');
            gameState.cameranoise = this.sound.add('cameranoise');
            gameState.officenoise = this.sound.add('officenoise');
            gameState.officenoise.play(loopSound);
            gameState.ambient1 = this.sound.add('ambient1');
            gameState.ambient1.play(loopSound2);
            gameState.robotscream = this.sound.add('robotscream');
            gameState.phonecall = this.sound.add('phonecall');
            gameState.phonecall.play();
            //Right Door
            rdoorSprite = gameState.rdoor.create(990,63,'ldoor').setOrigin(0,0).setFlipX(true).setDepth(2);
            gameState.ldoorButton = this.add.sprite(20,150,'button').setOrigin(0,0).setInteractive().setDepth(2);
            gameState.llightButton = this.add.sprite(20,230,'button').setOrigin(0,0).setInteractive().setDepth(2);
            //Left Door
            ldoorSprite = gameState.ldoor.create(89,63,'ldoor').setOrigin(0,0).setDepth(2);
            gameState.rdoorButton = this.add.sprite(1130,150,'button').setOrigin(0,0).setInteractive().setDepth(2);
            gameState.rlightButton = this.add.sprite(1130,230,'button').setOrigin(0,0).setInteractive().setDepth(2);
            //Usage colors
            gameState.gusage = this.add.sprite(100,window.innerHeight-60,'gusage').setOrigin(0,0);;
            gameState.yusage;
            gameState.rusage;
            //texts
            this.add.text(10, window.innerHeight-50, 'Usage: ', { fontSize: '20px', fill: '#FFFFFF' });
            gameState.AMtext = this.add.text(window.innerWidth - 130, 20, `${AM} AM`, { fontSize: '30px', fill: '#FFFFFF' }).setDepth(4);
            gameState.nighttext = this.add.text(window.innerWidth - 115, 50, `Night ${gameState.night}`, { fontSize: '15px', fill: '#FFFFFF' }).setDepth(4);
            gameState.powertext = this.add.text(10, window.innerHeight-100, `Power left:${power}%`, { fontSize: '20px', fill: '#FFFFFF' }).setDepth(4);
            //buttons
            gameState.camera = this.add.sprite(window.innerWidth/2-100,window.innerHeight-50,'camera').setInteractive();
            gameState.muteb = this.add.sprite(window.innerWidth-200,window.innerHeight-50,'mbutton').setInteractive();
            gameState.muteb.on('pointerup', () => {
                gameState.phonecall.setMute(true);
                gameState.muteb.destroy();
            });
            gameState.ldoorButton.on('pointerup', () => {
                if(power > 0&& cameraOn === false){
                    gameState.doormove.play();
                    ldoorOpen = !(ldoorOpen);
                    if(ldoorOpen === false){
                        secondcons /= 2;
                        second -= 1;
                        powerlevel += 1;
                        ldoorSprite.anims.play('ldoorclose',true);
                    }
                    else {
                        secondcons *= 2;
                        powerlevel -= 1;
                        ldoorSprite.anims.play('ldooropen',true);
                    }
                }
            });
            gameState.llightButton.on('pointerup', () => {
                if(power > 0&& cameraOn === false){
                    llightOn = !(llightOn);
                    if(rlightOn === true){
                        rlightOn = false;
                        rlightSprite.destroy();
                    }
                    if(llightOn === false){
                        gameState.lighttrigger.pause();
                        secondcons /= 2;
                        second -= 1;
                        powerlevel -= 1;
                        llightSprite.destroy();
                    }
                    else {
                        gameState.lighttrigger.play(loopSound2);
                        secondcons *= 2;
                        powerlevel += 1;
                        if(bonniePOS == 0){
                            if(ldoorOpen == true){
                                gameState.windowscare.play();
                            }
                            llightSprite = this.add.image(0,0,'bonniellighton').setOrigin(0,0).setScale(10).setDepth(1);
                        }
                        else {
                            llightSprite = this.add.image(0,0,'llighton').setOrigin(0,0).setScale(10).setDepth(1);
                        }
                    }
                }
            });
            gameState.rdoorButton.on('pointerup', () => {
                if(power > 0 && cameraOn === false){
                    gameState.doormove.play();
                    rdoorOpen = !(rdoorOpen);
                    if(rdoorOpen === false){
                        secondcons /= 2;
                        second += 1;
                        powerlevel += 1;
                        rdoorSprite.anims.play('rdoorclose',true);
                    }
                    else {
                        secondcons *= 2;
                        powerlevel -= 1;
                        rdoorSprite.anims.play('rdooropen',true);
                    }
                }
            });
            gameState.rlightButton.on('pointerup', () => {
                if(power > 0&& cameraOn === false){
                    rlightOn = !(rlightOn);
                    if(llightOn === true){
                        llightOn = false;
                        llightSprite.destroy();
                    }
                    if(rlightOn === false){
                        gameState.lighttrigger.pause();
                        secondcons /= 2;
                        second -= 1;
                        powerlevel -= 1;
                        rlightSprite.destroy();
                    }
                    else {
                        gameState.lighttrigger.play(loopSound2);
                        secondcons *= 2;
                        powerlevel += 1;
                        if(chicaPOS == 0){
                            if(rdoorOpen == true){
                                gameState.windowscare.play();
                            }
                            rlightSprite = this.add.image(600,0,'chicallighton').setOrigin(0,0).setScale(10).setDepth(1).setFlipX(true);
                        }
                        else {
                            rlightSprite = this.add.image(600,0,'llighton').setOrigin(0,0).setScale(10).setDepth(1).setFlipX(true);
                        }
                    }
                }
            });
            gameState.camera.on('pointerover', () => {
                console.log(gameState.camerafreeze, camPOS !== bonniePOS);
                if(power > 0){
                    cameraOn = !(cameraOn);
                        gameState.cameranoise.play();
                    if(cameraOn === true){
                        secondcons /= 2;
                        second -= 1;
                        powerlevel += 1;
                        console.log(powerlevel);
                        this.scene.bringToTop('camera');
                        this.scene.resume('camera');
                        gameState.officenoise.pause();
                        gameState.lighttrigger.pause();
                        if(rlightOn === true){
                            rlightSprite.destroy();
                            powerlevel -=1;
                        }
                        else if(llightOn === true){
                            llightSprite.destroy();
                            powerlevel -=1;
                        }
                    }
                    else {
                        secondcons *= 2;
                        powerlevel -= 1;
                        this.scene.bringToTop('Night1');
                        this.scene.pause('camera');
                        gameState.officenoise.resume();
                    }
                    if(powerlevel === 1|| powerlevel === 2){
                        gameState.gusage.destroy();
                        gameState.gusage = this.add.sprite(100,window.innerHeight-60,'gusage').setOrigin(0,0);
                    } 
                    else if(powerlevel === 3){
                        gameState.gusage.destroy();
                        gameState.gusage = this.add.sprite(100,window.innerHeight-60,'yusage').setOrigin(0,0);
                    } 
                    else if(powerlevel === 4){
                        gameState.gusage.destroy();
                        gameState.gusage = this.add.sprite(100,window.innerHeight-60,'rusage').setOrigin(0,0);
                    }
                }
            });
            //timer
            var timer = this.time.addEvent({
                delay: 90000,
                callback: ()=>{
                    if(AM === 12){
                        AM = 1;
                    }
                    else {
                        AM += 1;
                        if(AM === 6){
                            gameState.officenoise.setMute(true);
                            gameState.ambient1.setMute(true);
                            gameState.doormove.setMute(true);
                            gameState.lighttrigger.setMute(true);
                            gameState.phonecall.setMute(true);
                            this.scene.stop(`Night${gameState.night}`);
                            this.scene.stop('camera');
                            gameState.night += 1;
                            reset();
			                this.scene.start('SIXAM');
                        }
                    }
                    gameState.AMtext.destroy();
                    gameState.AMtext = this.add.text(window.innerWidth - 130, 20, `${AM} AM`, { fontSize: '30px', fill: '#FFFFFF' }).setDepth(4);
                },
                repeat: 5,
                startAt: 0,
                timeScale: 1,
            });
            gameState.secondcounter = this.time.addEvent({
                delay: 1000,
                callback: ()=>{
                    second = second - 1;
                    console.log(secondcons);
                },
                loop: true,
                startAt: 0,
                timeScale: 1,
            });
            this.input.on('pointerup',()=>{
                if(powerlevel === 1|| powerlevel === 2){
                    gameState.gusage.destroy();
                    gameState.gusage = this.add.sprite(100,window.innerHeight-60,'gusage').setOrigin(0,0);
                } 
                else if(powerlevel === 3){
                    gameState.gusage.destroy();
                    gameState.gusage = this.add.sprite(100,window.innerHeight-60,'yusage').setOrigin(0,0);
                } 
                else if(powerlevel === 4){
                    gameState.gusage.destroy();
                    gameState.gusage = this.add.sprite(100,window.innerHeight-60,'rusage').setOrigin(0,0);
                }
            });
            gameState.checkcam = function(scene){
                if(camPOS == 1){
                   if(bonniePOS == 1){
                        gameState.camerabg = scene.add.sprite(0,0,'bonnieCAM2Bc').setOrigin(0,0).setDepth(0).setScale(10);
                    }
                    else if(bonniePOS !== 1){
                        gameState.camerabg = scene.add.sprite(0,0,'CAM2Bc').setOrigin(0,0).setDepth(0).setScale(10);
                    } 
                }
                if(camPOS == 2){
                    if(bonniePOS == 2){
                        gameState.camerabg = scene.add.sprite(0,0,'bonnieCAM2Ac').setOrigin(0,0).setDepth(0).setScale(10);
                    }
                    else if (bonniePOS !== 2){
                        gameState.camerabg = scene.add.sprite(0,0,'CAM2Ac').setOrigin(0,0).setDepth(0).setScale(10);
                    }
                }
                if(camPOS == 3){
                    if(bonniePOS == 3){
                        gameState.camerabg = scene.add.sprite(0,0,'bonnieCAM3c').setOrigin(0,0).setDepth(0).setScale(10);
                    }
                    else if(bonniePOS !== 3){
                        gameState.camerabg = scene.add.sprite(0,0,'CAM3c').setOrigin(0,0).setDepth(0).setScale(10);
                    }
                }
                if(camPOS == 5){
                    if(bonniePOS == 5){
                        gameState.camerabg = scene.add.sprite(0,0,'bonnieCAM5c').setOrigin(0,0).setDepth(0).setScale(10);
                    }
                    else if(bonniePOS !== 5){
                        gameState.camerabg = scene.add.sprite(0,0,'CAM5c').setOrigin(0,0).setDepth(0).setScale(10);
                    }
                }
                if(camPOS == 6){
                    if(bonniePOS == 6 && chicaPOS !== 6 && freddyPOS !== 6){
                        gameState.camerabg = scene.add.sprite(0,0,'bonnieCAM1Bc').setOrigin(0,0).setDepth(0).setScale(5);
                    }
                    else if(bonniePOS !== 6 && chicaPOS == 6 && freddyPOS !== 6){
                        gameState.camerabg = scene.add.sprite(0,0,'chicaCAM1Bc').setOrigin(0,0).setDepth(0).setScale(10);
                    }
                    else if(bonniePOS == 6 && chicaPOS == 6 && freddyPOS !== 6){
                        gameState.camerabg = scene.add.sprite(0,0,'bonniechicaCAM1Bc').setOrigin(0,0).setDepth(0).setScale(5);
                    }
                    else if(bonniePOS !== 6 && chicaPOS !== 6 && freddyPOS !== 6){
                        gameState.camerabg = scene.add.sprite(0,0,'CAM1Bc').setOrigin(0,0).setDepth(0).setScale(10);
                    }
                }
                if(camPOS == 7){
                    if(bonniePOS !== 7 && chicaPOS == 7 && freddyPOS == 7){
                        gameState.camerabg = scene.add.sprite(0,0,'bonnieCAM1Ac').setOrigin(0,0).setDepth(0).setScale(10);
                    }
                    else if(bonniePOS == 7 && chicaPOS !== 7 && freddyPOS == 7){
                        gameState.camerabg = scene.add.sprite(0,0,'chicaCAM1Ac').setOrigin(0,0).setDepth(0).setScale(10);
                    }
                    else if(bonniePOS !== 7 && chicaPOS !== 7 && freddyPOS == 7){
                        gameState.camerabg = scene.add.sprite(0,0,'bonniechicaCAM1Ac').setOrigin(0,0).setDepth(0).setScale(10);
                    }
                    else if(bonniePOS == 7 && chicaPOS == 7 && freddyPOS == 7){
                        gameState.camerabg = scene.add.sprite(0,0,'CAM1Ac').setOrigin(0,0).setDepth(0).setScale(10);
                    }
                }
                if(camPOS == 8){
                    if(chicaPOS == 8){
                        gameState.camerabg = scene.add.sprite(0,0,'chicaCAM7c').setOrigin(0,0).setDepth(0).setScale(10);
                    }
                    else if(chicaPOS !== 8){
                        gameState.camerabg = scene.add.sprite(0,0,'CAM7c').setOrigin(0,0).setDepth(0).setScale(10);
                    }
                }
                if(camPOS == 10){
                    if(chicaPOS == 10){
                        gameState.camerabg = scene.add.sprite(0,0,'chicaCAM4Ac').setOrigin(0,0).setDepth(0).setScale(10);
                    }
                    else if(chicaPOS !== 10){
                        gameState.camerabg = scene.add.sprite(0,0,'CAM4Ac').setOrigin(0,0).setDepth(0).setScale(10);
                    }
                }
                if(camPOS == 11){
                    if(chicaPOS == 11){
                        gameState.camerabg = scene.add.sprite(0,0,'chicaCAM4Bc').setOrigin(0,0).setDepth(0).setScale(10);
                    }
                    else if(chicaPOS !== 11){
                        gameState.camerabg = scene.add.sprite(0,0,'CAM4Bc').setOrigin(0,0).setDepth(0).setScale(10);
                    }
                }
            }
        }

        update(){
            gameState.bonnieMovement(this);
            gameState.chicaMovement(this);
            if(power > 0){
               if(second <= 0){
                   second = secondcons; 
                   power -= 1;
                   gameState.powertext.destroy();
                   gameState.powertext = this.add.text(10, window.innerHeight-100, `Power left:${power}%`, { fontSize: '20px', fill: '#FFFFFF' });
               }
            }
            else {
                
            }
        }
    }









