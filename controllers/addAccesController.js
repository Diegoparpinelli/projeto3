const mongoose = require("mongoose");
const eventModel = require("../models/event");


async function addAcces(contentAcces){
    try {
        await mongoose.connect(`mongodb://0.0.0.0:27017/presencaqrcode`);
        console.log("Conectado ao db, com sucesso!");

        const data = await eventModel.updateOne({name: contentAcces.eventName},{$push: {acces: contentAcces.accesName}});

        await mongoose.disconnect();
        console.log("Desconectado!");

        return JSON.stringify(data);

    } catch (error) {
        console.log(error);
        let data = {erro: error};
        return JSON.stringify(data);
    }
}


module.exports = {addAcces}