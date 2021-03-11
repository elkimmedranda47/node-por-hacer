const fs = require('fs');
const { array } = require('yargs');

let listadoPorHacer = [];


const guardarDB = () => {
    return new Promise((resolve, reject) => {

        let data = JSON.stringify(listadoPorHacer);
        fs.writeFile('db/data.json', data, (err) => {

            if (err)
                reject(err);
            else
                resolve(`Datos guardados`);
        });
    })
}


const cargarDB = () => {

    try {
        listadoPorHacer = require('../db/data.json');
    } catch (error) {
        listadoPorHacer = [];
    }

}


const crear = (descripcion) => {
    cargarDB();
    let porHacer = {
        descripcion,
        completado: false,
    };

    listadoPorHacer.push(porHacer);

    guardarDB()
        .then(resultado => { console.log(resultado) })
        .catch(e => console.log(`Algo salio mal--> ${e}`))

    return porHacer;

}


const getListado = () => {

    cargarDB();
    return listadoPorHacer;

}

const atualizar = (descripcion, completado = true) => {
    cargarDB();


    let index = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion)


    if (index >= 0) {
        listadoPorHacer[index].completado = completado;
        guardarDB();
        return true
    } else { return false; }


}

const borrar = (descripcion) => {

    cargarDB();
    /* let index = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion)
     if (index >= 0) {
         listadoPorHacer.splice(index, 1);
         guardarDB();
         return true
     } else { return false; }
    */
    let nuevoListado = listadoPorHacer.filter(tarea => { return tarea.descripcion !== descripcion });
    if (listadoPorHacer === nuevoListado) {
        return false;
    } else {
        listadoPorHacer = nuevoListado;
        guardarDB();
        return true;
    }

}


module.exports = {
    crear,
    getListado,
    atualizar,
    borrar

}