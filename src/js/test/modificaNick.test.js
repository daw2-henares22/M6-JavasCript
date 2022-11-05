import { modificaNick } from "../funciones/modificaNick.js";


import { assert, should } from 'chai';
should();

describe("Función modificaNick ...", ()=>{
    it("recibe ' paco pera ' y devuelve paco_pera", ()=>{
        assert(modificaNick(' paco pera '), 'paco_pera')
    })
})

upercase y lowercase dijo en  esta function.