--Objeto -> è um tipo de dado e possui duas caracteristicas:
- Propriedade: caracteristicas do Objeto
- Métodos: ações do Objeto
 
---------- Objetos -------------
//Criaçao do Objeto
let carro = {
    porta: 4,
    cor: "Vermelha"
}
console.log("A cor do carro é " + carro.cor)
 
if(carro.porta > 2) {
    console.log("Este carro tem mais de duas postas")
}
 
let corCarro = carro['cor']
console.log("Qtd de letras: " + corCarro.length)
 
//Tipos
 
let maquina = {
    material: "Aço Inox",
    equipementos: ['motor', 'freio', 'esteira', 'cilindro'],
    vaiMontada: false,
    "numero de motor": 1
}
 
console.log(maquina)
console.log(maquina.material)
console.log(maquina.equipementos[1])
console.log(maquina["numero de motor"])
 
for( let i =0; i < maquina.equipementos.length; i++){
    console.log(maquina.equipementos[i])
}
 
if(maquina.vaiMontada == false) {
    console.log("O comprador precisar agendar um tecnico")
}
 
//Metodos
let pessoa = {
    nome: "Nathaly",
    idade: 28,
    getNome: function() {
        console.log("Oi, meu nome é " + this.nome)
    },
    aniversario(){
        this.idade ++;
    },
    mostrarIdade(){
        console.log("Minha idade é " + this.idade)
    },
    setNome(nome) {
        this.nome = nome
    },
    caracteristica: {
        peso: 1.72,
        altura: 1.63,
        pontosExternos: ["oculos", "aparelho", "pince"]
    }
}
 
pessoa.getNome()
pessoa.setNome("Naty")
pessoa.getNome()
 
pessoa.mostrarIdade()
pessoa.aniversario()
pessoa.mostrarIdade()
 
console.log(pessoa.caracteristica.pontosExternos[1])
 
// Criando Metodos em Objetos ja criados
let carro = {
    tipo: "SUV"
}
carro.porta = 4
 
console.log(carro)
 
if(carro.tipo = "SUV"){
    carro.tetoSolar = true
}
 
console.log(carro)
 
carro.acelerar = function() {
    console.log("Vrummmm")
}
 
carro.acelerar()
 
///Deletar Object
delete.carro.acelerar;
 
//Construtor
function Ninja(nome, arma) {
    this.nome = nome;
    this.arma = arma;
    this.atirarArma = function() {
        console.log("Atirou a " + this.arma);
    };
}
 
let ninja1 = new Ninja("Naruto", "Shuriken")
console.log(ninja1.nome)
ninja1.atirarArma()
 
let ninja2 = new Ninja("Sasuki", "Kunai")
console.log(ninja2.nome)
ninja2.atirarArma()
 
//Função q retorna um Objeto
function criarCarro(modelo, portas, aro, tetoSolar) {
    //o retorno da função será um objeto
    return {
        modelo: modelo,
        portas: portas,
        aro: aro,
        tetoSolar:tetoSolar,
        ligarCarro: function() {
            console.log("Ligou!")
        },
        temTetoSolar: function() {
            if(this.temTetoSolar) {
                console.log("Tem teto solar")
            } else {
                console.log("Nao tem teto solar")
            }
        }
    }
}
 
let ferrari = new criarCarro("Ferrari", 4, 18, true)
console.log(ferrari.modelo)
ferrari.temTetoSolar();
 
// Objeto global
-- Sempre q uma pag web é iniciada traz um Objeto chamado window
-- As variaveis globais ficam atreladas a ele como propriedade
 
var teste = "teste"
console.log(teste)
console.log(window.teste)
console.log(this.teste)
-------------------------------
 
let a = 10
let b = 5
 
if (b > 10){
    let a = 5
    console.log(a)
}
console.log(a)
 
//Arrow function -- É uma função anomina
 
//Modelo para qnd se tem varias linhas dentro da função
const arrowSum = (a, b) => {
    return a + b
}
console.log(arrowSum(5,5))
 
//Modelo para qnd se tem apenas uma linha
const arrowLess = (a, b) => a - b
console.log(arrowLess(10,5))
 
const greeting = (name) => {
    if(name){
        return 'Ola ' + '!'
    }else {
        return 'Ola!'
    }
}
console.log(greeting('Joao'))
console.log(greeting())
 
 
//Modelo para ArrowFucntion sem arguments
const testeArrow = () => console.log("teste validado")
testeArrow()

