import { dades } from "./dades.js";

export const validaLogin = (usuari)=>{
    for (let index = 0; index < dades.length; index++){//Recorre la base de datos
        if(dades[index].nick==usuari.nick){//Se comprueba si el usuario existe
            if(dades[index].pass != usuari.pass){//Este if lo pongo debajo del otro if para que no salte el mensaje por defecto
                return {
                    error: true,
                    missatge: "Contrasenya incorrecta"
                }
            }
            if(dades[index].pass == usuari.pass){
                return{
                    error: false,
                    missatge: `Hola ${usuari.nick}`
                }
            }
            return {
                error: true,
                missatge: "Aquest usuari ja existeix"
            }
        }    
        //Mensaje por defecto
    }

    return {
        error: true,
        missatge: "Aquest usuari no existeix"
    }
}