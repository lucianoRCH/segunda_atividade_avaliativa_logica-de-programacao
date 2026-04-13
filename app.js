
/* 1 -  função com if e else que chame while para calcular a média de 5 notas, com nota (0 a 10). 7 5 */


const r = require('readline-sync');

let soma = 0;
let contador = 1;
var nome = r.question("Digite o nome do aluno: ");

console.log(`aluno: ${nome}`);  
console.log(`Digite as 5 notas (0 a 10) do aluno: `);

while (contador <= 5){
    let nota = parseFloat(r.question(`Nota ${contador}: `));
soma += nota;
contador++;
}
let media = soma / 5;
console.log("A média é: " + media.toFixed(2) );

function calcularMedia(){
    if (media >= 6){
        console.log(`Aluno(a) ${nome} com média ${media.toFixed(2)} está APROVADO(a)`);
    } else {
        console.log(`Aluno(a) ${nome} com média ${media.toFixed(2)} está REPROVADO(a)`);
    }
}

calcularMedia();