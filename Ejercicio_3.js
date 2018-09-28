/* Realice una función que reciba un arreglo como parámetro
 y liste los tipos de datos de sus elementos y cuantos de cada tipo. */
function type(arreglo){
    var arrayUno=[];
    var arrayDos=[];
    for(let i of arreglo){
        if(arrayUno.includes(typeof i)){
            arrayDos[arrayUno.indexOf(typeof i)]+=1;
        }
        else{
            arrayUno.push(typeof i);
            arrayDos.push(i);
        }
    }
    for(let x = 0 ; x<arrayUno.length;x++){
        console.log(arrayUno[x]+":"+arrayDos[x]);
    }
}
type([1,-2,3,'hola',false,[1,2,3]]);