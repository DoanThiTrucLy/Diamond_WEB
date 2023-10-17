import express from 'express';
import diamondController from '../controllers/diamond.controller.js';

const router = express.Router();

router.post('/', diamondController.createDiamond);
router.get('/', diamondController.getDiamonds);
router.delete('/:id', diamondController.deleteDiamond);
router.put('/:id', diamondController.updateDiamond);
export default router;
