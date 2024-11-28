import 'dotenv/config'
import { ObjectId } from 'mongodb'

// Importa a função conectarAoBanco do arquivo dbconfig.js
import conectarAoBanco from "../config/dbconfig.js"

// Esta linha é assíncrona e aguarda a conexão com o banco de dados ser estabelecida
// antes de prosseguir. A conexão é armazenada na variável 'conexao'
const conexao = await conectarAoBanco(process.env.STRING_CONEXAO)

// Função assíncrona para obter todos os posts do banco de dados
export async function getTodosPosts() {
    // Acessa o banco de dados 'imersao-instabytes' através da conexão
    const db = conexao.db('imersao-instabytes')
  
    // Seleciona a coleção 'posts' dentro do banco de dados
    const colecao = db.collection('posts')
  
    // Realiza a busca por todos os documentos na coleção e retorna um array
    return colecao.find().toArray()
}

export async function criarPost(novoPost) {
  const db = conexao.db('imersao-instabytes')

  const colecao = db.collection('posts')

  return colecao.insertOne(novoPost)
}

export async function atualizarPost(id, novoPost) {
  const db = conexao.db('imersao-instabytes')
  const colecao = db.collection('posts')
  const objID = ObjectId.createFromHexString(id)

  return colecao.updateOne({ _id: new ObjectId(objID) }, { $set:novoPost })
}