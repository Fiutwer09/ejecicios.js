let caja = ["juan",true,23,"carlos",false,18, {ciuda: "Armenia"}];
let objeto= {};

caja.forEach((elementos,indice)=> {
    objeto[`propiedad${indice+1}`] = elementos;

});
console.log(objeto);