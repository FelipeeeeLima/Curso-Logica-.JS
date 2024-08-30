function podeEstudar(concluiuEnsinoMedio, idade, cursandoOutraFaculdade){
    return concluiuEnsinoMedio &&idade>=18 &&!cursandoOutraFaculdade}
    
    // Dados para testar a função
    let concluiuEnsinoMedio = true // Sim concluiu
    let idade = 22 // Definindo idade
    let cursandoOutraFaculdade = false // False para dizer que não

    // Verificar se pode estudar na faculdade
    let resultado = podeEstudar(concluiuEnsinoMedio, idade, cursandoOutraFaculdade)

    // Exibindo o resultado
    if(resultado){
        console.log("Você pode entrar na faculdade.")
    }
    else{
        console.log("Você não pode entrar na faculdade")
    }