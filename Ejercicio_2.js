/*Realice una función que reciba un arreglo de datos numéricos, 
y muestre la suma de todos los elementos del arreglo y su promedio. */
function sumArreglosPromedio(arreglo) {
    var contador = 0;
    if(arreglo.length > 0) {
        arreglo.forEach(number => {
            contador += number;
        });
        console.log("Total suma: " + contador);
        console.log("Total promedio: " + contador/arreglo.length);
        return;
    }
    console.log("Arreglo vacio");
}