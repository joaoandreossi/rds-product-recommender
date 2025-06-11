# Recomendador de produtos da RD Station

Esse projeto faz parte do processo seletivo da RD Station. O sistema consiste de uma aplicação web simples escrita com React e Tailwind, também acompanha um back-end REST simulado pela biblioteca *json-server* que oferece endpoints para requisição de uma lista de produtos da RD Station que são utilizados como base da lógica de recomendação de produtos. As instruções originais do problema podem ser encontradas na seção seguinte.

# Instruções

A tarefa deve ser desenvolvida de acordo com as instruções abaixo, que foram originalmente enviadas por e-mail durante o processo seletivo:

> ## Teste Técnico - Recomendador de Produtos RD Station
> Este projeto é parte do teste técnico para a vaga de desenvolvedor front-end na RD Station. O objetivo principal é implementar a lógica de recomendação de produtos RD Station em uma aplicação web existente.
> ## Missão
> Sua missão é desenvolver a funcionalidade central de recomendação de produtos dentro de uma aplicação React.js pré-existente. Você deverá implementar a lógica que permite aos usuários selecionar suas preferências e funcionalidades desejadas, e então receber recomendações de produtos correspondentes.
> ## Contexto
> Este projeto é parte de uma etapa técnica do processo seletivo para a vaga de desenvolvedor front-end na RD Station. A estrutura básica da aplicação já está construída com React.js para o front-end e utiliza json-server para simular um servidor RESTful com dados de produtos.
> Seu foco deve ser na implementação da lógica de recomendação e na integração desta funcionalidade com a interface do usuário existente. A aplicação já possui um layout básico utilizando Tailwind CSS.
> ## Tecnologias Utilizadas
> Este projeto utiliza as seguintes tecnologias principais:
> - React.js: Para o desenvolvimento do front-end
> - json-server: Para simular um servidor RESTful com dados de produtos
> - Tailwind CSS: Para estilização e layout responsivo
> ## Requisitos Técnicos
> ### Familiaridade com Tailwind CSS
> O layout da aplicação foi desenvolvido utilizando Tailwind CSS. Familiaridade básica com este framework de CSS utilitário será útil para entender e potencialmente modificar o layout existente.
> ### Versão do Node.js
> Este projeto requer Node.js versão 18.3 ou superior. Se você não tem essa versão instalada, siga as instruções abaixo para instalá-la usando `n` ou `nvm`.
> #### Usando `n` (Node Version Manager):
> 1. Instale `n` globalmente (caso ainda não tenha): npm install -g n
> 2. Instale e use a versão 18.3 do Node.js: n 18.3
> #### Usando `nvm` (Node Version Manager):
> 1. Instale `nvm` (caso ainda não tenha) seguindo as instruções em: https://github.com/nvm-sh/nvm
> 2. Instale e use a versão 18.3 do Node.js: nvm install 18.3 & nvm use 18.3
> Após instalar a versão correta do Node.js, você pode prosseguir com a instalação das dependências do projeto e iniciar o desenvolvimento.
> ## Foco do Desenvolvimento
> Para completar este teste, você deve concentrar-se principalmente em três arquivos específicos:
> 1.  `App.js`: Neste componente, você encontrará o comentário "Dadas atualizações no formulário, necessário atualizar a lista de recomendações". Implemente a lógica necessária para atualizar a lista de recomendações com base nas entradas do usuário.
> 2.  `Form.js`: Este componente contém o comentário "Defina aqui a lógica para atualizar as recomendações e passar para a lista de recomendações". Desenvolva a lógica para processar as entradas do usuário e gerar as recomendações apropriadas.
> 3.  `recommendation.service.js`: Neste arquivo de serviço, você verá o comentário "Crie aqui a lógica para retornar os produtos recomendados." Implemente a lógica de negócios para determinar quais produtos devem ser recomendados com base nos critérios fornecidos.
> ## Observações Adicionais
> - Sinta-se à vontade para implementar melhorias na cobertura de testes e no layout da aplicação, caso tenha tempo adicional.
> - O código existente serve como base para sua implementação. Concentre-se em desenvolver a funcionalidade de recomendação de produtos conforme especificado nos requisitos do projeto e nos arquivos mencionados acima.
> ## Requisitos
> - Implementar a lógica de recomendação de produtos com base nas preferências do usuário.
> - Utilizar React.js para o desenvolvimento do front-end.
> - Consumir a API fornecida pelo json-server para obter os dados dos produtos.
> - Seguir as boas práticas de desenvolvimento e organização de código.
> - Implementar testes unitários para as funcionalidades desenvolvidas.
> ## Como Executar
> 1. Clone o repositório: `git clone <URL_DO_REPOSITORIO>`
> 2. Instale as dependências: `yarn install`
> 3. Para instalar o projeto, execute o script `./install.sh`
> 4. Inicie a aplicação: `yarn start`
> ### Scripts Disponíveis
> -  `start`: Inicia a aplicação React em modo de desenvolvimento.
> -  `start:frontend`: Inicia apenas a parte frontend da aplicação em modo de desenvolvimento.
> -  `start:backend`: Inicia apenas a parte backend da aplicação em modo de desenvolvimento.
> -  `dev`: Inicia simultaneamente a parte frontend e backend da aplicação em modo de desenvolvimento.
> ## Critérios de Aceite
> 1. O serviço de recomendação de produtos deve ser capaz de receber as preferências e funcionalidades desejadas do usuário através de um formulário.
> 2. O serviço deve retornar recomendações de produtos com base nas preferências e funcionalidades selecionadas pelo usuário.
> 3. Se o tipo de recomendação selecionado for "SingleProduct", o serviço deve retornar apenas um produto que corresponda melhor às preferências e funcionalidades do usuário.
> 4. Se o tipo de recomendação selecionado for "MultipleProducts", o serviço deve retornar uma lista de produtos que correspondam às preferências e funcionalidades do usuário.
> 5. Em caso de empate na seleção de produtos com base nas preferências e funcionalidades do usuário, o serviço deve retornar o último produto que atende aos critérios de seleção.
> 6. O serviço deve ser capaz de lidar com diferentes tipos de preferências e funcionalidades selecionadas pelo usuário.
> 7. O serviço deve ser modular e facilmente extensível para futuras atualizações e adições de funcionalidades.
> Certifique-se de que todos os critérios de aceite são atendidos durante o desenvolvimento do projeto.
> ## Autor
> Desenvolvido por [Seu Nome]
> ## Licença
> Este projeto está licenciado sob a [Licença MIT](LICENSE).


