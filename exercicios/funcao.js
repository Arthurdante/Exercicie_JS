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
export function tabuada1a10(num) {
    let resultado = '';
    for (let i = 1; i <= 10; i++) {
        const multiplicacao = num * i
        resultado += `${num} x ${i} = ${multiplicacao}, `
    }
    
    return  resultado 
}