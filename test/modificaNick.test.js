import { modificaNick } from "../src/js/funciones/modificaNick.js";


import { assert, should } from 'chai';
should();

describe("Función modificaNick ...", ()=>{
    it("recibe ' paco pera ' y devuelve paco_pera", ()=>{
        assert(modificaNick(' paco pera '), 'paco_pera')
    })

    it("recibe 'Eduardo Pi' y devuelve paco_pera", ()=>{
        assert(modificaNick('Eduardo Pi'), 'EDUARDO_PI')
    })

    it("recibe 'Edu Pi pA' y devuelve EDU_PI_PA", ()=>{
        assert(modificaNick('Edu Pi pA'), 'EDU_PI_PA')
    })
})