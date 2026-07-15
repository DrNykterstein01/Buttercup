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
            alert("Honestamente, me gustaría que este regalo lo veas con más detalle en un momento que estés más relajada y sola ;3 así lo ves con mucha más calma :3");
            let flag = confirm("Dime, ¿Lo estás en este momento? :3");
            if (flag){
            this.ocultar();
            this.app.gift3.mostrar();
            }
            else {
                alert("Vale :3 tranqui!! Esn ese caso, vuelve luego! Aquí te esperará tu tercer regalo💙");
            }
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