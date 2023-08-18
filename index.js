import express from "express"
import { somar , subtrair, multiplicar, dividir } from "./exercicios/exercicio1.js"

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

app.get("/api/exercicio3", (req, res) => {
  const pesopessoa1 = parseFloat(req.query.pesopessoa1)
  const pesopessoa2 = parseFloat(req.query.pesopessoa2)
  const pesopessoa3 = parseFloat(req.query.pesopessoa3)
  const pesopessoa4 = parseFloat(req.query.pesopessoa4)
  const pesopessoa5 = parseFloat(req.query.pesopessoa5)
  const resultado = (pesopessoa1 + pesopessoa2 + pesopessoa3 + pesopessoa4 + pesopessoa5) / 5

  res.json({ mensage: `A media das 5 pessoas é ${resultado}` })
})

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`)
})
