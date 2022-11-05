//Esta funcion lo que hace es que los meses del 0 al 11, se muestre el nombre del mes en vez del número
export const mes = (fecha)=>{
    let meses = ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'];
    return meses[fecha.getMonth()];
}

//Pongo el día, el més con nombre no con numero, el año, la hora, el minuto, y los segundos actuales
export const modificaData = (fecha)=>{
    var cerosH = fecha.getHours().toString()
    var cerosM = fecha.getMinutes().toString()
    var cerosS = fecha.getSeconds().toString()
    let resultado = `${fecha.getDate()} ${mes(fecha)} ${fecha.getFullYear()} - ${cerosH.padStart(2, "0")}:${cerosM.padStart(2, "0")}:${cerosS.padStart(2, "0")}`;
    return resultado;
}