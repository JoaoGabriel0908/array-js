'use strict'

// Criando um array 
const numeros = [20, 10, 15, 35, 30]

// PROBLEMA ! - Acrescentar 100 a cada elemento

// ************* Solução Imperativa *************

// const limite = numeros.length -1;
// let numeros100 = []
// for (let i=0; i<=limite; i++) {
//     numeros100[i] = numeros[i] + 100
// }

// *************************** // ***************************

// ************* Solução Declarativa *************

// O .MAP percorre o array e pode modificar o array
// e retornando um novo ARRAY do mesmo tamanho

// O .MAP passa 3 parametros
// 1° Elemento no Caso o "numero"
// 2° Índice no Caso o "I"
// 3° Array no Caso o array 

// Criando um array que verifica dentro do array e faz a função que quer
// const adicionar100 = (numero) => numero + 100;
// const numeros100 = numeros.map(adicionar100)

// // Testando o código
// console.log("numeros: ", numeros)
// console.log("numeros mais 100: ", numeros100)

// *************************** // ***************************

// PROBLEMA ! - Criar um novo array com o numeros menores que 100

// O .FILTER percorre todo o array filtrando dependendo de uma 
// condição e retorna um ARRAY do mesmo tamanho ou menor

// .FILTER passa 3 parametros
// 1° Elemento no Caso o "numero"
// 2° Índice no Caso o "I"
// 3° Array no Caso o array 

// ************* Solução Declarativa *************
// const filtrar100 = (numero) => numero <= 100;
// const menores100 = numeros.filter(filtrar100)

// console.log("Numeros: ", numeros)
// console.log("Numeros menores que 100: ", menores100)


// *************************** // ***************************

// PROBLEMA ! - SOMAR OS VALORES DOS ELEMENTOS

// O .REDUCE Percorre todo o array aplicando uma função (callback)
//  e retorna um valor único

// .REDUCE passa 4 parametros
// 1° Acumulador
// 2° Elemento(valor)
// 3° Índice
// 4° Array

// const soma = (a,b) => a + b
// const total = numeros.reduce(soma,0)

// console.log("numeros somados: ", total)

// *************************** // ***************************

// PROBLEMA ! - CRIANDO UM NOVO ARRAY QUE MOSTRA OS VALORES AO QUADRADO

const resultado = (numero) => numero*numero
const quadrado = numeros.map(resultado)

console.log("Números ao quadrado: ", quadrado)

// *************************** // ***************************

// PROBLEMA ! - CRIANDO UM ARRAY QUE MOSTRA OS NÚMEROS PARES

const pares = (numero) => numero % 2 == 0
const numPares = numeros.filter(pares)

console.log("Números pares: ", numPares)

// *************************** // ***************************

const media = (numero) => numero 
const soma = (a,b) => a + b /4
const mediaValores = numeros.reduce(soma,0)

console.log("Média dos valores: ", mediaValores)

// *************************** // ***************************

const impares = (numero) => numero % 2 == 1
const numImpares = numeros.filter(impares)
const somar = (a,b) => a + b
const somaImpares = numImpares.reduce(somar,0)

console.log("Somando os números ímpares: ", somaImpares)

// *************************** // ***************************

const desconto20 = (numero) => numero => 20/100
const descontando = numeros.map(desconto20)

console.log("Desconto 20%: ", descontando)
