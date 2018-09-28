/*Realice una función en JS, que dados un número y un arreglo como parámetros,
 retorne cuantas ocurrencias existen de ese número dentro del arreglo. */
function ocurrencias(arreglo, numero) {
    var contador = 0;
    arreglo.forEach(iterador => {
        if(iterador === numero)
            contador += 1;
    });
    return contador;
}