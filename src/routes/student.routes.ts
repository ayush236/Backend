import * as express from 'express'
import { upload } from '../utils/uploadfiles'
import { getdata, postdata, getsingledata, deletedata, updatedata } from '../controller/student.controller'
const router = express.Router()  // CRUD (C:CREAT)
router.route('/student').get(getdata).post(upload.single(
    'profile'
    ),postdata)
router.route('/student/:id').get(getsingledata).delete(deletedata).patch(updatedata)
export default router