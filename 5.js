let people = [
    { name: 'John', age: 23 },
    { name: 'Jane', age: 17 },
    { name: 'Bob', age: 45 },
    { name: 'Alice', age: 36 },
    {name:'Mike', age:13}
];

// filtrar nombre de los mayores de edad 
console.log(people.filter(x=>x.age>=18).map(people=>people.name));

// Usa un bucle para recorrer el array filtrado y realizar alguna acción con cada elemento (por ejemplo, mostrar un mensaje).

for(let peoples of people) {
    if(peoples.age >= 18){
        console.log(`Nombre: ${peoples.name}, Edad:  ${peoples.age}, Este usuario es mayor de edad`);}
        else
    console.log(`Nombre: ${peoples.name}, Edad:  ${peoples.age}, Este usuario es menor de edad`);
    }
       

