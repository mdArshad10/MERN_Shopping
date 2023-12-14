import {Router} from 'express'
import {getAllProducts, particularProduct} from '../controllers/product.controller.js'

const router = Router();
// get all product
router.route('/getAll').get(getAllProducts)

// get a particular product
router.route("/:id").get(particularProduct)

export default router;