# Arquitetura do sistema

Como comentado anteriormente, o projeto consiste de um front-end com componentes escrito em React e estilizados com Tailwind e um back-end criado pelo pacote *json-server* que simula endpoints REST usando um arquivo JSON como fonte de dados. 

O projeto não utiliza TypeScript, então não temos nenhuma garantia sobre o formato desses dados, mas de acordo com o arquivo *db.json* eles poderiam ser representados pela interface abaixo, que iremos referenciar ao longo deste documento para nos referir a estrutura de dados que representa os produtos. O back-end retorna uma lista de produtos com este formato quando uma requisição é feita ao endpoint */products*.

    interface Product {
        id: number
        name: string
        category: string
        preferences: Array<string>
        features: Array<string>		    
    }

 Além das instruções, foram enviados alguns arquivos que formam a base do projeto, e é nesse *code base* já existente que devemos construir a feature de recomendação de produtos. 

Desenhando a árvore de componentes podemos entender mais a fundo a arquitetura do sistema.

![diagrama de componentes do projeto](https://i.imgur.com/5K9xH6U.png)

Podemos observar que é uma aplicação simples com uma árvore de componentes relativamente pequena. A única dependência externa é através do serviço *ProductService* que se conecta ao servidor back-end através de uma requisição GET para buscar a lista de produtos. 

Apesar de existirem vários arquivos que poderíamos alterar, as instruções são bem claras quanto ao escopo da tarefa:
> Para completar este teste, você deve concentrar-se principalmente em três arquivos específicos:
> 1.  `App.js`: Neste componente, você encontrará o comentário "Dadas atualizações no formulário, necessário atualizar a lista de recomendações". Implemente a lógica necessária para atualizar a lista de recomendações com base nas entradas do usuário.
> 2.  `Form.js`: Este componente contém o comentário "Defina aqui a lógica para atualizar as recomendações e passar para a lista de recomendações". Desenvolva a lógica para processar as entradas do usuário e gerar as recomendações apropriadas.
> 3.  `recommendation.service.js`: Neste arquivo de serviço, você verá o comentário "Crie aqui a lógica para retornar os produtos recomendados." Implemente a lógica de negócios para determinar quais produtos devem ser recomendados com base nos critérios fornecidos.

Para aderir ao escopo proposto, iremos focar nossa atenção a editar apenas esses três arquivos por enquanto.

# Algoritmo de recomendação

O serviço *RecommendationService* possuí um único método: *getRecommendations*. Ele recebe como parâmetros um objeto contendo os dados do formulário (lista de preferências, funcionalidades e o tipo de recomendação) e uma lista de produtos. Se o tipo de recomendação escolhida for `MultipleProducts`, o método retorna uma lista com todos os produtos que possuem alguma das características inseridas no formulário, caso for `SingleProduct` é retornada uma lista com apenas o último produto encontrado. 

Para cumprir os requisitos descritos, devemos desenvolver um algoritmo que retorna uma lista de produtos que possuem as características de preferências e funcionalidades selecionadas pelo usuário. O pseudocódigo abaixo apresenta uma solução não otimizada que utiliza uma estratégia de "força bruta", ou seja, testa todas as combinações possíveis comparando as listas entre si. Ao lado de cada operação tem a complexidade temporal para visualizarmos como ela contribui para a complexidade.

    INPUT: 
        user_preferences, user_features -> Array<string>
        recommendation_type -> string
        products -> Array<Product>
    
    OUTPUT:
        recommendations -> Array<Product>
        
    PROCEDURE:
	    SET recommendations = []
	    
	    FOR product OF products                                                O(n)
	        FOR preference OF product.preferences                                O(p)
	            FOR user_preference OF user_preferences                            O(up)
	                IF preference == user_preference
	                    SET already_recommended = FALSE
	                    FOR recommendation OF recommendations                        O(r)
	                        IF recommendation == product
	                            already_recommended = TRUE
	                    IF already_recommended == FALSE
	                        INSERT product INTO recommendations                      O(1)
	                        
	        FOR feature OF product.features                                      O(f)
	            FOR user_feature OF user_features                                  O(uf)
	                IF feature == user_feature
	                    SET already_recommended = FALSE
	                    FOR recommendation OF recommendations                        O(r)
	                        IF recommendation == product
	                            already_recommended = TRUE
	                    IF already_recommended == FALSE
	                        INSERT product INTO recommendations                      O(1)
	    
	    IF recommendations.length > 0 AND recommendation_type == 'SingleProduct'
	        recommendations = [recommendations[recommendations.length - 1]]    O(1)
	    
	    RETURN recommendations

Esse algoritmo possui muitos loops aninhados, o que faz nosso serviço de recomendação ficar cada vez mais lento conforme o número de produtos, preferências e features cresce.  

Podemos aplicar uma otimização inicial simples no momento de verificar se o produto já foi recomendado anteriormente. Ao invés de usar um *array* para armazenar as recomendações, podemos utilizar um *Set* que é uma estrutura de dados que tem as operações de adição e busca em complexidade média `O(1)`. 

Ainda precisamos converter de volta para array antes de retornar, que é uma operação de complexidade `O(r)` (onde `r` é o número de produtos recomendados), mas como executamos fora dos loops ela não aumenta a complexidade geral do algoritmo.
      
    INPUT: 
        user_preferences, user_features -> Array<string>
        recommendation_type -> string
        products -> Array<Product>
        
    OUTPUT:
        recommendations -> Array<Product>
        
    PROCEDURE:
	    SET recommendation_set = new Set()
	    
	    FOR product OF products                                                O(n)
	        FOR preference OF product.preferences                                O(p)
	            FOR user_preference OF user_preferences                            O(up)
	                IF preference == user_preference
	                    IF recommendation_set DOES NOT CONTAIN product               O(1)
	                        INSERT product INTO recommendation_set                   O(1)
	                        
	        FOR feature OF product.features                                      O(f)
	            FOR user_feature OF user_features                                  O(uf)
	                IF feature == user_feature
	                    IF recommendation_set DOES NOT CONTAIN product               O(1)
	                        INSERT product INTO recommendation_set                   O(1)
	    
	    SET recommendations = CONVERT recommendation_set INTO ARRAY            O(r)
	    
	    IF recommendations.length > 0 AND recommendation_type == 'SingleProduct'
	        recommendations = [recommendations[recommendations.length - 1]]    O(1)
	    
	    RETURN recommendations

Podemos aplicar a mesma técnica para reduzir a complexidade da busca entre os outros campos. Ainda é necessário percorrer as listas uma vez para converte-las em um Set mas agora os loops deixam de ser aninhados, o que torna todos os acessos mais eficientes.

    INPUT: 
        user_preferences, user_features -> Array<string>
        recommendation_type -> string
        products -> Array<Product>
        
    OUTPUT:
        recommendations -> Array<Product>
        
    PROCEDURE:
	    SET recommendation_set = new Set()
	    SET user_preference_set = new Set(user_preferences)                  O(up)
	    SET user_feature_set = new Set(user_features)                        O(uf)
	    
	    FOR product OF products                                              O(n)
	        SET preference_set = new Set(product.preferences)                  O(p)
	        SET feature_set = new Set(product.features)                        O(f)
	        
	        IF preference_set INTERSECTS WITH user_preference_set              O(min(p, up))
	            IF recommendation_set DOES NOT CONTAIN product                 O(1)
	                INSERT product INTO recommendation_set                     O(1)
	        
	        IF feature_set INTERSECTS WITH user_feature_set                    O(min(f, uf))
	            IF recommendation_set DOES NOT CONTAIN product                 O(1)
	                INSERT product INTO recommendation_set                     O(1)

	    SET recommendations = CONVERT recommendation_set INTO ARRAY          O(r)
	    
	    IF recommendations.length > 0 AND recommendation_type == 'SingleProduct'
	        recommendations = [recommendations[recommendations.length - 1]]  O(1)
	    
	    RETURN recommendations

Agora, ao invés de percorrer todo o vetor de preferências do usuário para cada elemento do vetor de preferências do produto, só percorremos ambos os vetores uma única vez. 

Com as otimizações nosso algoritmo possui complexidade geral `O(n*(p+f+min(p,up)+min(f, uf)) + up + uf + r)`, onde `n` é o número de produtos, `p` é o número médio de preferências, `f` o número médio de features, `up` o número de features selecionados pelo usuário, `uf` o número de features selecionadas pelo usuário e `r` o número de produtos recomendados. A maior grandeza é de longe `n*(p+f+min(p,up)+min(f, uf))`, então caso `p` e `f` sejam em média maiores que `up` e `uf`, podemos simplificar a complexidade para `O(n*(p+f))`.

# Observações

### recommendation.service.js
1. Não é claro o que deve acontecer quando não existe nenhum campo selecionado, então criei um novo teste para cobrir esse caso. Assumi que o algoritmo devesse retornar um vetor vazio.
2. Criei um teste para cobrir o caso do argumento *formData* com valor `undefined`, já que o método *getRecommendations* estabelece um valor *default*.
3. Dependendo do número de produtos e seus respectivos atributos, existe o risco do método *getRecommendations* demorar demais e travar o event loop do JavaScript, causando um travamento no dispositivo do usuário. Só deve ser perceptível em números muito altos de produtos, mas para evitar esse risco é indicado retornar uma *Promise* que será executada no background de maneira assíncrona, evitando travar a interface. Como essa alteração pode quebrar os testes existentes, fica como uma possível melhoria.

### Form.js
1. Não existe nenhum prop de callback no componente para enviar a lista de recomendações para o componente pai, então criei o prop `onSubmit`.
2. Não existe nenhuma validação de formulário, na prática é como se todos os campos fossem opcionais. Isso contradiz a interface, já que os inputs do tipo *radio* no campo `Tipo de Recomendação` dão a entender que algum dos dois valores devem ser selecionados. Isso pode ser resolvido deixando algum dos inputs previamente selecionado, mas como isso envolve alterar um outro arquivo diferente dos três citados nas instruções, apenas iremos tratar tudo como sendo opcional.
3. Fazendo uso do hook *useEffect* podemos observar o estado *recommendations* por mudanças, dessa maneira assim que o estado for alterado, o prop de callback `onSubmit` é acionado e as recomendações são enviadas para o componente pai.

### App.js
1. Aqui a única coisa a ser feita é passar o método *setRecommendations* como parâmetro do prop *onSubmit* que criamos no componente *Form*.

Com isso nós temos uma versão funcional do serviço de recomendação de produtos que foi integrado com o sistema existente, com um algoritmo otimizado e alterando o menor número possível de arquivos!

# Critérios de aceite

As instruções traziam uma lista de critérios de aceite que precisavam ser cumpridos para a tarefa ser considerada completa.

> ## Critérios de Aceite
> 1. O serviço de recomendação de produtos deve ser capaz de receber as preferências e funcionalidades desejadas do usuário através de um formulário.
> 2. O serviço deve retornar recomendações de produtos com base nas preferências e funcionalidades selecionadas pelo usuário.
> 3. Se o tipo de recomendação selecionado for "SingleProduct", o serviço deve retornar apenas um produto que corresponda melhor às preferências e funcionalidades do usuário.
> 4. Se o tipo de recomendação selecionado for "MultipleProducts", o serviço deve retornar uma lista de produtos que correspondam às preferências e funcionalidades do usuário.
> 5. Em caso de empate na seleção de produtos com base nas preferências e funcionalidades do usuário, o serviço deve retornar o último produto que atende aos critérios de seleção.
> 6. O serviço deve ser capaz de lidar com diferentes tipos de preferências e funcionalidades selecionadas pelo usuário.
> 7. O serviço deve ser modular e facilmente extensível para futuras atualizações e adições de funcionalidades.

Vamos passar por cada um e checar se cumprimos os requisitos.

#### 1. O serviço de recomendação de produtos deve ser capaz de receber as preferências e funcionalidades desejadas do usuário através de um formulário.
#### 2. O serviço deve retornar recomendações de produtos com base nas preferências e funcionalidades selecionadas pelo usuário.
#### 4. Se o tipo de recomendação selecionado for "MultipleProducts", o serviço deve retornar uma lista de produtos que correspondam às preferências e funcionalidades do usuário.
#### 6. O serviço deve ser capaz de lidar com diferentes tipos de preferências e funcionalidades selecionadas pelo usuário.
Esses quatro critérios são parecidos no sentido em que devemos checar se o fluxo principal funciona corretamente para diferentes valores de atributos no modo `MultipleProducts`, portanto conseguimos checar todos com o mesmo teste.

Abaixo se encontra um pequeno exemplo dos dados dentro do arquivo *db.json* no projeto do back-end.

    "products": [
        ...,
        {
            "id": 3,
            "name": "RD Conversas",
            "category": "Omnichannel",
            "preferences": [
                "Integração com chatbots",
                "Histórico unificado de interações",
                "Respostas automáticas e personalizadas"
            ],
            "features": [
                "Gestão de conversas em diferentes canais",
                "Chat ao vivo e mensagens automatizadas",
                "Integração com RD Station CRM e Marketing"
            ]
        },
        {
            "id": 4,
            "name": "RD Mentor AI",
            "category": "Uso de Inteligência Artificial",
            "preferences": [
                "Análise preditiva de dados",
                "Recomendações personalizadas para usuários",
                "Integração com assistentes virtuais"
            ],
            "features": [
                "Análise de dados para insights estratégicos",
                "Recomendação de ações com base em padrões",
                "Integração de funcionalidades preditivas nos produtos RD Station"
            ]
        }
    ]
Portanto, se o usuário selecionar os atributos `Integração com chatbots`, `Chat ao vivo e mensagens automatizadas` e `Recomendação de ações com base em padrões`, esperamos que as recomendações sejam *RD Conversas* e *RD Mentor AI*.

![print de tela mostrando o resultado da recomendação](https://i.imgur.com/BJ2V2e6.png)

É exatamente o que foi recomendado pelo serviço, mas para cumprir o requisito o sistema deve lidar com diferentes tipos de preferências e funcionalidades. Caso o usuário selecione outra combinação de atributos, o resultado deve se manter correto. Com as preferências `Personalização de funis de vendas`, `Automação de marketing` e a funcionalidade `Análise de dados para insights estratégicos`, esperamos receber os produtos *RD Station CRM*, *RD Station Marketing* e *RD Mentor AI*.

![print de tela mostrando o resultado da recomendação com campos diferentes](https://i.imgur.com/a91pDht.png)

Esses testes em conjunto aos testes unitários nos dá confiança de que o serviço de recomendação funciona de acordo com as especificações para diferentes preferências e funcionalidades.

#### 3. Se o tipo de recomendação selecionado for "SingleProduct", o serviço deve retornar apenas um produto que corresponda melhor às preferências e funcionalidades do usuário.
#### 5. Em caso de empate na seleção de produtos com base nas preferências e funcionalidades do usuário, o serviço deve retornar o último produto que atende aos critérios de seleção.

O teste anterior trouxe vários produtos que se enquadravam nos atributos selecionados, ou seja, um "empate". Se repetirmos o teste com o campo `Tipo de Recomendação` alterado para `SingleProduct`, esperamos que o produto recomendado seja o último resultado que atenda os critérios, que nesse caso é *RD Mentor AI*.

![print de tela mostrando o resultado da recomendação no modo SingleProduct](https://i.imgur.com/2ADXOh6.png)

#### 7. O serviço deve ser modular e facilmente extensível para futuras atualizações e adições de funcionalidades.

Nessa tarefa implementamos apenas o método `getRecommendations`, mas é bem simples escrever outras funcionalidades que vivem sob o serviço *RecommendationService*. Por exemplo, poderíamos ter um método `sortRecommendations` que retorna uma lista ordenada de recomendações, ou `saveRecommendation` que envia uma requisição POST para o servidor para salvar as recomendações. 

![exemplo de extensão do serviço de recomendações](https://i.imgur.com/zMcEzo9.png)

Com isso acredito que cumprimos todos os critérios de aceite da tarefa!

# Melhorias de layout
> TODO
