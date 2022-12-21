// Se hace declaración de la clase "Product Manager"
class ProductManager{

    // Función constructora
    constructor(title, description, price, imageUrl, stock){
        this.title = title,
        this.description = description,
        this.price = price,
        this.imageUrl = imageUrl,
        this.stock = stock
    }

    // Método de agregado
    static addProducts(constructor){
        let lastcode = 
        products.length != 0 ? products[products.length - 1].code : 0;
        constructor.code = ++lastcode;
        products.push(constructor);
    }

    // Método de devolución
    static getProducts(){
        console.log(products)
    }

    // Método de devolución por id
    static getProductById(code){
        let identificador = products.find((prod) => prod.code == code)
        if(identificador){
            console.log(`Tu producto es ${identificador.title}`)
        } else {
            console.log("Ninguno de tus productos coincide con el ID seleccionado")
        }
    }
}

// En la variable products se almacenarán los productos
const products = [];

// Añadiendo productos con el método addProducts
ProductManager.addProducts(
    new ProductManager("Lugia V", "Carta de Pokémon TCG correspondiente a la expansión de Tempestad plateada", 12.99, "https://i.imgur.com/w9Cwyc7.jpg", 30)
);

ProductManager.addProducts(
    new ProductManager("Lugia VStar", "Carta de Pokémon TCG correspondiente a la expansión de Tempestad plateada", 21.99, "https://i.imgur.com/UKZV1DE.jpg", 15)
);

ProductManager.addProducts(
    new ProductManager("Mew V", "Carta de Pokémon TCG correspondiente a la expansión de Fusion Strike", 3.49, "https://i.imgur.com/j4OvW3h.jpg", 15)
);

ProductManager.addProducts(
    new ProductManager("Mew VMax", "Carta de Pokémon TCG correspondiente a la expansión de Fusion Strike", 5.99, "https://i.imgur.com/pOZDgj8.jpg", 6)
);

// Probando el método getProducts
ProductManager.getProducts();

// Probamos el método getProductsById
ProductManager.getProductById(2);

// Verificando que los productos estén todos en el array
console.log(`Tienes un total de ${products.length} productos en tu tienda`)