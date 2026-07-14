export default class gift2 {
    constructor(app) {
        this.app = app;
        this.gift2 = document.getElementById('gift2');
        this.boton2 = document.getElementById('boton2');
        this.song = new Audio("Die For You.mp3");
        this.song.preload = "auto";
        this.boton2.onclick = () => {
            this.ocultar();
            this.app.menu.mostrar();
        }
    }
    mostrar() {
        document.querySelector("body").style.animation = "none";
        document.querySelector("body").style.overflow = "visible";
        this.gift2.hidden = false;
        this.song.play();
        this.song.loop = true;
    }
    ocultar() {
        this.gift2.hidden = true;
        this.song.pause();
        document.querySelector("body").style.overflow = "hidden";
        //ahora añadimos un estilo para que, al salir de gift2, el scroll vuelva a la parte más alta de la página y el fondo vuelva a animarse
        document.querySelector("body").scrollTop = 0;
        document.querySelector("body").scrollTo(0, 0);
        document.querySelector("body").style.animation = "bg-smooth 3s ease-in-out infinite alternate";
    }
}