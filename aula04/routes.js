const express = require("express")
const protudoRouter = require('./routes/produto-routes')

//Dados
const produtos = [
    {id:1, nome:'suco de laranja',litros:0.5,preço: 3},
    {id:2, nome:'suco de uva',litros:1,preço: 4},
    {id:3, nome:'suco de abacaxi',litros:1.5,preço: 5}
]

routes.get('/produtos', (req,res) =>{
    res.send(produtos)
})

routes.get('/produtos/:id', (req,res) =>{
    const id = req.params.id
    const index = id -1


    res.send(produtos)
})

routes.post('/produtos', (req,res) =>{
    const produto = req.body

    //Adicionar o produto referido pelo parametro ao vetor produtos
    produtos.push(produto)

    res.send(produtos)
})


module.exports = routes