import express from "express"
import { PrismaClient } from '@prisma/client'
import cors from 'cors'

const prisma = new PrismaClient({
    log: ['query']
 })
const app = express();
app.get('/estudando', (req, res) => {


})

app.listen(4040, () => {
    return console.log("Servidor Iniciou")
})
