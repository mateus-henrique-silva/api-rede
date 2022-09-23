import express from "express"
import { PrismaClient } from '@prisma/client'
import cors from 'cors'
const app = express();
app.use(cors())
app.use(express.json())
const prisma = new PrismaClient({
    log: ['query']
 })

app.get('/estudando', async (req, res) => {

    const fichas = await prisma.ficha.findMany({
      
     })
     return res.json(fichas);
})
app.post('/estudando:id', async (req, res)=>{
   const messageId = req.params.id;
   const body = req
   

})
app.listen(4040, () => {
    return console.log("Servidor Iniciou")
})
