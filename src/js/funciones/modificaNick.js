export const modificaNick = (nick)=>{
    var espacio = nick.trim().replaceAll('','_').toUpperCase();
        console.log(espacio);
        return espacio;
}