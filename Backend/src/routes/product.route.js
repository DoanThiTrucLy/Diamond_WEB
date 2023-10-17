import express from 'express';
import productContronller from '../controllers/product.contronller.js';

const router = express.Router();

router.post('/', productContronller.createProduct);
router.get('/', productContronller.getProducts);
router.delete('/:id', productContronller.deleteProduct);
router.put('/:id', productContronller.updateProduct);
export default router;
