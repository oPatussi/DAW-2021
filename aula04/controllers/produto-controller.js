
const produtos = [
    {id:1, nome:'suco de laranja',litros:0.5,preço: 3},
    {id:2, nome:'suco de uva',litros:1,preço: 4},
    {id:3, nome:'suco de abacaxi',litros:1.5,preço: 5}
]

module.exports = {


    index: (req,res) => {
        return res.json(produtos)

    },

    show: (req,res) =>{
        const id = req.params.id
        const index = id -1
    
    
        res.send(produtos[index])
    },

    create: (req,res) =>{
        const produto = req.body
    
        //Adicionar o produto referido pelo parametro ao vetor produtos
        produtos.push(produto)
    
        res.send(produtos)
    }

}