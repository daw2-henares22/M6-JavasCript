const dades = 
[
    {
        Nick : "Rubencinos",
        password : "12345",
        avatar : "avatar1.png",
        points : "10"
    },
    {
        Nick : "Juanjin",
        password : "12345",
        avatar : "avatar2.png",
        points : "9"
    },

    {
        Nick : "David",
        password : "12345",
        avatar : "avatar3.png"/*'<a href="images/avatares/avatar3.png"><img src="images/avatares/avatar3.png" alt="avatar3">'*/,
        points : "1"
    },

    {
        Nick : "Dani",
        password : "12345",
        avatar : "avatar4.png"/*'<a href="images/avatares/avatar4.png"><img src="images/avatares/avatar4.png" alt="avatar4">'*/,
        points : "0"
    },

    {
        Nick : "Miguelink",
        password : "12345",
        avatar : "avatar3.png"/*'<a href="images/avatares/avatar5.png"><img src="images/avatares/avatar5.png" alt="avatar5">'*/,
        points : "7"
    }
];





import{ saludar } from "./src/js/funciones/saludar.js"


document.getElementById('app').innerHTML=saludar()

//document.getElementById('app').innerHTML=saludar("Pepe")