/* Dado un arreglo de números enteros despliegue la suma del primero y último elemento, la suma del segundo y penúltimo, la suma del tercer y antepenúltimo, y así sucesivamente hasta llegar al centro del arreglo. 
Si la cantidad de elementos es impar, el elemento central será sumado consigo mismo.*/
function sumar(arreglo) {
    console.log(arreglo);
    if(arreglo.length % 2 == 0) {
        for(let i=0; i<arreglo.length/2; i++) {
            console.log(arreglo[i] + " + " + arreglo[arreglo.length - (1+i)] + " = " + (arreglo[i] + arreglo[arreglo.length - (1+i)]));
        }
        return;
    }
    for(let i=0; i<Math.floor(arreglo.length/2); i++) {
        console.log(arreglo[i] + " + " + arreglo[arreglo.length - (1+i)] + " = " + (arreglo[i] + arreglo[arreglo.length - (1+i)]));
    }
    console.log(arreglo[Math.floor(arreglo.length/2)] + " + " + arreglo[Math.floor(arreglo.length/2)] + " = " + (arreglo[Math.floor(arreglo.length/2)] * 2));
}