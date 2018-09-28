/* Cree una función que dada una cadena, retorne la cadena encriptada utilizando la clave murciélago. */
function encriptar(palabra) {
    var arreglo = palabra.split('')
    var arrays = [];
    arreglo.forEach(iterador => {
        switch (iterador) {
            case 'm':
            arrays.push("0");
                break;

            case 'M':
            arrays.push("0");
                break;

            case 'u':
            arrays.push("1");
                break;
                
            case 'U':
            arrays.push("1");
                break;

            case 'r':
            arrays.push("2");
                break;

            case 'R':
            arrays.push("2");
                break;
                
            case 'c':
            arrays.push("3");
                break;

            case 'C':
            arrays.push("3");
                break;

            case 'i':
            arrays.push("4");
                break;

            case 'I':
            arrays.push("4");
                break;
                
            case 'e':
            arrays.push("5");
                break;

            case 'E':
            arrays.push("5");
                break;

            case 'l':
            arrays.push("6");
                break;
                
            case 'L':
            arrays.push("6");
                break;

            case 'a':
            arrays.push("7");
                break;

            case 'A':
            arrays.push("7");
                break;
                
            case 'g':
            arrays.push("8");
                break;

            case 'G':
            arrays.push("8");
                break;

            case 'o':
            arrays.push("9");
                break;

            case 'O':
            arrays.push("9");
                break;
        
            default:
            arrays.push(iterador);
                break;
        }
    });
        
    return arrays.join('').toString();
}