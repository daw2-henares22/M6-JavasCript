import { assert } from "chai";
import { saludar } from "../src/js/funciones/saludar.js";

describe ('Funcion saludar',()=>{
    it('Espero Hola Pepe si le paso Pepe',()=>{
        assert.equal(saludar("Pepe"),"Hola Pepe")
    })
})