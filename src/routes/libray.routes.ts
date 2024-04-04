import * as express from 'express'
import { deletedata_first, getdata_first, postdata_first, updated_first } from '../controller/library.controller';

const router = express.Router()
router.route('/library').get(getdata_first).post(postdata_first)
router.route("/library/:id").delete(deletedata_first).patch(updated_first)

export default router;