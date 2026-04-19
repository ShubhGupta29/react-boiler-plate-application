import express from 'express';
import { getProducts } from '../controllers/productController.js'; // Note the .js extension!

const router = express.Router();

// Map the root of this router to the getProducts controller
router.route('/').get(getProducts);

export default router;