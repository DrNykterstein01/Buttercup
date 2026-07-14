export default class gift3 {
    constructor(app) {
        this.app = app;
        this.gift3 = document.getElementById('gift3');
        this.boton3 = document.getElementById('boton3');
        this.song = new Audio("Until We Meet Again.mp3");
        this.song.preload = "auto";
        this.boton3.onclick = () => {
            this.ocultar();
            this.app.menu.mostrar();
        }
    }
    mostrar() {
        this.gift3.hidden = false;
        this.song.play();
        this.song.loop = true;
        document.querySelector("body").style.backgroundColor = "#011523";
        document.querySelector("body").style.overflow = "visible";
    }
    ocultar() {
        this.gift3.hidden = true;
        this.song.pause();
        this.song.currentTime = 0;
        document.querySelector("body").style.background = "linear-gradient(to bottom, black 50%, rgb(0, 0, 44) 80%, blue 100%)";
        document.querySelector("body").style.overflow = "hidden";
    }
}