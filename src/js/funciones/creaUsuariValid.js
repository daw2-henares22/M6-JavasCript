export const creaUsuariValid = (event)=>{
    /*Este objeto lo que hace es que se añada un nuevo usuario*/
    const elNick = document.querySelector("#nick");
    const elpassword = document.querySelector("#pass");
    const elavatar = document.querySelector("#avatar");
    event.preventDefault()/*Sirve para que cuando envias algo, no se borre lo anterior, en este caso que no se borre el formulario*/
    const dadesUsuari={}
        dadesUsuari.Nick = elNick.value,
        dadesUsuari.password = elpassword.value,
        dadesUsuari.avatar = elavatar.value,
        dadesUsuari.points = 0

        /*Pongo una variable para poder guardar los mensajes*/
        let validar = validaNouUsuari(dades).missatge;
        if(validar=`L’usuari amb nick: ${dadesUsuari.Nick} s’ha creat correctament`){
            dades.push(dadesUsuari)/*Sirve para añadir el objeto dadesUsuari a tabla que es el nuevo usuario*/
        }
        alert (validar);
        document.querySelector("#ranking").innerHTML= mostraTaula(dades)/*Selecciona el elemento por id que es el id llamado ranking que está en un div y que se muestra por html. Y que es igual a la tabla*/
}