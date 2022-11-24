const mongoose = require("mongoose");
const eventModel = require("../models/event");


async function listEvents(){
    try {
        await mongoose.connect(`mongodb://0.0.0.0:27017/presencaqrcode`);
        console.log("Conectado ao db, com sucesso!");

        const data = await eventModel.find({},{ps: false, _id: false, __v: false});

        await mongoose.disconnect();
        console.log("Desconectado!");

        return JSON.stringify(data);

    } catch (error) {
        console.log(error);
        let data = {erro: error};
        return JSON.stringify(data);
    }
}



module.exports = {listEvents}