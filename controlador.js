import cl_mCliente from './cl_mCliente.js';
import cl_mFotografia from './cl_mFotografia.js';
import cl_mVideo from './cl_mVideo.js';
import cl_vTienda from './cl_vTienda.js';

export default class controlador {
    constructor() {
        this.vtienda = new cl_vTienda();
        this.totalVendido = 0;
        this.totalFotosDigitales = 0;
        this.cantidadFotosDigitales = 0;
    }

    registrarPromocion(codigo, costoBase, tipoPromocion, detalles) {
        const cliente = new cl_mCliente(codigo, parseFloat(costoBase));
        let nuevaPromocion;

        if (tipoPromocion === 'fotografia') {
            nuevaPromocion = new cl_mFotografia(cliente, detalles.tipoFoto);
            if (detalles.tipoFoto === 'D') {
                this.totalFotosDigitales += nuevaPromocion.precioFinal;
                this.cantidadFotosDigitales++;
            }
        } else if (tipoPromocion === 'video') {
            nuevaPromocion = new cl_mVideo(cliente, detalles.formatoHD);
        }

        if (nuevaPromocion) {
            this.totalVendido += nuevaPromocion.precioFinal;
            this.vtienda.mostrarResultados(nuevaPromocion, this.totalVendido, this.cantidadFotosDigitales > 0 ? this.totalFotosDigitales / this.cantidadFotosDigitales : 0);
        } else {
            this.vtienda.mostrarMensaje("Error al registrar la promoción.");
        }
    }
}