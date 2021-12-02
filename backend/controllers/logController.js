import express from 'express'
import GolfLog from '../models/logModel.js'

const router = express.Router();

export const getLogs = async (req, res) => {
    try{
        const golfLogs = await GolfLog.find();
        res.status(200).json(golfLogs);
    } 
    catch (error) {
        res.status(400).json({message: error.message});
    }
}

export const getLog = async (req, res) => {
    const {id} = req.params;
    try{
        const golfLog = await GolfLog.findById(id);
        res.status(200).json(golfLog);
    } 
    catch (error) {
        res.status(400).json({message: error.message});
    }
}

export const createLog = async (req, res) => {
    const log = req.body;
    const newLog = new GolfLog(log);

    try{
        await newLog.save();
        res.status(201).json(newLog);
    } 
    catch(error){
        res.status(400).json({message: error.message});
    }
    
}

export const deleteLog = async (req, res) => {
    const {id} = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    await GolfLog.findByIdAndRemove(id);

    res.json({message: "Log deleted successfully"})
}

export const updateLog = async (req, res) => {
    
}

export default router;
