export const edat = (fecha)=>{
    //Llamo al div y digo que resta obtenga el año actual restandolo con el año de cualquier usuario
    let resta = new Date().getFullYear() - new Date(fecha).getFullYear();
    if(isNaN(resta)){
        return  {
            error: true,
            missatge: 'El format no és correcte'
        }
        
    }
    return resta;
}