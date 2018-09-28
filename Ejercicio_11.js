/*Realice una función que cree un objeto usuario (Idem al anterior),
 y lo almacene en un arreglo de usuarios. El arreglo debe de ser global. */
var m= new Array;
function persona(nombre,apellido,fechaNac,numTel,correo){
    this.nombre=nombre;
    this.apellido=apellido;
    this.fechaNac=fechaNac;
    this.numTel=numTel;
    this.correo=correo;
}
function crearPersonas(){
    var perUno = new persona("Roberto","Hernandez","17/08/1998","2257-7777","00162317");
    m.push(perUno);
}
