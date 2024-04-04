import * as express from "express"
import { deletedata_second, getdata_second, postdata_second, updatedata_second } from "../controller/employe.controller"

const router =express.Router()
router.route('/employe').get(getdata_second).post(postdata_second)
router.route('/employe/:id').delete(deletedata_second).patch(updatedata_second)

export default router;