export default class bienvenida {
    constructor(app) {
        this.app = app;
        this.giftB = document.getElementById('bienvenida');
        this.botonB = document.getElementById('botonB');
        this.botonB.onclick = () => {
            this.ocultar();
            this.app.menu.mostrar();
        }
    }
    mostrar() {
        this.giftB.hidden = false;
    }
    ocultar() {
        this.giftB.hidden = true;
    }
}