/*
const flocos = 30/100, morango = 20/100, morangoFlocos = 15/100
const consumidores = 1000
let caixaFlocos = (consumidores * flocos + (consumidores*morangoFlocos)*3) 
let caixaMorango = (consumidores * morango + (consumidores*morangoFlocos)*2)
window.alert(`Flocos: ${caixaFlocos}
Morango: ${caixaMorango}`)
*/
// SLA MANOOO


// Definindo as porcentagens de clientes que compram cada tipo de sorvete
const porcentagemFlocos = 0.30;
const porcentagemMorango = 0.20;
const porcentagemFlocosMoraSeparados = 0.15;

// Definindo o número total de consumidores
const totalConsumidores = 1000;

// Calculando o número de caixas de sorvetes de Flocos e Morango a serem adquiridas
const caixasFlocos = Math.floor(totalConsumidores * porcentagemFlocos);
const caixasMorango = Math.floor(totalConsumidores * porcentagemMorango);

// Calculando o número adicional de caixas de Flocos e Morango para os 15%
const caixasAdicionais = Math.floor(totalConsumidores * porcentagemFlocosMoraSeparados);
const caixasFlocosAdicionais = Math.floor(caixasAdicionais * (2/5)); // 2/5 vai para Flocos
const caixasMorangoAdicionais = Math.floor(caixasAdicionais * (3/5)); // 3/5 vai para Morango

// Somando as caixas adicionais às caixas originais
const totalCaixasFlocos = caixasFlocos + caixasFlocosAdicionais;
const totalCaixasMorango = caixasMorango + caixasMorangoAdicionais;

// Apresentando os resultados
console.log(`Número de caixas de sorvetes de Flocos a serem adquiridas: ${totalCaixasFlocos}`);
console.log(`Número de caixas de sorvetes de Morango a serem adquiridas: ${totalCaixasMorango}`);
