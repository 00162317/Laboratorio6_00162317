/*Realice una función que reciba por parametro los siguientes datos al usuario: Nombre, Apellido, 
Fecha de nacimiento, Número de teléfono, Correo electrónico. Estos deberán ser almacenado en 
un objeto y mostrados en la consola del navegador. */
function persona(nombre,apellido,fechaNac,numTel,correo){
    this.nombre=nombre;
    this.apellido=apellido;
    this.fechaNac=fechaNac;
    this.numTel=numTel;
    this.correo=correo;
}
function crearPersonas(){
    var perUno = new persona("Roberto","Hernandez","17/08/1998","2257-7777","00162317");
    console.log(perUno.nombre,perUno.apellido,perUno.fechaNac,perUno.numTel,perUno.correo);
}
