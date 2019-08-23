function Sprite(x, y, largura, altura){
    this.x = x;
    this.y = y;
    this.largura = largura;
    this.altura = altura;

    this.desenha = function(xCanvas, yCanvas) {
        ctx.drawImage(img, this.x, this.y, this.largura, this.altura, xCanvas, yCanvas, this.largura, this.altura);
    }

}

var spriteBg = new Sprite(0, 650, 600, 300),
spriteBoneco = new Sprite(600, 0, 75, 81),
spriteChao = new Sprite(0, 950, 600, 50);