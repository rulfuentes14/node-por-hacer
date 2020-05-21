const argv = require('./config/yargs').argv;
const porHacer = require('./por-hacer/por-hacer');
const color = require('colors/safe');

//console.log(argv);

let comando = argv._[0];

switch(comando){
    case 'crear':
        let tarea = porHacer.crear(argv.descripcion);
        console.log(tarea);
        break;

    case 'listar':
        
        let listado = porHacer.getListado();
        let i = 0;
        console.log(color.green('******************Por Hacer******************'));
        for(let tarea of listado){
            i++;
            console.log(`Tarea [${color.yellow(i)}]: `,tarea.descripcion);
            console.log('Estado: ',color.yellow(tarea.completado));
            console.log(color.green('____________________________________________'));
            
        }
        console.log(color.green('*********************************************'));
        break;

    case 'actualizar':
        let actualizado = porHacer.actualizar(argv.descripcion, argv.completado);
        console.log(actualizado);
        break;

    case 'borrar':
        let borrado = porHacer.borrar(argv.descripcion);
        console.log(borrado);
        break;
    default:
        console.log('Comando no reconocido');

}

