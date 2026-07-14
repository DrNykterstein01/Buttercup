export default class menu {
    constructor(app) {
        this.app = app;
        this.giftM = document.getElementById('menu');
        this.botonM1 = document.getElementById('botonM1');
        this.song = new Audio("Artist.mp3");
        this.song.preload = "auto";
        this.botonM1.onclick = () => {
            this.ocultar();
            this.app.gift1.mostrar();
        };
        this.botonM2 = document.getElementById('botonM2');
        this.botonM2.onclick = () => {
            this.ocultar();
            this.app.gift2.mostrar();
        };
        this.botonM3 = document.getElementById('botonM3');
        this.botonM3.onclick = () => {
            this.ocultar();
            this.app.gift3.mostrar();
        };
    }
    mostrar() {
        this.giftM.hidden = false;
        this.song.play();
        this.song.loop = true;
    }
    ocultar() {
        this.giftM.hidden = true;
        this.song.pause();
        this.song.currentTime = 0;
    }
}