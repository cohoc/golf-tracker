import mongoose from 'mongoose'

const logSchema = new mongoose.Schema({
    course: String,
    city: String,
    date: String,
    teebox: String,
    frontnine: Number,
    backnine: Number,
    total: Number,
    par: Number, 
    birdie: Number,
    bogey: Number,
    bogeyex: Number,
    format: Number,
    totalshots: Number
})

export default mongoose.model('GolfLog', logSchema)


