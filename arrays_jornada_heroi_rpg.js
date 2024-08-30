// Inventário inicial do Heroi

let inventario = ["Espada do Heroi", "Escudo do Heroi", "200 queijos", "Balde"]; // A espada e o escudo são referencia de um jogo que joguei a um tempo atras, é divertido. Acho que é "Existe mais de 100 finais!". E os 200 queijos junto do balde são referencia a Skyrim.

// Exibindo o inventário inicial
console.log("Seu inventário inicial:", inventario)

// Heroi encontra um novo item
let novoItem = "Oculos - +10 em visão";
inventario.push(novoItem)

// Exibindo o inventário atualizado
console.log("Você encontrou um báu! Novo item adicionado ao seu inventário: ", inventario);

// Heroi enfrenta um goblin
console.log("Um goblin apareceu! Prepare-se para a batalha.");

// Apos receber danos, o Heroi usa 30 queijos para se recuperar

let itemCura = inventario[2]
console.log("Você come 30 queijos e recupera totalmente sua vida.")
let novoItem2 = "30 queijos usados, você ficou com 170."
inventario.push(novoItem2)
console.log(inventario)

// Já tendo se recuperado com seus 30 queijos, ele parte novamente para a batalha.

let itemUsado0 = inventario[0];
console.log("Você ataca o goblin com a", itemUsado0);

// Finaliza a batalha.
console.log("Você derrotou o Goblin e continua sua jornada.")

// Contando inventario

console.log(inventario.length)