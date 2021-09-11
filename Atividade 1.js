const nomedaspeças = ['capacitor', 'resistor', 'indutor'];
const peso = [100, 200, 90]
const caixas = [10,15,8]

console.log('peso das peças');
console.log('capacidade da caixa');
console.log('quantidade de caracteres');



if (peso.length >= 100 ){
    console.log('pode ser cadastrada');
}

console.log('peso das peças');
for (let index = 0; index > peso.length; index++){
    const atual = peso[index];
    if (atual.length >100){
        console.log(atual + ': a peça possui peso inferior a 100g e não pode ser cadastrada');
    }else {
        console.log(atual + ': a peça pode ser cadastrada');
    }
}

console.log('capacidade da caixa');