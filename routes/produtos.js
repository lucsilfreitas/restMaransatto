const express = require('express');
const router = express.Router();


router.get('/', (req, res, next) => {
    res.status(200).send({
        mensagem: 'Uasando o GET dentro da rota de produtos'
    })

});

router.post('/', (req, res, next) => {
    res.status(201).send({
        mensagem: 'Uasando o POST dentro da rota de produtos'
    })
});

module.exports = router;