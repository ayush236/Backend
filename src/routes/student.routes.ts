import * as express from 'express' 
import {getdata, postdata, getsingledata, deletedata } from '../controller/student.controller'
const router = express.Router()  // CRUD (C:CREAT)
router.route('/').get(getdata).post(postdata)
router.route('/:id').get(getsingledata).delete(deletedata)
export default router