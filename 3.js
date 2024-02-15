 let home = ["tv", "equipo", "baño", "cocina", true,false, 20, 24, 50,45];

 let buscar = home.indexOf ("equipo");
 
 if (buscar == -1) {
    console.log(`El elemento , ${equipo}, no se encuentra en la posicion, ${buscar}`);
 }
 else{
 console.log(`El elemento, ${home[buscar]}, se encuentra en la posicion, ${buscar}`);

}