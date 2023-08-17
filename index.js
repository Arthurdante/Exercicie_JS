import express from "express"
const app = express()
const port = 3000

app.get('/api/exercicio1/:id', (req, res) => {
  const num1 = parseFloat(req.query.num1)
  const num2 = parseFloat(req.query.num2);
  const resultado = num1 + num2

  res.json({ mensage:`O resultado é ${resultado}`})
})

app.get('/api/exercicio2/:id', (req, res) => {
  const num1 = parseFloat(req.query.num1)
  const num2 = parseFloat(req.query.num2);
  const resultado = num1 + num2

  res.json({ mensage:`O resultado é ${resultado + 34}`})
})

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`)
})