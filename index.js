const express = require("express")
const { somar, subtrair, multiplicar, dividir, celsiofahrenheit, quilometrosmilha, segundoprelogio, 
  tabuada1a10, quilometrosmetros,aprovado, imc, operacao, posiounega,
  parouimpar, maiorque, triangulo, impostoderenda, mediaponderada, valorcarro
 } = require("./exercicios/funcao.js")

const app = express()
app.use(express.json())
const port = 3000

app.post("/api/exercicio1", (req, res) => {
  const result = somar(req.body.num1, req.body.num2)
  res.status(200).json({ mensage: `O resultado é ${result}` })
})

app.post("/api/exercicio2", (req, res) => {
  const result = multiplicar(req.body.valorhora, req.body.quantidadedehoras)
  res.status(200).json({
     mensage: `O salario é ${result} reais` 
})
})

app.post("/api/exercicio3", (req, res) => {
  const result = somar(somar(req.body.pesopessoa1, req.body.pesopessoa2), somar(req.body.pesopessoa3, somar(req.body.pesopessoa4, req.body.pesopessoa5)))
  res.status(200).json({ mensage: `A media das 5 pessoas é ${result / 5 }` })
})

app.post("/api/exercicio4", (req, res) => {
  const result = celsiofahrenheit(req.body.celsio)
  res.status(200).json({ mensage: `O resultado em Fahrenheit é ${result}` })
})

app.post("/api/exercicio5", (req, res) => {
  const result = quilometrosmilha(req.body.quilometros)
  res.status(200).json({ mensage: `Está é a quantidade em milhas ${result}` })
})

app.post("/api/exercicio6", (req, res) => {
  const result = segundoprelogio(req.body.temposegundo)
  res.status(200).json({ mensage: `O horario é ${result}` })
})

app.post("/api/exercicio7", (req, res) => {
  const result = quilometrosmetros(req.body.quilometros)
  res.status(200).json({ mensage: `Está em ${result} metros` })
})

app.post("/api/exercicio8", (req, res) => {
  const result = tabuada1a10(req.body.num1)
  res.status(200).json({ mensage: `Tabuada ${result}` })
})

app.post("/api/exercicio9", (req, res) => {
  const result = aprovado(req.body.num1, req.body.num2, req.body.num3)
  res.status(200).json({ mensage: `Você foi ${result}` })
})

app.post("/api/exercicio10", (req, res) => {
  const result = imc(req.body.sexo, req.body.altura)
  res.status(200).json({ mensage: `O seu imc é ${result}` })
})

app.post("/api/exercicio11", (req, res) => {
  const result = operacao(req.body.operacao, req.body.num1, req.body.num2)
  res.status(200).json({ mensage: `O seu imc é ${result}` })
})

app.post("/api/exercicio12", (req, res) => {
  const result = posiounega(req.body.num1)
  res.status(200).json({ mensage: `O numero ${req.body.num1} é ${result}` })
})

app.post("/api/exercicio13", (req, res) => {
  const result = parouimpar(req.body.num1)
  res.status(200).json({ mensage: `O numero ${req.body.num1} é ${result}` })
})

app.post("/api/exercicio14", (req, res) => {
  const result = maiorque(req.body.num1, req.body.num2)
  res.status(200).json({ mensage: `O resultado é ${result}` })
})

app.post("/api/exercicio15", (req, res) => {
  const result = triangulo(req.body.a, req.body.b, req.body.c, req.body.base, req.body.altura)
  res.status(200).json({ mensage: `${result}` })
})

app.post("/api/exercicio16", (req, res) => {
  const result = impostoderenda(req.body.cpf, req.body.dependentes, req.body.salario)
  res.status(200).json({ mensage: `O seu imposto de renda é ${result}` })
})

app.post("/api/exercicio17", (req, res) => {
  const result = mediaponderada(req.body.num1, req.body.num2, req.body.num3)
  res.status(200).json(`Você foi ${result}`)
})

app.post("/api/exercicio18", (req, res) => {
  const result = valorcarro(req.body.valordefabriva)
  res.status(200).json(`Valor de fabrica é ${req.body.valordefabriva} e o valor final é ${result}`
  )
})

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`)
})