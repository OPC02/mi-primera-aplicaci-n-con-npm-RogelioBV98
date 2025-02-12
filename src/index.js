const logger = require('./logger');
var x = 0;
let mi_variable = 'Hola';
let PI = 3.1416

function main(){
    logger.info('Ejecutando aplicación en puerto 3000');
    logger.debug('Se cargó el modulo log4js');
    logger.warn('Advertencia se inicio la app en modo de pruebas');
    logger.error('No se pudo iniciar la app por que falta un archivo.');
}

function sumar(x , y){
    return x + y * PI;
}

main();

module.exports = sumar;