//Função com dois functions params
const processa = (func1, func2) =>{
    func1();

    const variavel = 'Executando processo'
    console.log(variavel)

    func2();
}

processa(() =>{

}, ()=>{
    
})