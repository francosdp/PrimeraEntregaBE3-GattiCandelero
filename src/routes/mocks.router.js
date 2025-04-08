import { Router } from "express";
import { createUser } from "../utils.js";
import usersModel from "../models/users.model.js";

const mocksRouter = Router()

mocksRouter.get('/mockingusers', (req, res) => {
    const { amount = 50 } = req.query
    const users = []
    for (let i = 0; i < amount; i++) {
        users.push(createUser())
    }
    res.send(users)
})

mocksRouter.post('/generatedata', async (req, res) => {
    try {
        const { amount = 50 } = req.query
        const users = []

        for (let i = 0; i < amount; i++) {
            const user =createUser()
            users.push({
                ...user,
                _id:user.id
            })
        }
        await usersModel.insertMany(users)
        res.status(200).send("Usuarios agregados con Éxito")
    } catch (e) {
        res.status(400).send(e)
    }
})


export default mocksRouter