/*En las prácticas de laboratorio de física, se pide entregar un reporte con todas las mediciones 
que se han realizado junto con su promedio e incerteza. Para el cálculo de dichos indicadores 
se hará uso de las siguientes fórmulas: */
function fisica(arreglo){
    let prom=0;
    for(let i of arreglo){
        prom+=1;
    }
    prom=prom/arreglo.length;
    let sum=0;
    let incert;
    for(let x of arreglo){
        sum+=(x-prom)**2;
    }
    incert = Math.sqrt((1/(arreglo.length-1))*sum);
    console.log("La incerteza es: "+ prom+" +- "+ incert);
}