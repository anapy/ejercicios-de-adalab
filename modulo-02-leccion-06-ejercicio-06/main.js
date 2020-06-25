'use strict';

/**EJERCICIO 6 -- Crear una cesta de peras */
const pearBox = {
    maxNum: 10,
    minNum: 2,
    actNum: 2,
    startNum: 2,

    addPear: function() { 
        this.actNum = parseInt(this.actNum);
        this.actNum++;
    }, 

    removePear: function() { 
        this.actNum = parseInt(this.actNum);
        this.actNum--;
    },

    resetPear: function() { 
        this.actNum = this.startNum;
    } 
}



