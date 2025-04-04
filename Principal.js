/**
 * RECORDANDO
 * Una Tienda Fotográfica, ofrece promociones para cubrir sus eventos especiales en videos o fotografías. 
 * Se conoce de cada cliente: su código y costo base. Además, se sabe que si la promoción es de Fotografías 
 * tendrá un tipo de foto (D: Digital o I: Impresa), 
 * teniendo en cuenta si es Digital tendrá un descuento del 18% sobre el costo y si las fotos 
 * son impresas tendrán un incremento del 13%. Por otro lado, 
 * si la promoción es de videos se debe tomar en cuenta si el mismo se graba en formato HD 
 * (High Definition: SI-NO) de ser así este tendrá un incremento del 20% sobre el costo. 
 * La Tienda requiere determinar al final de su jornada laboral: el precio de cada cliente,
 * el total vendido y el promedio de ventas de promociones de fotos digitales vendidas. **/
import controlador from './controlador.js';

const tiendaController = new controlador();

export function registrarPromocionDesdeHTML() {
    const codigo = document.getElementById('codigo').value;
    const costoBase = document.getElementById('costoBase').value;
    const tipoPromocion = document.getElementById('tipoPromocion').value;

    let detalles = {};
    if (tipoPromocion === 'fotografia') {
        detalles.tipoFoto = document.getElementById('tipoFoto').value;
    } else if (tipoPromocion === 'video') {
        detalles.formatoHD = document.getElementById('formatoHD').value;
    }

    tiendaController.registrarPromocion(codigo, costoBase, tipoPromocion, detalles);

    document.getElementById('registroForm').reset();
    document.getElementById('fotografiaCampos').style.display = 'none';
    document.getElementById('videoCampos').style.display = 'none';
}