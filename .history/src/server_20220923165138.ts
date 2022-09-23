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
   const messageId:string = req.params.id;
   const body:any = req.body;
   const adNew = await prisma.ficha.create({
      data: {
         id:messageId,
         name: body.name,
        Message:body.message,
        createdAt:
      }
   });
   return res.status(201).json(adNew);
   

})
app.listen(4040, () => {
    return console.log("Servidor Iniciou")
})
