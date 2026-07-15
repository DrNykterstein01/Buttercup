export default class gift1 {
    constructor(app) {
        this.app = app;
        this.gift1 = document.getElementById('gift1');
        this.boton1 = document.getElementById('boton1');
        this.boton1.onclick = () => {
            this.ocultar();
            this.app.menu.mostrar();
        }
    }
    mostrar() {
        this.gift1.hidden = false;
        document.querySelector("body").style.overflow = "visible";
    }
    ocultar() {
        this.gift1.hidden = true;
        document.querySelector("body").style.overflow = "hidden";
        document.querySelector("body").scrollTop = 0;
        document.querySelector("body").scrollTo(0, 0);
    }
}