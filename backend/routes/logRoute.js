import express from 'express'
import { createLog, getLogs, getLog, deleteLog} from '../controllers/logController.js'

const router = express.Router()

router.post('/', createLog);
router.get('/', getLogs);
router.get('/:id', getLog);
router.delete('/:id', deleteLog);

export default router