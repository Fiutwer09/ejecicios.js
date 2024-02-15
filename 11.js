let tienda = []

function  agregarProducto(nombre , Descripcion, precio, stok, categoria){
    let objetos = 
        {nombre: nombre, 
        Descripcion: Descripcion, 
        precio: precio, 
        stok:stok, 
        categoria:categoria}
tienda.push(objetos);
} 
function listarproducto() {
    console.log(`-----------------LISTA DE PRODCUTOS -----------------`)
    tienda.forEach(objetos=>{
        console.log("Nombre: " , objetos.nombre);
        console.log("Descripción : ", objetos.Descripcion) ;
        console.log("Precio: ", objetos.precio);
        console.log("Stock: ", objetos.stok);
        console.log("Categoría: ", objetos.categoria);
        console.log(`-----------------------------------------`);
    
    })
}

function buscarproducto(nombre) {
    console.log(`------------------BUSCAR PRODUCTOS-----------------------`)
    let encontrado = tienda.find(objetos=>objetos.nombre===nombre);
    if (encontrado) {
        console.log(`Nombre: ${encontrado.nombre}`);
        console.log(`Descripción: ${encontrado.Descripcion}`);
        console.log(`Precio: $${encontrado.precio}`);
        console.log(`Stock: ${encontrado.stok}`);
        console.log(`Categoría: ${encontrado.categoria}`);
        console.log(`-----------------------------------------`);

    } 
    else{console.log(`El producto no existe`)}};

function eliminarproducto(nombre){
    console.log(`------------------ELIMINAR PRODUCTOS-----------------------`)
    tienda = tienda.filter(objetos => objetos.nombre !== nombre);
    console.log(`Se ha eliminado el producto"${nombre}"`);
    console.log(`-----------------------------------------`)
};
    
function actualizarstok(nombre, nuevostok){
    console.log(`-----------------ACTUALIZAR STOK------------------------`)
    let productoEncontrado = false;
    for(let objeto of tienda) {
        if (objeto.nombre === nombre) {
            objeto.stok = nuevostok;
            console.log(`La cantidad en stock de "${nombre}" ha sido actualizada a ${nuevostok}.`)
            productoEncontrado = true;
            }
    if (!productoEncontrado) {
    console.log(`El producto "${nombre}" no se encuentra registrado.`);
    console.log(`-----------------------------------------`)
    }
}
};

    

// Primero, agrega algunos productos a la tienda
agregarProducto('Camisa', 'Camisa de algodón', 20, 50, 'Ropa');
agregarProducto('Pantalón', 'Pantalón vaquero', 30, 30, 'Ropa');
agregarProducto('Zapatos', 'Zapatos deportivos', 40, 20, 'Calzado');

// Luego, puedes listar todos los productos en la tienda
listarproducto();

// También puedes buscar un producto por su nombre
buscarproducto('Pantalón');

// Ahora, eliminamos un producto de la tienda
eliminarproducto('Zapatos');

// Luego, puedes listar todos los productos en la lista
listarproducto();

// Por último, actualizamos el stock de un producto
actualizarstok('Camisa', 60);

// Listamos nuevamente los productos para ver los cambios
listarproducto();
