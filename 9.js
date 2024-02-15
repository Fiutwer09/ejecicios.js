let elementos = [
    {tipo:"animal" , nombre:"leon", tamaño:5},
    {tipo:"planta",nombre:"arroz",tamaño:1},
    {tipo: "animal", nombre:"vaca",tamaño:2},
    {tipo:"planta", nombre:"guisante",tamaño:3},
    {tipo:"animal", nombre:"pajaro",tamaño:0.5}
];

let grupos = {};

for (let elemento of elementos) {
    let tipo = elemento.tipo;

    if (!grupos[tipo]) {
        grupos[tipo] = [];
    }

    grupos[tipo].push(elemento);
}
console.log(grupos);