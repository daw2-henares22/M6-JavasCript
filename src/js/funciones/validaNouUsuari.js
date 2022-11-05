import { dades } from "./dades.js";
export const validaNouUsuari = (dadesUsuari)=>{             
    for (let index = 0; index < dades.length; index++){//Recorro todos los datos
        if(dadesUsuari.nick.length < 3 || dadesUsuari.nick.length > 10){
            return {
                error: true,
                missatge:"El nick no és correcte"
            }
        }else{
            if(dadesUsuari.pass.length<3 || dadesUsuari.pass.length>10){
                return {
                    error:true,
                    missatge:"La contrasenya no és correcte"
                }
            }else{
                for (let index = 0; index < dades.length; index++){//Recorro todos los datos otra vez para ver si el Nick está repetido o no
                    if(dades[index].nick==dadesUsuari.nick){//Si existe me devuelve el mensaje
                        return {
                            error:true,
                            missatge:"Aquest usuari ja existeix"
                        }
                    }
                }
                return{
                    error: false,
                    missatge: `L’usuari amb nick: ${dadesUsuari.nick} s’ha creat correctament`
                }
            }
        }
    }
}