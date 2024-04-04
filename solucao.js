/* QUESTÃO 1 */
let indice= 13, soma=0 ,k = 0

while(k< indice){
  k = k + 1
  soma = soma + k
}

alert(soma) 
//será imprimido 91

/*2) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência. */

class Fibonacci {

  constructor(numberSelector) {
    this.numberSelector = numberSelector;
  }

  isNumberInFibonacci() {
    let last = 0;
    let fist = 1;

    while (last <= this.numberSelector) {
      if (last === this.numberSelector) {
        return true;
      }
      let next = last + fist;
      last = fist;
      fist = next;
    }
    return false;
  }
}

const numberToCheck = Number(prompt("Digite um número:"));

const isfibonacci = new Fibonacci(numberToCheck);
if (isfibonacci.isNumberInFibonacci()) {
  console.log(`${numberToCheck} pertence à sequência de Fibonacci.`);
} else {
  console.log(`${numberToCheck} não pertence à sequência de Fibonacci.`);
}

/* 3) Descubra a lógica e complete o próximo elemento:



a) 1, 3, 5, 7, ___ R: 9,pois é o ultimo digito + 2

b) 2, 4, 8, 16, 32, 64, ____ R: 128, pois é o ultimo digito multiplicado por 2

c) 0, 1, 4, 9, 16, 25, 36, ____ R: 49, pois é sempre o proxima base elevado a 2, logo 7 elevado a 2 é 49

d) 4, 16, 36, 64, ____ R: 100, é sempre a base do ultimo digito + 2 elevado a potencia de 2

e) 1, 1, 2, 3, 5, 8, ____ R: 13, sequência de Fibonacci

f) 2,10, 12, 16, 17, 18, 19, ____ R:200, é o proximo numero que tem como inicial a letra D, lembrei rapidamente pois meu professor de matemática fez comigo essa seguencia,nunca esqueço

*/

/* 4)*/

/*Entendendo que há 3 salas cada um com uma lâmapda:
Na primeira volta:

- Ligo o primeiro interruptor por 5 minutos e o desligo, ligo o segundo interruptor e na mesma hora vou até uma das 3 salas
- Se a lampada estiver acessa, pertence ao segundo interruptor, se estiver desligada e quente pertence ao primeiro interruptor , se estiver desligada e fria pertence ao terceiro interruptor.

Na segunda volta:
- Sabendo já a qual pertence um interruptor, apenas deixo um ligado e outro desligado entre o restantes
- Vou até outra sala e descubro os outros dois. */

/* 5) Escreva um programa que inverta os caracteres de um string. */

class StringReverse {
  constructor(string) {
    this.string = string;
  }

  reverse() {
    let reversedString = '';

    for (let i = this.string.length - 1; i >= 0; i--) {
      reversedString += this.string[i];
    }

    return reversedString;
  }
}

const newStrReverse = new StringReverse("hipopótamo");
console.log(newStrReverse.reverse());
