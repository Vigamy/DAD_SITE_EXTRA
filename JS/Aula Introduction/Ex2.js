let construcao = 40/100, melhoria = 30/100, invest = 20/100, funcionarios = 10/100
let lucro = window.prompt("Qual foi o lucro da empresa?")
window.alert(`
    Parte para a construção de uma nova unidade: R$${(lucro*construcao)}
    Parte para melhorias internas: R$${lucro*melhoria}
    Parte para nossos investidores: R$${lucro*invest}
    Parte para a os funcionarios: R$${lucro*funcionarios}
`)