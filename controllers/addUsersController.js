const mongoose = require("mongoose");
const eventModel = require("../models/event");
const userModel = require("../models/user");
const { psGeneratorService } = require("../services/psGeneratorService")

async function addUsers(contentUser){
    try {
        await mongoose.connect(`mongodb://0.0.0.0:27017/presencaqrcode`);
        console.log("Conectado ao db, com sucesso!");

        const user = new userModel(contentUser.eventName, contentUser.name, psGeneratorService(8), contentUser.email, contentUser.phone, contentUser.present, contentUser.acces, contentUser.CPF)
        
        const data = await eventModel.updateOne({name: user.eventName},{$push: {users: user.user}});

        await mongoose.disconnect();
        console.log("Desconectado!");

        return JSON.stringify(data);

    } catch (error) {
        console.log(error);
        let data = {erro: error};
        return JSON.stringify(data);
    }
}


module.exports = {addUsers}