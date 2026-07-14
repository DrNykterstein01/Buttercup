import bienvenida from "./bienvenida.js";
import menu from "./menu.js";
import gift1 from "./gift1.js";
import gift2 from "./gift2.js";
import gift3 from "./gift3.js";
class main {
    constructor() {
        this.bienvenida = new bienvenida(this);
        this.menu = new menu(this);
        this.gift1 = new gift1(this);
        this.gift2 = new gift2(this);
        this.gift3 = new gift3(this);
    }
}
export default main;