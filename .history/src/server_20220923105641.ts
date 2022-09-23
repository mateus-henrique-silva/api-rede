import express from "express"
import { PrismaClient } from '@prisma/client'
import cors from 'cors'
const app = express();
app.use(cors())
app.use(express.json())
const prisma = new PrismaClient({
    log: ['query']
 })
interface GetElement{
   Ficha: string;
}
app.get('/estudando', async (req, res) => {

    const fichas = await prisma.ficha.findMany({
        include: {
           
              select: {
                 Ficha: true,
              }
           }
        
     })
     return res.json(fichas);
})

app.listen(4040, () => {
    return console.log("Servidor Iniciou")
})
