import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
    return res.render('pages/dashboard', { pageTitle: 'Dashboard' });
});

export default router;
