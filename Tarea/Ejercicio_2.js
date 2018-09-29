class convertir{
      
    constructor(){}
    Temperatura(u1, u2, me){
        let medida;
        if(u1 == "c" && u2 == "f"){
            medida = (me*1.8)+32; 
        } else if(u1 == "f" && u2 == "c"){
            medida = (me-32)/1.8; 
        } else if(u1 == "k" && u2 == "f"){
            medida = (me-273.15)*1.8 + 32; 
        } else if(un1 == "f" && u2 == "k"){
            medida = (me-32)/1.8 + 273.15;
        } else if(u1 == "k" && u2 == "c"){
            medida = me-273.15; 
        } else if(u1 == "c" && u2 == "k"){
            medida = me+273.15; 
        } 
        return medida;
    }

    proceso(me, de, a, letra){
        switch(letra){
            case 'L':
                var long = new proceso();
                console.log(long.Longitud(de, a, me));
                break;
            case 'T':
                var long = new proceso();
                console.log(long.Temperatura(de, a, me));
                break;
        }
    } 
    Longitud(u1, u2, me){
        let medidaDos
        if(u1 == "m" && u2 == "cm"){
            medidaDos = me*100;
        } else if(u1 == "cm" && u2 == "m"){
            medidaDos = me/100;
        } else if(u1 == "km" && u2 == "m"){
            medidaDos = me*1000;
        } else if(u1 == "m" && u2 == "km"){
            medidaDos = me/1000;
        } else if(u1 == "ft" && u2 == "m"){
            medidaDos = me*0.3048;
        } else if(u1 == "m" && u2 == "ft"){
            medidaDos = me/0.3048;
        } 
        return medidaDos;
    }
    
} 
var variable = new proceso(); 