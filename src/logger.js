const log4js = require("log4js")

log4js.configure({
    appenders:{
        //Muestra en consolla los logs
        console: {type: 'console'},
        //Maneja el archivo donde se depositarán los logs de la aplicación
        file: {type: 'file', filename:'app.log'}
    },
    categories:{
        default: { appenders: ['console', 'file'], 
            level : 'debug'}
    }
});

const logger = log4js.getLogger()
module.exports = logger;