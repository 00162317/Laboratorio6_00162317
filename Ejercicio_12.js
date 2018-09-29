var lista=[];
function persona(nombre,apellido,numTel){
    this.nombre=nombre;
    this.apellido=apellido;
    this.numTel=numTel;
}
function insertando(nombre, apellido, numTel){
    var people = new persona(nombre,apellido,numTel);
    lista.push(people);
}
function mostrarDatos(){
    console.log('---------------------------')
    for(let i=0;i<lista.length;i++){
        console.log('---------------------------')
        console.log('Nombre: '+lista[i].nombre);
        console.log('Apellido: '+lista[i].apellido);
        console.log('Numero telefonico: '+lista[i].numTel);
    }
    console.log('---------------------------');
}
function buscar(names){
    for(let i=0; i<lista.length;i++){
        if(lista[i].nombre==names){
            console.log('---------------------------')
            console.log('Nombre: '+lista[i].nombre);
            console.log('Apellido: '+lista[i].apellido);
            console.log('Numero telefonico: '+lista[i].numTel);
        }
    }
    console.log('---------------------------');
}
function eliminar(array, numero){
    return array.slice(0, numero).concat(array.slice(numero+1));
}
function Menu(){
    console.log('1. Ingresar una persona');
    console.log('2. Buscar una Persona');
    console.log('4. Eliminar una persona');
    console.log('5. Mostrar Datos');
    console.log('6. Salir');
    x=parseInt(prompt('Ingrese una opcion: '));
    switch(x){
        case 1:
            var varUno = prompt('Ingrese su nombre: ');
            var varDos= prompt('Ingrese su apellido: ');
            var varTres = prompt('INgrese su numero telefonico: ');
            insertando(varUno,varDos,varTres);
            console.log('Ingresado');
            Menu();
            break;
        case 2:
            var nom = prompt('Ingrese el nombre de la persona a buscar: ');
            buscar(nom);
            Menu();
            break;
        case 3:
            break;
        case 4:
            let per = parseInt(prompt('Indique el numero de la persona a eliminar: '));
            lista=eliminar(lista,(per-1));
            console.log('Eliminado');
            Menu();
            break;
        case 5:
            mostrarDatos();
            Menu();
            break;
        case 6:
            console.log('Adios');
            break;
    }
}

