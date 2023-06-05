const portfolioRepository = require('../repositories/portfolioRepository');

exports.getportfolio = async (req, res) => {
    const portfolio =  await portfolioRepository.getPortfolio();
    res.json(portfolio);
}

exports.getPortfolioById = async (req, res) => { 
    const id = parseInt(req.params.id);
    const projeto = await portfolioRepository.getPortfolioById(id);
    res.json(projeto);
}

exports.createProjeto = async (req, res) => {
    const projeto = req.body;
    const newProjeto = await portfolioRepository.createProjeto(projeto);
    res.json(newProjeto);
}

exports.updateProjeto = async (req, res) => {
    const id = parseInt(req.params.id);
    const projeto = req.body;
    const updateProjeto = await portfolioRepository.updateProjeto(id, projeto);
    res.json(updateProjeto);
}

exports.deleteProjeto = async (req, res) => {
    const id = parseInt(req.params.id);
    await portfolioRepository.deleteProjeto(id);
    res.json({message:`Projeto ${id}deleted`});
}

