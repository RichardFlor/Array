"use strict"
// const numeros = [3, 12, 81, 13, 20, 17]
//Criar um novo array 
//1) Adicionar 100 a cada elemento
//2) Com elementos pares
//3) Soma de todos o elementos

// const numeros = [3, 12, 81, 13, 20, 17]
// console.log(numeros)

//1

  const resultado = [3, 12, 81, 13, 20, 17] 
     for (var i = 0; i< resultado.length; i++){
          resultado[i] = resultado[i] + 100;
      }
      console.log(resultado);

//2
//  var numeros = [3, 12, 81, 13, 20, 17]
//  function buscarNumerosPares (resultado) {
//     if (resultado % 2 == 0) 
//      return resultado;
//  }
//  var numerosPares = numeros.filter(buscarNumerosPares);
//  console.log(numerosPares);


//3
//  var total = 0;
//  const resultado = [3, 12, 81, 13, 20, 17] 
//      for (var i = 0; i< resultado.length; i++){
//          total += resultado[i];
//     }
//      console.log(total);