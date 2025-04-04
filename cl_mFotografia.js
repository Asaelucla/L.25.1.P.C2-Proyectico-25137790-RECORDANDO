import cl_mPromocion from './cl_mPromocion.js';

export default class cl_mFotografia extends cl_mPromocion {
    constructor(cliente, tipoFoto) {
        super(cliente);
        this._tipoFoto = tipoFoto;
        this.calcularPrecio();
    }

    get tipoFoto() {
        return this._tipoFoto;
    }

    calcularPrecio() {
        if (this._tipoFoto === 'D') {
            this._precioFinal = this.cliente.costoBase * 0.82;
        } else if (this._tipoFoto === 'I') {
            this._precioFinal = this.cliente.costoBase * 1.13;
        }
        return this._precioFinal;
    }
}