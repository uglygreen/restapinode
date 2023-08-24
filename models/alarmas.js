const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const alarmasSchema = new Schema({
    descripcion: {
        type: String,
        required: true
    },
    numAlarma:{
        type:String,
        required:true
    }
});

module.exports = mongoose.model('Alarmas', alarmasSchema);