import cl_mPromocion from './cl_mPromocion.js';

export default class cl_mVideo extends cl_mPromocion {
    constructor(cliente, formatoHD) {
        super(cliente);
        this._formatoHD = formatoHD;
        this.calcularPrecio();
    }

    get formatoHD() {
        return this._formatoHD;
    }

    calcularPrecio() {
        if (this._formatoHD === 'SI') {
            this._precioFinal = this.cliente.costoBase * 1.20;
        }
        return this._precioFinal;
    }
}