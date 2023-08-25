export function somar(num1, num2) {
    return num1 + num2
}
export function subtrair(num1, num2) {
    return num1 - num2
}
export function multiplicar(num1, num2) {
    return num1 * num2
}
export function dividir(num1, num2) {
    return num1 / num2
}
export function celsiofahrenheit(celsius) {
    return (9*celsius+160)/5
}
export function quilometrosmilha(quilometros) {
    return quilometros * 1.60934
}
export function segundoprelogio(tempo_em_segundos) {

    const horas = tempo_em_segundos / 3600
    const minutos = (tempo_em_segundos % 3600) / 60
    const segundos = tempo_em_segundos % 60
    const tempo = `${parseInt(horas)}:${parseInt(minutos)}:${parseInt(segundos)}`

    return tempo
}
export function quilometrosmetros(quilometros) {

    const metro = quilometros / 100
    const centimetro = quilometros % 100
    const medida = `${parseInt(metro)},${parseInt(centimetro)}`

    return medida
}
export function tabuada1a10(num1) {
    let resultado = ''
    for (let i = 1; i <= 10; i++) {
        const multiplicacao = num1 * i
        resultado += `${num1} x ${i} = ${multiplicacao}, `
    }
    
    return  resultado 
}
export function aprovado(num1, num2, num3) {
    let resultado = (num1 + num2 + num3)/3
    if(resultado>=7)
    {
        resultado= 'aprovado'
    }else
    {
        resultado= 'reprovado'
    }
    return  resultado 
}
export function imc(sexo, altura) {
    let resultado = altura
    if(sexo == 'homem'||'Homem'||'h'||'H'||'macho'||'Macho')
    {
        resultado = (72.7 * altura) - 58
    }else if(sexo = 'Mulher'||'mulher'||'f'||'F'||'femea'||'Femea'||'fêmea'||'Fêmea')
    {
        resultado = (62.1*altura)-44.7
    }
    resultado = resultado.toFixed(2);
    return  resultado 
}
export function operacao(operacao,num1, num2) {
    let resultado
    if(operacao == 1){
		resultado =(num1 + num2)
    }else if (operacao == 2){
		resultado =(num1 - num2);
    }else if (operacao == 3){
		resultado =(num1 * num2);
    }else{
        resultado =(num1 / num2)
    }
        return resultado
}
export function posiounega(num1) {
    let resultado
    if(num1 > 0){
		resultado ='positivo'
    }else if (num1 < 0){
		resultado ='negativo'
    }else{
        resultado ='é igual a 0'
    }
        return resultado
}
export function parouimpar(num1) {
    let resultado
    if(num1 == 0){
		resultado ='neutro'
    }else if(num1 % 2 == 0){
		resultado ='par'
    }else{
        resultado ='impar'
    }
        return resultado
}
export function maiorque(num1,num2) {
    let resultado
    if(num1 > num2){
		resultado =`${num1} maior que o ${num2}`
    }else if(num1 < num2){
		resultado =`${num2} maior que o ${num1}`
    }else{
        resultado =`${num1} igual a ${num2}`
    }
        return resultado
}
export function triangulo(a, b, c, base, altura) {
    let resultado
    if (a <= 0 || b <= 0 || c <= 0) {
        return resultado = `Medidas inválidas. Todos os lados devem ser positivos verifique os valores a=${a} b=${b} c=${c}`
    }

    if (a + b > c && a + c > b && b + c > a) {
        resultado = 'Triângulo válido. A área é '
        resultado += (base * altura / 2)
    } else {
        resultado = `Triângulo inválido verifique os valores a=${a} b=${b} c=${c}`
    }
    return resultado
}