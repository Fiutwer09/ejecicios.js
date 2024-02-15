let animals = ["perro","gato","conejo","loro","perro","loro"]

let duplicados =[]
for (let elemento of animals) {
    if (!duplicados.includes(elemento)) {
        duplicados.push(elemento);

}}
console.log("Animales sin repetir: ", duplicados)