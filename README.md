<h1 align="center">
Forum Clean Architecture DDD Node.js
<br>
<br>
</h1>
<br>

## 💻 Projeto
Este projeto foi desenvolvido durante o curso de Node.js da Rocketseat.

O projeto consiste na criação de uma API REST para fórums, aplicando conceitos de **DDD e Clean Architecture**.
O objetivo é praticar a criação de uma API seguindo o **Domain-Driven Design** e **Clean Architecture**, focando no desenvolvimento das regras de negócio da aplicação, enfatizando as regras de entidades e seus casos de uso.

DDD é uma abordagem de design de software que enfatiza a colaboração entre especialistas do domínio e desenvolvedores para criar um modelo de domínio rico e bem estruturado.
O objetivo principal da Clean Architecture é separar o código em camadas com responsabilidades bem definidas, facilitando a manutenção, testabilidade e escalabilidade; e permitindo que a lógica de negócio seja independente de frameworks e detalhes técnicos,
as principais vantagens são: melhorar a testabilidade do código, facilitando a criação de testes automatizados e garantindo a qualidade e escalabilidade do software.

## 🚀 Tecnologias

- **Node.js** 
- **TypeScript**
- **Vitest**

## :pencil: Conceitos

- **Domain-Driven Design (DDD)**
- **Clean Architecture**
- **SOLID**
- **POO**
- **Testes Unitários**
- **Design Patterns**: Factory, Repository
- **InMemoryTestDatabase**
<details>
<summary><strong>Functional Error Handling</strong></summary>

##### Definição
Utiliza-se funções para especificar se uma operação resultou em erro ou sucesso, sendo representado por “tuplas”.
É importante para permitir que o erro seja capturado e tratado de forma adequada em diferentes partes da aplicação.
É possível identificar um resultado de sucesso através do método ```isRight``` ou ```isLeft``` presente quando o tipo é ```Either```.

</details>

## :pencil: Conceitos de Domain-Driven Design aplicados:

<details>
<summary><strong>Domains</strong></summary>

##### Definição
O domínio (domain) refere-se a um conjunto de conceitos, regras, processos e comportamentos que são fundamentais para um determinado negócio ou aplicação.
É a área de conhecimento que descreve e organiza todo o conhecimento e entendimento necessário para desenvolver um software que atenda às necessidades do negócio ou aplicação.

O domínio é a base do DDD e é a partir dele que os modelos de negócio são construídos. Ele é composto por um conjunto de entidades, agregados, serviços e eventos que representam conceitos fundamentais do negócio. 
O conhecimento do domínio é essencial para que os desenvolvedores possam entender as necessidades do negócio e construir um software que atenda a essas necessidades de forma eficiente e eficaz.

Além disso, o DDD enfatiza a importância da comunicação clara e constante entre os desenvolvedores e os especialistas do domínio (conhecidos como especialistas do domínio ou domain experts), 
para que o conhecimento do domínio possa ser compartilhado e incorporado ao processo de desenvolvimento de software.

</details>

<details>
<summary><strong>Entities</strong></summary>

##### Definição
As entidades (entities) são objetos de domínio que representam conceitos importantes do negócio. Elas são responsáveis por encapsular o estado e o comportamento relacionado a esses conceitos, e são fundamentais para a modelagem do domínio.

Uma entidade é caracterizada por ter uma identidade única e constante, que a diferencia de outras entidades do mesmo tipo.

Elas são importantes para o DDD porque elas representam as principais abstrações do domínio, e a sua correta modelagem ajuda a garantir que o software reflita de forma precisa as regras e o comportamento do negócio. 
Além disso, as entidades costumam ser o ponto de entrada para outras operações do sistema, como validações, cálculos e regras de negócio específicas.

##### Como representar o relacionamento entre entidades
Por meio de IDs relacionados entre as entidades, mesmo que a estrutura do banco de dados seja diferente.

##### Métodos Acessores (```Getters``` e ```Setters```)
Os ```accessors``` servem como portas de entrada e saída da entidade, possibilitando validações e manipulações dos dados.
É importante criar ```setters``` somente quando necessário, para proteger as propriedades da classe e evitar alterações indesejadas.

</details>

<details>
<summary><strong>Casos de uso</strong></summary>

##### Definição
Os casos de uso (use cases) são uma técnica para descrever os requisitos funcionais de um sistema. Eles descrevem uma interação específica entre o usuário e o sistema, mostrando quais ações o usuário realiza e como o sistema responde a essas ações.

Eles são uma parte importante do processo de desenvolvimento de software, pois ajudam a definir os requisitos do sistema e a garantir que ele atenda às necessidades dos usuários finais.

</details>

<details>
<summary><strong>Linguagem Ubíqua</strong></summary>

##### Definição
A linguagem ubíqua (ubiquitous language) é uma técnica que consiste em usar uma linguagem comum, compreensível tanto para desenvolvedores quanto para especialistas do domínio, para descrever e entender os conceitos e processos do domínio em questão.

Ela é importante porque ajuda a alinhar a comunicação entre os membros da equipe de desenvolvimento e os especialistas do domínio. Usando uma linguagem comum, todos os envolvidos no projeto podem ter uma compreensão compartilhada dos termos e conceitos-chave do domínio, 
facilitando o desenvolvimento de um software que atenda às necessidades do negócio.

Além disso, ela deve ser incorporada no código-fonte do software e em documentos relacionados, como diagramas e documentação técnica, para garantir que todos os envolvidos usem a mesma terminologia. 
Dessa forma, a linguagem ubíqua ajuda a garantir que o software seja construído para atender às necessidades do negócio e que todos os envolvidos no projeto estejam na mesma página.

