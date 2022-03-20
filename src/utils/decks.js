const decks = [
    {
        id: "1",
        deckName: "React",
        cards: [
            {
                question: "O que é JSX?",
                answer: "Uma extensão de linguagem do JavaScript"
            },
            {
                question: "O React é __",
                answer: "uma biblioteca JavaScript para construção de interfaces"
            },
            {
                question: "Componentes devem iniciar com __",
                answer: "letra maiúscula"
            },
            {
                question: "Podemos colocar __ dentro do JSX",
                answer: "expressões"
            },
            {
                question: "O ReactDOM nos ajuda __",
                answer: "nteragindo com a DOM para colocar componentes React na mesma"
            },
            {
                question: "Usamos o npm para __",
                answer: "gerenciar os pacotes necessários e suas dependências"
            },
            {
                question: "Usamos props para __",
                answer: "passar diferentes informações para componentes"
            },
            {
                question: "Usamos estado (state) para __",
                answer: "dizer para o React quais informações quando atualizadas devem renderizar a tela novamente"
            }
        ]
    },
    {
        id: "2",
        deckName: "HTML",
        cards: [
            {
                question: "Qual é o papel/responsabilidade do HTML na construção de um site?",
                answer: "Ele traz o conteúdo e a semântica dos elementos de um site"
            },
            {
                question: "O que são, por exemplo, <body>, <p>, <strong>?",
                answer: "Tags"
            },
            {
                question: "O que são, por exemplo, class='...', href='...', src='...'? ",
                answer: "Atributos"
            },
            {
                question: "Qual a versão do HTML que usamos hoje no mercado?",
                answer: "HTML 5"
            },
            {
                question: "Por que foram criadas tags como <article>, <aside>, <header>, <menu>, etc?",
                answer: "Para trazer mais semântica para os elementos e evitar uso excessivo de `<div>`"
            },
            {
                question: "<img> e <meta> são exemplos de tags __",
                answer: "autofechadas"
            },
            {
                question: "Como inserimos comentários em html",
                answer: "com <!-- ... -->"
            },
            {
                question: "A tag ___ configura sua página para exibir corretamente palavras acentuadas e caracteres especiais em navegadores mais antigos",
                answer: "<meta charset='utf-8'>"
            }
        ]
    },
    {
        id: "3",
        deckName: "CSS",
        cards: [
            {
                question: "Qual é o papel/responsabilidade do CSS na construção de um site?",
                answer: "Ele dá estilo e formatação ao site"
            },
            {
                question: "O que é CSS Reset? ",
                answer: "É uma técnica onde resetamos os estilos padrões que o browser adiciona nos elementos"
            },
            {
                question: "O que é box model?",
                answer: "É o modelo utilizado no CSS para representar os elementos, contendo largura, altura, margens, paddings e bordas"
            },
            {
                question: "Chamamos de ___ a técnica do CSS para aplicar estilos somente em tamanhos de tela específicos.",
                answer: "Media Queries"
            },
            {
                question: "Um layout responsivo pode ter vários ___, ou seja, vários layouts diferentes para vários tamanhos de tela.",
                answer: "breakpoints"
            },
            {
                question: "Para referenciarmos classes no CSS, precisamos começar o seletor com um ___ ",
                answer: "ponto"
            },
            {
                question: "Se um elemento tiver estilos conflitantes aplicados tanto pelo nome da tag quanto por uma classe, o estilo final vai ser o ___",
                answer: "da classe"
            },
            {
                question: "Uma forma de aplicar estilos em uma página é utilizando um arquivo de CSS externo, através da tag ___",
                answer: "<link>"
            }
        ]
    },
    {
        id: "4",
        deckName: "JavaScript",
        cards: [
            {
                question: "Qual o papel/responsabilidade do JavaScript na construção de um site? ",
                answer: "Nos permite criar sites mais interativos, reagindo ao comportamento do usuário"
            },
            {
                question: "O que é árvore DOM?",
                answer: "É a árvore de elementos do HTML representada como objetos no JavaScript"
            },
            {
                question: "Qual o retorno da expressão 'banana' * 3 ?",
                answer: "NaN"
            },
            {
                question: "Qual o tipo dos seguintes valores:'Driven', 2021 e { nome: 'JavaScript', versao: 'ECMA2016' }",
                answer: "String, Number, Object"
            },
            {
                question: "O que é um evento no JavaScript?",
                answer: "Os eventos são basicamente um conjunto de ações que são realizadas em um determinado elemento da página web"
            },
            {
                question: "O que são Promises no JavaScript?",
                answer: "Uma variavel que guarda uma promessa que depois de um tempo se tornará um valor ou um erro"
            },
            {
                question: "Por que devemos usar promises/assincronismo?",
                answer: "Para não travar a execução do código quando temos códigos que demoram para se resolver"
            },
            {
                question: "Os operadores lógicos AND, NOT e OR são representados no JavaScript respectivamente por quais símbolos?",
                answer: "&&, ! e ||"
            }
        ]
    }
];

export { decks };