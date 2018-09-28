/*Elabore una función que llene un arreglo con 20 números de forma aleatoria (random), 
y que pida al usuario adivinar un número, si lo adivina mostrará un mensaje indicando que ganó,
 si no mostrará que perdió. */
function adivinar(num) {
    var arr = [];
    for(let i=0; i<20; i++) {
        arr.push(Math.floor(Math.random()*100));
    }
    console.log(arr);
    if(arr.includes(num)) {
        console.log("Usted ha ganado!");
        return;
    }
    console.log("Usted ha perdido!");
}