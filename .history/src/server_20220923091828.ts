import express from "express"
import { PrismaClient } from '@prisma/client'
import cors from 'cors'
const app = express();
app.use(cors())
app.use(express.json())
const prisma = new PrismaClient({
    log: ['query']
 })

app.get('/estudando', (req, res) => {

    const fichas =  prisma.ficha.findMany({
        include: {
           _count: {
              select: {
                 Ad: true,
              }
           }
        }
     })
     return response.json(fichas);
})

app.listen(4040, () => {
    return console.log("Servidor Iniciou")
})
