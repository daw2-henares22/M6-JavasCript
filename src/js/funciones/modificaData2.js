//Uso el método padStart para poder poner un 0 delante cuando hayan 2 numeros. Por ejemplo, si ponemos el mes Enero que es 1, mostrará 01
export const PadData =(numero)=> {
    return numero.toString().padStart(2,"0");
}

export const modificaData2 = (fecha)=>{    
    let resultado = `${fecha.getFullYear()}/${PadData(fecha.getMonth() + 1)}/${PadData(fecha.getDate())} ${PadData(fecha.getHours())}:${PadData(fecha.getMinutes())}:${PadData(fecha.getSeconds())}`       
    console.log(resultado);   
    return resultado;

  
};