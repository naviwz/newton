function resolverEcuacion() {
    var valorInicial = parseFloat(document.getElementById("valor-inicial").value);
    
    // Funcion de la ecuacion no lineal
    function ecuacion(x) {
        return Math.pow(x, 3) - 2 * x - 5;
    }
    
    // Derivada de la función de la ecuacion no lineal
    function derivadaEcuacion(x) {
        return 3 * Math.pow(x, 2) - 2;
    }
    
    // Metodo de Newton para resolver la ecuación no lineal
    function metodoNewton(x0, ecuacion, derivadaEcuacion, tolerancia) {
        var x = x0;
        var contador = 0;
        
        while (Math.abs(ecuacion(x)) > tolerancia) {
            x = x - ecuacion(x) / derivadaEcuacion(x);
            contador++;
        }
        
        return { resultado: x, iteraciones: contador };
    }
    
    var resultado = metodoNewton(valorInicial, ecuacion, derivadaEcuacion, 0.0001);
    
    document.getElementById("resultado").innerHTML = "Resultado: " + resultado.resultado.toFixed(4) +
        "<br />Numero de iteraciones: " + resultado.iteraciones;
        
}
