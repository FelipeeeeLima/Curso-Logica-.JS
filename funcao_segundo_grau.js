function ResolverEquacaoSegundoGrau(a, b, c){
    // Passo 1: Calcular o delta
    let delta = b*b-4*a*c

    // Passo 2: Verificar se o delta é zero, negativo ou positivo
    if (delta<0){
        // Se o delta for negativo, a equação não tem raizes reais
        console.log("A equação não tem soluções reais.")
    }
    else if(delta===0){
        // Se delta for igual a zero, a equação tem duas raizes iguais
        console.log("A equação tem raizes iguais.")
    }
    else {
        // Se o delta for positivo, a equação tem duas raizes diferentes.
        let x1 = (-b + Math.sqrt(delta))/(2*a)
        let x2 = (-b - Math.sqrt(delta))/(2*a)

        console.log("A equação tem duas raizes reais: x1= ", x1, "e x2= ", x2)
    }
}

ResolverEquacaoSegundoGrau(2, -3, 7)