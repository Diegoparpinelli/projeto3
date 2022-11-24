const mongoose = require("mongoose");
const eventModel = require("../models/event");

async function addEvents(contentEvent){
    try {
        await mongoose.connect(`mongodb://0.0.0.0:27017/presencaqrcode`);
        console.log("Conectado ao db, com sucesso!");

        const data = await new eventModel(contentEvent).save();

        await mongoose.disconnect();
        console.log("Desconectado!");

        return JSON.stringify(data);

    } catch (error) {
        console.log(error);
        let data = {erro: error};
        return JSON.stringify(data);
    }
}



module.exports = {addEvents}