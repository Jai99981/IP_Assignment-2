import express from 'express'
import * as controller from '../controller/controller.js'
const router = express.Router()

router.route('/searchbooks').get(controller.getbooks)


export default router