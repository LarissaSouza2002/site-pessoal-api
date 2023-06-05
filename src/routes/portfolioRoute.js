const express = require('express');

const portfolioController = require('../controllers/portfolioController');

const router = express.Router();

router.get('/', portfolioController.getportfolio);
router.get('/:id', portfolioController.getPortfolioById);
router.post('/', portfolioController.createProjeto);
router.put('/:id', portfolioController.updateProjeto);
router.delete('/:id', portfolioController.deleteProjeto);


module.exports = router;