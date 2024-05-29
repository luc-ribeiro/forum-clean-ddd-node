<h1 align="center">
Forum Clean Architecture DDD Node.js
<br>
<br>
</h1>

<div align="right">
    Clique <a href="https://github.com/luc-ribeiro/forum-clean-ddd-node/blob/main/README-PTBR.md">aqui</a> para ver a versão em Português.
</div>
<br>

## 💻 Project
This project was developed during the Node.js course at Rocketseat.

The project consists of creating a REST API for forums, applying **DDD and Clean Architecture** concepts.
The goal is to practice creating an API following **Domain-Driven Design** and **Clean Architecture**, focusing on developing the application's business rules, emphasizing entity rules and their use cases.

DDD is a software design approach that emphasizes collaboration between domain experts and developers to create a rich and well-structured domain model.
The main goal of Clean Architecture is to separate the code into layers with well-defined responsibilities, facilitating maintenance, testability, and scalability; and allowing business logic to be independent of frameworks and technical details.
The main advantages are: improving code testability, facilitating the creation of automated tests, and ensuring software quality and scalability.

## 🚀 Technologies

- **Node.js** 
- **TypeScript**
- **Vitest**

## :pencil: Concepts

- **Domain-Driven Design (DDD)**
- **Clean Architecture**
- **SOLID**
- **OOP**
- **Unit Testing**
- **Design Patterns**: Factory, Repository
- **InMemoryTestDatabase**
<details>
<summary><strong>Functional Error Handling</strong></summary>

##### Definition
Functions are used to specify whether an operation resulted in an error or success, represented by “tuples”.
It is important to allow the error to be captured and handled appropriately in different parts of the application.
A success result can be identified through the ```isRight``` or ```isLeft``` method present when the type is ```Either```.

</details>

## :pencil: Applied Domain-Driven Design Concepts:

<details>
<summary><strong>Domains</strong></summary>

##### Definition
The domain refers to a set of concepts, rules, processes, and behaviors that are essential for a particular business or application.
It is the area of knowledge that describes and organizes all the knowledge and understanding necessary to develop software that meets the needs of the business or application.

The domain is the foundation of DDD and it is from it that business models are built. It is composed of a set of entities, aggregates, services, and events that represent fundamental business concepts.
Domain knowledge is essential so that developers can understand the business needs and build software that meets those needs efficiently and effectively.

In addition, DDD emphasizes the importance of clear and constant communication between developers and domain experts (known as domain experts or domain experts),
so that domain knowledge can be shared and incorporated into the software development process.

</details>

<details>
<summary><strong>Entities</strong></summary>

##### Definition
Entities are domain objects that represent important business concepts. They are responsible for encapsulating the state and behavior related to these concepts and are fundamental for domain modeling.

An entity is characterized by having a unique and constant identity, which differentiates it from other entities of the same type.

They are important for DDD because they represent the main abstractions of the domain, and their correct modeling helps ensure that the software reflects the rules and behavior of the business accurately.
In addition, entities are often the entry point for other system operations, such as validations, calculations, and specific business rules.

##### How to represent the relationship between entities
Through related IDs between entities, even if the database structure is different.

##### Accessor Methods (```Getters``` and ```Setters```)
The accessors serve as entry and exit points for the entity, enabling data validations and manipulations.
It is important to create ```setters``` only when necessary, to protect the class properties and avoid unwanted changes.

</details>

<details>
<summary><strong>Use Cases</strong></summary>

##### Definition
Use cases are a technique for describing the functional requirements of a system. They describe a specific interaction between the user and the system, showing what actions the user performs and how the system responds to those actions.

They are an important part of the software development process because they help define the system requirements and ensure that it meets the needs of end users.

</details>

<details>
<summary><strong>Ubiquitous Language</strong></summary>

##### Definition
Ubiquitous language is a technique that involves using a common language, understandable to both developers and domain experts, to describe and understand the concepts and processes of the domain in question.

It is important because it helps align communication between development team members and domain experts. By using a common language, everyone involved in the project can have a shared understanding of the domain's key terms and concepts,
facilitating the development of software that meets the business needs.

In addition, it should be incorporated into the software source code and related documents, such as diagrams and technical documentation, to ensure that all involved use the same terminology.
Thus, ubiquitous language helps ensure that the software is built to meet the needs of the business and that all project stakeholders are on the same page.

