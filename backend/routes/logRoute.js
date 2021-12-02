import express from 'express'
import { createLog, getLogs, getLog} from '../controllers/logController.js'

const router = express.Router()

router.post('/', createLog);
router.get('/', getLogs);
router.get('/:id', getLog);

export default router