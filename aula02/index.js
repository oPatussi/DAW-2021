const express = require('express');
const app = express();

//Rota principal
app.get('/', (req,res) =>{
    res.send("Ta funfando")
})

app.listen(3000, () => {
    console.log('Executando na porta 3000')
});