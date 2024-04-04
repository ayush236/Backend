import * as express from 'express'
import {upload} from '../utils/uploadfiles'
import { deletedata, getdata, getsingledata, postdata, updatedata,} from '../controller/teacher.controller';


const router = express.Router()
router.route('/Teacher/').get(getdata).post(postdata)
// router.route('/Teacher/').get(getdata).post(upload.single('profile'),postdata)
router.route('/Teacher/:id').get(getsingledata).delete(deletedata).patch(updatedata)

export default router
