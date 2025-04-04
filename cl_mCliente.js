export default class cl_mCliente {
    constructor(codigo, costoBase) {
        this._codigo = codigo;
        this._costoBase = costoBase;
    }

    get codigo() {
        return this._codigo;
    }

    get costoBase() {
        return this._costoBase;
    }
}