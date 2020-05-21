
// const opts = {
//     descripcion:{
//         demand:true,
//         alias: 'd',
//         desc: 'Descripcion de la tarea.'
//     },
//     completado:{
//         alias: 'c',
//         default: true
//     }
// }

const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripción de la tarea por hacer.'
}

const completado = {
    alias: 'c',
    desc: 'Marca como completado o pendiente la tarea',
    default: true
}

const argv = require('yargs')
            .command('crear','Crear una actividad por hacer.',{
                descripcion:{
                    demand: true,
                    alias: 'd',
                    desc: 'Descripción de la tarea por hacer.'
                }
            })                
            .command('actualizar','Actualiza el estado completado de una actividad por hacer.',{
                descripcion:{
                    demand: true,
                    alias: 'd',
                    desc: 'Descripción de la tarea por hacer.'
                },
                completado:{
                    alias: 'c',
                    desc: 'Marca como completado o pendiente la tarea',
                    default: true
                }
            }) 
            .command('borrar','Borra una actividad por hacer del registro de BD.',{
                descripcion:{
                    demand: true,
                    alias: 'd',
                    desc: 'Descripción de la tarea por hacer.'
                }
            })    
            .help()
            .argv;


module.exports = {
    argv    
}