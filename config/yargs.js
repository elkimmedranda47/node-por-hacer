const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripcion de la tarea'
};


const completado = {
    efault: true,
    alias: 'c',
    desc: 'Marca como completado o pendiente la tarea'
};




const argv = require('yargs')

.command('crear', 'Crear un elmento por hacer', { descripcion })

.command('atualizar', 'Atualizar el estado completado de una tarea ', { descripcion, completado })

.command('borrar', 'Borrar una tarea', { descripcion })

.help()
    .argv;

module.exports = { argv };