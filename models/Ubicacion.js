const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ubicacionSchema = new Schema({
    descripcion: {
        type: String,
        trim : true,
        required:true
    }
});

module.exports = mongoose.model('Ubicaciones', ubicacionSchema);