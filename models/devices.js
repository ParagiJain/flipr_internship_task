const mongoose = require("mongoose")

const devicesSchema = mongoose.Schema({
    id: {
        type: String,
        require: true
    },
    imei: {
        type: String,
        require: true
    }
})

mongoose.model("devices", devicesSchema)