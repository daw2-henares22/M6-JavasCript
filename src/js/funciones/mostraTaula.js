export const mostraTaula(dades)=>{/*Esto lo que hace es una función de la variable dades*/
       /*En la variable Tabla creo una Tabla html*/ 
       var Tabla =`

        <table class="table">
                    <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Nick</th>
                        <th scope="col">Avatar</th>
                        <th scope="col">Puntos</th>
                    </tr>
                    </thead>
                    `
        /*Este for recorre todo el array*/
        for(let index=0;index<dades.length;index++){

                            /*Pongo $index porque como recorre todo el array hace que cada usuario tenga su numero del 0 hasta los usuarios que sean*/
                            /*Esto lo que hace es recorrer todo el array y el objeto Nick para mostrar todos los Nicks*/
                            /*Entro a la carpeta de las imagenes para así poder mostrar los png y pongo el recorrido del array para que muestre cada imagen, no solo una*/
                            /*Esto lo que hace es recorrer todo el array y el objeto points para mostrar todos los puntos*/
                Tabla+=`
                    
                    <tr>
                        <th scope="row">${index}</th>
                        <td>${dades[index].Nick}</td>
                        <td><img class="avatar" src="images/avatares/${dades[index].avatar}"</td>
                        <td>${dades[index].points}</td>
                    </tr>
                   `
            
        }
        Tabla+=`</table>`;
        
        return Tabla;
    }