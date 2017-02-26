import express from 'express'
import {days} from './db'

const router = express.Router()

router.route('/days')
  .get(days.getAlldays)
  .post(days.createday)

router.route('/days/:id')
  .get(days.getSingleday)
  .put(days.updateSingleday)
  .delete(days.removeday)

export default router
