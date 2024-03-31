import * as express from 'express'
import { postdata1, postdatalogin } from '../controller/newuser.controller'
const router = express.Router()  // CRUD (C:CREAT)
router.route('/newuser/').post(postdata1)
router.route('/login').post(postdatalogin)
export default router