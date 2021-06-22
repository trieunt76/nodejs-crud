import express from 'express';
const router = express.Router();

import itemController from '../../controllers/itemController';

router.get('(/:status)?', itemController.getAll);

router.get('/:id/:status', itemController.changeStatusItem);

router.get('/delete/:id', itemController.deleteItem);

// router.get('/add', (req, res) => {
//     return res.render('pages/items/add', { pageTitle: 'Add Item' });
// });

// router.get('/edit', (req, res) => {
//     return res.render('pages/items/edit', { pageTitle: 'Edit Item' });
// });

export default router;
