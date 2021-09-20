"use strict"
// const numeros = [3, 12, 81, 13, 20, 17]
//Criar um novo array 
//1) Adicionar 100 a cada elemento
//2) Com elementos pares
//3) Soma de todos o elementos

// const numeros = [3, 12, 81, 13, 20, 17]
// console.log(numeros)

//1

//   const resultado = [3, 12, 81, 13, 20, 17] 
//      for (var i = 0; i< resultado.length; i++){
//           resultado[i] = resultado[i] + 100;
//       }
//       console.log(resultado);

//2
//  var numeros = [3, 12, 81, 13, 20, 17]
//  function buscarNumerosPares (resultado) {
//     if (resultado % 2 == 0) 
//      return resultado;
//  }
//  var numerosPares = numeros.filter(buscarNumerosPares);
//  console.log(numerosPares);

//ou

//const ePar = (numero) => numero % 2 ==0
//const numerosPares = numeros .filter(ePar)
                                //1º elemento
                                //2º indice
                                //3ºArray
                            
//3
//  var total = 0;
//  const resultado = [3, 12, 81, 13, 20, 17] 
//      for (var i = 0; i< resultado.length; i++){
//          total += resultado[i];
//     }
//      console.log(total);


//const numeros = [3, 12, 81, 13, 20, 17]
// let cont = 0
//const limite = 6
//let total = 0
//while (cont < limite){
    //total = total + numero[cont]
    //cont++
//}

//ou

//const somar = (a,b) => a+b
//const total = numeros.reduce(somar, 0 )
                        //1ºAcumulador
                        //2ºElemento
                        //3ºIndice
                        //4ºArray


//MAP (quadradro de cada elemento)
// const numeros = [3, 12, 81, 13, 20, 17]

// const quadrado = (numero) => numero ** 2
// const numerosQuadrado = numeros.map(quadrado)
// console.log(numerosQuadrado)
//
//

//FILTER (numeros menores que 20)

// const numeros = [3, 12, 81, 13, 20, 17]

// const eMenor20 = (numero) => numero < 20
// const numerosMenores20 = numeros.filter(eMenor20)
// console.log(numerosMenores20)
//
//

// Soma de todos os números menores que 20 elevados ao quadrado
// const numeros = [3, 12, 81, 13, 20, 17]
// const quadrado = (numero) => numero ** 2
// const eMenor20 = (numero) => numero < 20
// const soma = (a,b) => a + b
// const resultado = numeros.filter(eMenor20)
//                          .map(quadrado)
//                          .reduce(soma)
// console.log(resultado)


//7- Desconto de 20% para todos os elementos
//8- Desconto de 20% somente para os numeros impares 

//EXERCICIO7
const numeros = [3, 12, 81, 13, 20, 17] 
const desconto20 = (numero) => numero * 0.8
const desconto = numeros.map(desconto20)
console.log(desconto)

//EXERCICIO8
const eImpares = (num) => num%2 != 0;
const resultado = numeros.filter(eImpares)
console.log(resultado)