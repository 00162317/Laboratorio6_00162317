var listaUno = [];
var listaDos = [];
function Prom(){
    var sum = 0;
    if(listaDos.length > 0){
        for (let i of listaDos){
            sum = sum + i;
        }
        let prom = sum/listaDos.length;
        console.log(prom);
    }
    else{
        console.log("No hay ventas.");
    }
}

function ModStock(){
    var cod = prompt("Ingrese el codigo del producto para modificar su stock: ");
    for(let x of listaUno){
        if(x.Codigo == cod){
            x.Stock = prompt("Ingrese el nuevo valor del stock: ");
        }
    }
}

function RegVen(){
    var c = prompt("Ingrese el codigo del producto vendido: ");
    for(let x of listaUno){
        if(x.Codigo == c){
            if(x.Stock == 0){
                console.log("Ya no queda stock");
            }
            else{
                listaDos.push(x.Venta);
            x.Stock -= 1;
            }
        }
    }
}
function ModStock(){
    var f = 0;
    for(let i of listaUno){
        if(i.Stock == 0){
            console.log(i.Tipo);
            f += 1;
        }
    }
    if( f == 0){
        console.log("Todos tienen stock");
    }

}
function tienda(Codigo,Descripcion,Tipo,PrecioCompra,Venta,Stock){
    this.Codigo=Codigo;
    this.Descripcion=Descripcion;
    this.Tipo=Tipo;
    this.PrecioCompra=PrecioCompra;
    this.Venta=Venta;
    this.Stock=Stock;
}
function Agregar(Codigo,Descripcion,Tipo,PrecioCompra,Venta,Stock){
    var tiendas = new tienda(Codigo,Descripcion,Tipo,PrecioCompra,Venta,Stock);
    listaUno.push(tiendas);
}
function menu(){
    console.log("1. Agregar producto");
    console.log("2. Modificar stock");
    console.log("3. Registrar venta y reducir stock"); 
    console.log("4. Mostrar promedio de ventas realizadas");
    console.log("5. Mostrar productos con stock 0");
    console.log("6. Salir del sistema");
    var variable = parseInt(prompt("Elige una opcion: "));
    switch(variable){
        case 1:
            var Codigo = prompt("Ingrese el codigo: ");
            var Descripcion = prompt("Ingrese la descripcion del producto: ");
            var Tipo = prompt("Ingrese el tipo de producto: ");
            var PrecioCompra = prompt("Ingrese el precio de compra");
            var Venta = prompt("Ingrese el precio de venta: ");
            var Stock = prompt("Ingrese el stock restante: ");
            Agregar(Codigo,Descripcion,Tipo,PrecioCompra,Venta,Stock);
            menu();
            break;
        case 2:
            ModStock();
            menu();
            break;
        case 3:
            RegVen();
            menu();
            break;
        case 4:
            Prom();
            menu();
            break;
        case 5:
            console.log('Adios');
            break;
    }
}