import express from "express"
import { PrismaClient } from '@prisma/client'
import cors from 'cors'
app.use(cors())
app.use(express.json())
const prisma = new PrismaClient({
    log: ['query']
 })

app.get('/estudando', (req, res) => {


})

app.listen(4040, () => {
    return console.log("Servidor Iniciou")
})
