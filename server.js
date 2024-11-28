// Importa o módulo express para criar uma aplicação web
import express from 'express'
import routes from './src/routes/postsRoutes.js'

// Cria uma aplicação express
const app = express()

app.use(express.static('uploads'))

routes(app)

// Inicia o servidor na porta 3000
app.listen(3000, () => {
  console.log('Servidor escutando na porta 3000...')
})