import express from 'express'
import mocksRouter from './routes/mocks.router.js'
import mongoose from 'mongoose'

const app = express()
const PORT = 9090


mongoose.connect('mongodb+srv://Franco:fransdp.atlas@cluster0.ei50y.mongodb.net/BackEnd3?')
.then(()=>console.log("DB ON"))
.catch((e)=>console.log("Error to DB: ", e))

app.use(express.json()) 





app.use('/api/mocks',mocksRouter)




app.get('/', (req,res)=>{
    res.status(200).json("App On")
})

app.listen(PORT, ()=>{
    console.log(`Servidor ejecutado en puerto ${PORT}`)
}) 