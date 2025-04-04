import cl_mCliente from './cl_mCliente.js';

export default class cl_mPromocion {
    constructor(cliente) {
        if (!(cliente instanceof cl_mCliente)) {
            throw new Error("Se debe proporcionar un objeto Cliente válido.");
        }
        this._cliente = cliente;
        this._precioFinal = this._cliente.costoBase;
    }

    get cliente() {
        return this._cliente;
    }

    get precioFinal() {
        return this._precioFinal;
    }

    calcularPrecio() {
        return this._precioFinal;
    }
}