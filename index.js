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