##### Importance
Facilitates communication among all involved in development, ensuring that everyone understands domain concepts in the same way.

</details>

<details>
<summary><strong>Subdomains</strong></summary>

##### Advantage

The main advantage of separating subdomains in an application (even if it is a monolith) is that it allows independent deployment of each subdomain.
And it is important to have a communication structure between subdomains to ensure the independence of the subdomains.

</details>

<details>
<summary><strong>Domain Experts</strong></summary>

##### Definition
Professionals who possess deep knowledge about the domain of the problem to be solved by the software.

</details>

<details>
<summary><strong>Watched Lists</strong></summary>

##### Definition
A "Watched List" is a list that allows adding or removing items without the need to manipulate specific information for each item. 
The purpose of using it is to facilitate the manipulation of list information during editing operations, identifying which items have been added, 
edited, or removed, in order to optimize update operations in the database.

##### Example
Suppose we have a WatchedList of numbers created with items 1, 2, and 3. If we use the `update([1, 3, 5])` method, what are the removed items and the added items?

<strong>Answer:</strong> Removed: 2; Added: 5.

</details>

<details>
<summary><strong>Aggregate Root</strong></summary>

##### Definition
It is a primary entity that groups other related entities and is treated as a unit during creation, updating, and removal operations.

An aggregate is a set of domain objects that are treated as a cohesive unit. They are used to delimit consistent state change transactions within the domain.

An aggregate has an aggregate root, which is a single entity that is responsible for ensuring the consistency of the aggregate as a whole. The aggregate root is the only entity that can be referenced from outside the aggregate. 
All other entities within the aggregate can only be accessed through the aggregate root.

Their use is one of the main techniques for managing complexity in DDD-based software systems. By defining aggregate boundaries, it is possible to create a clearer and more focused domain model, 
with well-defined transactions and responsibilities for each object in the aggregate.

</details>

<details>
<summary><strong>Bounded Context</strong></summary>

##### Definition
Bounded Context is a technique for defining explicit boundaries around a set of domain models. Each Bounded Context is a logical boundary that separates a specific domain model, with its own rules,
terms, and boundaries, from other domain models within the same system.

A Bounded Context can be seen as a subdomain or a sector of a larger system, where interactions between domain objects are highly related.
Within a Bounded Context, business rules may be different and may have entity names or concepts with distinct meanings in other contexts.

</details>

<details>
<summary><strong>Value Objects</strong></summary>

##### Definition
It is a property of the entity that has its own rules, such as formatting and validation.

A Value Object is a class that represents a value that is important for the domain but does not have its own identity.
In other words, a Value Object is an object that is defined by its attributes, rather than being defined by a unique identity.

For example, in an online shopping system, an Address can be modeled as a Value Object because it is not important to maintain a unique identifier for each address, but rather its attributes, such as street, number, neighborhood, city, state, and ZIP code.
From a business perspective, the address is just information that needs to be stored and queried, not an entity that needs to be tracked or managed.

However, it is important to remember that not all objects without identity are necessarily Value Objects. The decision to model an object as a Value Object depends on the domain context and the analysis of business experts and the development team.

</details>

<details>
<summary><strong>Domain Events</strong></summary>

##### Definition
A domain event is an asynchronous notification that indicates that something important has happened in the system's domain.
It represents an event that occurred within the system that may be of interest to other parts of the system and can be used to make decisions or generate new actions.

For example, in an e-commerce system, a domain event can be generated when a new purchase is made successfully.
This event may contain information such as the purchase identifier, the total amount, the delivery address, among other information relevant to the domain.

Domain events are important because they allow different parts of the system to be notified and updated when important changes occur in the domain.
They also allow the system to be designed more modularly and scalably, as different parts of the system can be designed to react to different types of events independently.

</details>

<details>
<summary><strong>Subscribers</strong></summary>

##### Definition
Subscribers are subscribers that react to specific domain events.

</details>

## :page_facing_up: How to use

- Clone this repository:

```sh
  $ git clone https://github.com/luc-ribeiro/forum-clean-ddd-node.git
```

- Install dependencies:

```sh
  # with npm
  $ npm install

  # with yarn
  $ yarn install
```

- Run the command:

```sh
  # with npm
  $ npm run test

  # with yarn
  $ yarn test
```

- The project will run the tests. The application structure is focused on all logic and business rule, independent of frameworks and databases, following the concepts mentioned above.
