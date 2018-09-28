/*Dado un arreglo cuyos elementos son de diversos tipos, cree una función que retorna un arreglo 
con los elementos de un solo tipo en específico.El tipo de dato debe ser pasado como parametro. */
function occurences(arreglo, tipo) {
    var tipoArr = [];
    arreglo.forEach(iterador => {
        if(typeof iterador === tipo) {
            tipoArr.push(iterador);
        }
    });
    return tipoArr;
}