//Modelo usando o this e sem nome
const user = {
    name: "Theo",
    sayUserName(){
        setTimeout(() =>{
            console.log(this)
            console.log("Username: " + this.name)
        }, 700)
    }
}

user.sayUserName()


//Filter - Método de array para filtrar dados

//Criação do array
const arr = [1,2,3,4,5]
console.log(arr)

/*Usando o filtro para criar um novo arr somente com os numeros maiores q 3.
Usa-se tbm a arrow function*/
const highNumbers = arr.filter((n) => {
    if (n >= 3){
        return n
    }
})
console.log(highNumbers)


const users = [
    {name: "Mateus", available: true},
    {name: "Pedro", available: false},
    {name: "Joao", available: false},
    {name: "Marcos", available: true}
]
console.log(users)

//Filtrar usuarios disponiveis
const availableUsers = users.filter((user) => user.available)
console.log(availableUsers)

//Filtrar usuarios não disponiveis
const notAvailableUsers = users.filter((user) => !user.available)
console.log(notAvailableUsers)


//Map - Método de array para modificar dados

//Criação do array
const products = [
    {name: "Camisa", price: 10.99, category: "Roupas"},
    {name: "Chaleira eletrica", price: 49.99, category: "Eletro"},
    {name: "Fogão", price: 500, category: "Eletro"},
    {name: "Calça jeans", price: 50.99, category: "Roupas"}
]

//Adicionar um elemento de promoção somente na categoria de roupas
products.map((product) => {
    if(product.category === "Roupas"){
        product.onSales = true
    }
})

//Aumentar 10% dos eletros
products.map((eletro) => {
    if(eletro.category === "Eletro"){
        eletro.price += eletro.price * 0.10
    }
})

console.log(products)

//Template literals - Permite concatenar uma string de forma mais simples
// A string fica entre `texto`
//As variaveis ficam ${variavel}

const userName = "Mateus"
const age = 30

console.log(`O nome do usuario é ${userName} e sua idade é ${age}`)


//Destructuring - transforma itens de arrays e objetos em variaveis
const fruits = ["Maça", "Laranja", "Mamão"]

//Transformando um array em variaveis
const [f1, f2, f3] = fruits
console.log(f1)

const productDetails = {
    productName: "Mouse",
    price: 39.99,
    productCategory: "Perifericos",
    color: "Cinza"
}

//Transformando um objeto em variaveis
const {
    productName: name, //alterando o nome da propriedade do obj
    price, //mantendo o nome
    productCategory: category,
    color
} = productDetails

console.log(`O nome do produto é ${name}, custa R$${price}, pertence a categoria ${category} e é da cor ${color}`)


//Spread Operator - Unir varios arrays ou objetos de forma mais simples

const a1 = [1,2,3]
const a2 = [4,5,6]

//Unir os dois arrays em um so
const a3 = [...a1, ...a2]
console.log(a3)

//Inserir um arrys dentro de outro q ja contem valores
const a4 = [0, ...a1, 4]
console.log(a4)

const carName = {name: "Gol"}
const carBrand = {brand: "VW"}
const otherInfos = {km: 10000, price: 49000}

//Unir todos os objetos em apenas um
const car = {...carName, ...carBrand, ...otherInfos}
console.log(car)


//Classes
class Product{
    constructor(name, price){
        this.name = name
        this.price = price
    }

    productWithDiscount(discount){
        return this.price * ((100 - discount) / 100)
    }
}

const shirt = new Product("Camisa gola V", 20)
console.log(`O produto é ${shirt.name} e custa R$${shirt.price}`)
console.log(`Novo valor do produto com desconto é ${shirt.productWithDiscount(50)}`)


//Herança
class ProductWithAttributes extends Product {
    constructor(name, price, colors) { //construtor com todos os atributos, novos e herdados
        super(name, price) // super indica q os atributos são de outra classe e nao precisa usar o this
        this.colors = colors
    }

    showColors(){
        console.log("As cores são:")
        this.colors.forEach((color) => { //faz um loop
            console.log(color)
        });
    }
}

const hat = new ProductWithAttributes("Chapeu", 29.99, ["Preto", "Azul","Verde"])

console.log(hat.name + " - R$" + hat.price)
hat.showColors()