import mongoose from 'mongoose'

const userSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        balance: {
            type: Number,
            required: true
        }

    }
)
