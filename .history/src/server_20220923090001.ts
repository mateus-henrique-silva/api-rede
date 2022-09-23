import express from "express"
import { PrismaClient } from '@prisma/client'

const app = express();
app.get('/estudando', (req, res) => {


})

app.listen(4040, ()=>{
    return console.log("Servidor Iniciou")
})
