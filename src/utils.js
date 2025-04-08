import { faker } from "@faker-js/faker"
export const createUser =()=>{
return{
    id:faker.database.mongodbObjectId(),
    password:"coder123",
    role:Math.random()<0.8 ? 'user':'admin',
    pets:[]
}
}