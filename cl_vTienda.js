import cl_mFotografia from './cl_mFotografia.js';
import cl_mVideo from './cl_mVideo.js';
export default class cl_vTienda {
    constructor() {
        this.resultadosDiv = document.getElementById('resultados');
    }

    mostrarResultados(promocion, totalVendido, promedioFotosDigitales) {
        this.resultadosDiv.innerHTML = '';

        if (promocion) {
            let detalles = '';
            if (promocion instanceof cl_mFotografia) {
                detalles = `(Fotografía - Tipo: ${promocion.tipoFoto})`;
            } else if (promocion instanceof cl_mVideo) {
                detalles = `(Video - HD: ${promocion.formatoHD})`;
            }
            const detalleParrafo = document.createElement('p');
            detalleParrafo.textContent = `Código: ${promocion.cliente.codigo}, Precio: $${promocion.precioFinal.toFixed(2)} ${detalles}`;
            this.resultadosDiv.appendChild(detalleParrafo);
        } else {
            this.mostrarMensaje("No se han registrado promociones aún.");
        }

        const totalParrafo = document.createElement('p');
        totalParrafo.textContent = `Total Vendido: $${totalVendido.toFixed(2)}`;
        this.resultadosDiv.appendChild(totalParrafo);

        const promedioParrafo = document.createElement('p');
        promedioParrafo.textContent = `Promedio de Ventas de Fotos Digitales: $${promedioFotosDigitales.toFixed(2)}`;
        this.resultadosDiv.appendChild(promedioParrafo);
    }

    mostrarMensaje(mensaje) {
        const mensajeParrafo = document.createElement('p');
        mensajeParrafo.textContent = mensaje;
        this.resultadosDiv.appendChild(mensajeParrafo);
    }
}