##### Importância
Facilita a comunicação entre todos os envolvidos no desenvolvimento, garantindo que todos entendam os conceitos de domínio da mesma forma.

</details>

<details>
<summary><strong>Subdomains</strong></summary>

##### Vantagem

A principal vantagem de separar os subdomínios em uma aplicação (mesmo que ela seja um monólito) é que isso permite a implantação independente de cada subdomínio.
E é importante ter uma estrutura de comunicação entre subdomínios para garantir a independência dos subdomínios.

</details>

<details>
<summary><strong>Domain Experts</strong></summary>

##### Definição
Profissionais que possuem profundo conhecimento sobre o domínio do problema a ser resolvido pelo software.

</details>

<details>
<summary><strong>Watched Lists</strong></summary>

##### Definição
A "Watched List" é uma lista que permite adicionar ou remover itens sem a necessidade de manipular informações específicas de cada item. 
O propósito de utilizá-la é facilitar a manipulação de informações de listas durante operações de edição, identificando quais itens foram adicionados, 
editados ou removidos, de forma a otimizar as operações de atualização no banco de dados.

##### Exemplo
Suponha que temos uma WatchedList de números criada com os itens 1, 2, e 3. Se utilizarmos o método `update([1, 3, 5])`, quais são os itens removidos e os itens adicionados?

<strong>Resposta:</strong> Removidos: 2; Adicionados: 5.

</details>

<details>
<summary><strong>Aggregate Root</strong></summary>

##### Definição
É uma entidade principal que agrupa outras entidades relacionadas e é tratada como uma unidade durante operações de criação, atualização e remoção.

Um agregado (aggregate) é um conjunto de objetos de domínio que são tratados como uma unidade coesa. Eles são usados para delimitar transações consistentes de mudança de estado dentro do domínio.

Um agregado tem uma raiz de agregado (aggregate root), que é uma única entidade que é responsável por garantir a consistência do agregado como um todo. A raiz do agregado é a única entidade que pode ser referenciada de fora do agregado. 
Todas as outras entidades dentro do agregado só podem ser acessadas através da raiz do agregado.

O uso deles é uma das principais técnicas para gerenciar a complexidade em sistemas de software baseados em DDD. Ao definir os limites do agregado, é possível criar um modelo de domínio mais claro e focado, 
com transações e responsabilidades bem definidas para cada objeto no agregado.

</details>

<details>
<summary><strong>Bounded Context</strong></summary>

##### Definição
Bounded Context (contexto delimitado / subdomínio) é uma técnica para definir limites explícitos em torno de um conjunto de modelos de domínio. Cada Bounded Context é uma fronteira lógica que separa um modelo de domínio específico, com suas próprias regras, 
termos e limites, de outros modelos de domínio dentro do mesmo sistema.

Um Bounded Context pode ser visto como um subdomínio ou um setor de um sistema maior, onde as interações entre os objetos de domínio são altamente relacionadas. 
Dentro de um Bounded Context, as regras de negócio podem ser diferentes e podem ter nomes de entidades ou conceitos com significados distintos em outros contextos.

</details>

<details>
<summary><strong>Value Objects</strong></summary>

##### Definição
É uma propriedade da entidade que possui regras próprias, como formatação e validação.

Um Value Object (objeto de valor) é uma classe que representa um valor que é importante para o domínio, mas que não possui identidade própria. 
Em outras palavras, um Value Object é um objeto que é definido pelos seus atributos, em vez de ser definido por uma identidade exclusiva.

Por exemplo, em um sistema de compras online, um Endereço pode ser modelado como um Value Object, pois não é importante manter um identificador único para cada endereço, mas sim os seus atributos, como rua, número, bairro, cidade, estado e CEP. 
Do ponto de vista do negócio, o endereço é apenas uma informação que precisa ser armazenada e consultada, não sendo uma entidade que precisa ser rastreada ou gerenciada.

Porém, é importante lembrar que nem todos os objetos sem identidade são necessariamente Value Objects. A decisão de modelar um objeto como um Value Object depende do contexto do domínio e da análise dos especialistas do negócio e da equipe de desenvolvimento.

</details>

<details>
<summary><strong>Domain Events</strong></summary>

##### Definição
Um evento de domínio (domain event) é uma notificação assíncrona que indica que algo importante aconteceu no domínio do sistema. 
Ele representa um fato ocorrido dentro do sistema que pode ser interessante para outras partes do sistema e pode ser usado para tomar decisões ou gerar novas ações.

Por exemplo, em um sistema de comércio eletrônico, um evento de domínio pode ser gerado quando uma nova compra é realizada com sucesso. 
Esse evento pode conter informações como o identificador da compra, o valor total, o endereço de entrega, entre outras informações relevantes para o domínio.

Eventos de domínio são importantes porque permitem que diferentes partes do sistema sejam notificadas e atualizadas quando ocorrem mudanças importantes no domínio. 
Eles também permitem que o sistema seja projetado de forma mais modular e escalável, pois diferentes partes do sistema podem ser projetadas para reagir a diferentes tipos de eventos, de forma independente.

</details>

<details>
<summary><strong>Subscribers</strong></summary>

##### Definição
São assinantes que reagem a eventos de domínio específicos.

</details>

## :page_facing_up: Como utilizar

- Faça um clone deste repositório:

```sh
  $ git clone https://github.com/luc-ribeiro/forum-clean-ddd-node.git
```

- Instale as dependências:

```sh
  # com npm
  $ npm install

  # com yarn
  $ yarn install
```

- Execute o comando:

```sh
  # com npm
  $ npm run test

  # com yarn
  $ yarn test
```

- O projeto rodará os testes. A estrutura da aplicação é focada em toda a lógica e regra de negócio, independente de frameworks e bancos de dados, seguindo os conceitos mencionados anteriormente.
