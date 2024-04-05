import * as express from 'express'
import { deletedata_third, getdata_third, postdata_third, updata_third } from '../controller/vehicle.controller'

const router =express.Router()
router.route('/vehicle').get(getdata_third).post(postdata_third)
router.route('/vehicle/:id').delete(deletedata_third).patch(updata_third)

export default router