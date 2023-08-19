import express from "express"
import { somar , subtrair, multiplicar, dividir, celsiofahrenheit, quilometrosmilha, segundoprelogio, tabuada1a10, quilometrosmetros 
} from "./exercicios/funcao.js"

const app = express()
app.use(express.json())
const port = 3000

app.post("/api/exercicio1", (req, res) => {
  const result = somar(req.body.num1, req.body.num2)
  res.status(200).json({ mensage: `O resultado é ${result}` })
})

app.post("/api/exercicio2", (req, res) => {
  const result = multiplicar(req.body.valorhora, req.body.quantidadedehoras)
  res.status(200).json({ mensage: `O salario é ${result} reais` })
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
  const result = tabuada1a10(req.body.num)
  res.status(200).json({ mensage: `Tabuada ${result}` })
})

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`)
})