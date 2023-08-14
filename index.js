import express from "express"
const app = express()
const port = 3000

app.get('/api/:id', (req, res) => {
  const nome = req.query.nome
  const id = req.query.id

  res.json({ mensage:`Você passou o queryParam: ${nome} e o id: ${id}`})
})

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`)
})