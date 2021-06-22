import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
    res.render('pages/home/index', { pageTitle: 'Admin Page' });
});

export default router;
