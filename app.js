//const argv = require('yargs').argv
const argv = require('./config/yargs.js').argv;
const { crear, getListado, atualizar, borrar } = require('./por-hacer/por-hacer');
const colors = require('colors');


let comando = argv._[0];




switch (comando) {
    case 'crear':
        let tarea = crear(argv.d);
        //console.log(tarea);

        break;
    case 'listar':
        for (let tarea of getListado()) {


            console.log('========por Hacer======'.green);
            console.log(tarea.descripcion);
            console.log('Estado:', tarea.completado);
            console.log('======================='.green);

        }
        break;
    case 'atualizar':
        let atualizado = atualizar(argv.descripcion, argv.completado);
        console.log(atualizado);
        break;
    case 'borrar':
        let borrado = borrar(argv.descripcion);
        console.log(borrado);
        break;

    default:
        console.log('Comando no encontrado');
        break;
}