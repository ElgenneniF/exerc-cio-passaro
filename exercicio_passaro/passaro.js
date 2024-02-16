
var config = { 
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};
var ida = false
var game = new Phaser.Game(config)
var passarinho;

function preload (){ 
   this.load.image("fundo", "assets/bg_space.png");
    this.load.spritesheet("passaro", 'assets/bird-green.png', {frameWidth: 75, frameHeight: 75});
};

function create (){
    this.add.image(window.innerWidth/2, window.innerHeight/2, "fundo").setScale(2);
    passarinho = this.add.sprite(100, 500, 'passaro');

    this.anims.create({
        key :'fly',
        frames: this.anims.generateFrameNumbers('passaro', {start: 0, end: 7}),
        frameRate: 10,
        repeat: -1
    });

    passarinho.anims.play('fly', true);

};

function update (){
 //decedi trocar o if por um switch case, pq gostei mais do switch
    switch (true){
        //define o inicio do voo e redefine a direção do passaro
        case passarinho.x === 100 && ida === false:
        ida = true;
        passarinho.setFlip(false,false);
        break;
        //faz o passaro andar até a extrema direita
        case passarinho.x < 800 - 100 && ida === true:
        passarinho.x += 10;
        passarinho.y -= 7;
        break;
        //gira o passaro
        case passarinho.x === 800 - 100 && ida === true:
        passarinho.setFlip(true,false);
        ida = false;
        break;
        //faz o passaro voltar pro inicio
        case passarinho.x > 100 && ida === false:
        passarinho.x -= 10;
        passarinho.y+= 7;
        break;
 };
   

};