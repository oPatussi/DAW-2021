//Função sem retorno
function inicio(){
    const variavel = "Inicio da execução";
    console.log(variavel)
}

//Função com dois functions params
function meio(func1, func2){
    func1();

    const variavel = 'Executando processo'
    console.log(variavel)

    func2();
}


//Função sem retorno
function fim(){

}

meio(inicio,fim);


processa(function(){

}, function(){
    
})
