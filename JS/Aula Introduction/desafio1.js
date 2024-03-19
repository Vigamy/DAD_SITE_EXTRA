let usuarios = 10000
let tp1 = (35/100 * usuarios)
let tp2 = (20/100 * usuarios)

let vendas1 = (8/100 * tp1)
let vendas2 = (10/100 * tp2)

let renda1 = (vendas1 * 60.51)
let renda2 = (vendas2 * 51.73)

window.alert(`
---------------------------------------------------
Tipo I:          ${tp1}           |    Tipo I: ${tp1}
N° de Vendas:    ${vendas1}       |    N° de Vendas: ${vendas1}
Retorno:         ${renda1}        |    Retorno: ${renda1} 
---------------------------------------------------
`)
