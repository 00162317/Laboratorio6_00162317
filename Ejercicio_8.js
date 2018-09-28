/*Escriba una función que realice la suma de dos matrices A y B. Deposite el resultado en la matriz C.
 Deberá validar que la operación se pueda realizar.*/
function sumarMatriz(mat1,mat2){
    var matrizSuma = new Array(3);
    for(let i = 0; i<3;i++){
        matrizSuma[i] = new Array(3); 
    }
    for(let x=0;x<3;x++){
        for(let y=0;y<3;y++){
            matrizSuma[x][y]=mat1[x][y]+mat2[x][y];
        }
    }
    for(let x = 0; x < 3; x++){
        for(let y=0;y<3;y++){
            console.log(matrizSuma[x][y]+" ");
        }
    }
}
/*var mat1=[ [1,2,4],[3,1,4],[9,3,1] ];
var mat2=[ [1,2,4],[3,1,4],[9,3,1] ];*/
sumarMatriz([ [1,2,4],[3,1,4],[9,3,1] ],[ [1,2,4],[3,1,4],[9,3,1] ])