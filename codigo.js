
function masamuscular(alt, kg) {
    kg = prompt("Diga su peso en kilogramos");
    kilogramos = parseFloat(kg);
    alt=prompt("Diga su estatura en centimetros: ");
    alt= parseFloat(alt) / 100;
    
    do {
        let estaturaCuad= alt ** 2;
        let masacorporal= kilogramos / estaturaCuad;
    
        if(masacorporal <= 16){
            alert("Tienes un infrapeso severo, su imc es: " + masacorporal);
        }else if(masacorporal > 16 && masacorporal <= 16.99){
            alert("Tienes un infrapeso moderado, su imc es: " + masacorporal);
        }else if(masacorporal >= 17 && masacorporal <= 17.99){
            alert("Tienes un infrapeso medio, su imc es: " + masacorporal);
        }else if(masacorporal >= 18 && masacorporal <= 19.99){
            alert("Tienes en infrapeso, su imc es: " + masacorporal);
        }else if(masacorporal >= 20 && masacorporal <= 24.99){
            alert("Tienes un peso normal, su imc es: " + masacorporal);
        }else if(masacorporal >= 25 && masacorporal < 29.99){
            alert("Tienes un poco de sobrepeso, su imc es: " + masacorporal);
        }else if(masacorporal >= 30 && masacorporal <= 32.99){
            alert("Tienes un poco de obesidad, su imc es: " + masacorporal);
        }else if(masacorporal >= 33 && masacorporal <= 34.99){
            alert("Tienes obesidad tipo 1, su imc es: " + masacorporal);
        }else if(masacorporal >= 35 && masacorporal < 39.99){
            alert("Tienes obesidad tipo 2, su imc es: " + masacorporal);
        }else{
            alert("Ud posee obesidad tipo 3, su imc es: " + masacorporal);
        }
    } 
    while (kg == "terminar");
    return masamuscular;
}

masamuscular();