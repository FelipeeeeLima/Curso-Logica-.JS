Café = {
    nomeExtenso: 'Maravilha feita de grãos misturada com agua quente.',
    chegouNoBrasil: 1727,
    tarefas: ['Trazer felicidade', 'Dar energia para conseguir aguentar mais 1 horinha'],
    oMelhor: function() {
        console.log('Não há melhor. Todos são igualmente bons. Mas claro, sempre tem exceções, infelizmente.')
    }
}
console.log(Café['nomeExtenso'])
Café['oMelhor'] = 'Talvez exista.'
console.log(Café["oMelhor"])