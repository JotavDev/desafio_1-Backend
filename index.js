class ProductManager{

    constructor(){
        this.products = [];
    }

    getProducts(){
        console.log(this.products);
    }

    addProduct(title, description, price, image, stock){
        const product = {
            title: title,
            description: description,
            price: price,
            image: image,
            stock: stock
        }

        if(
            product.title &&
            product.description &&
            product.price &&
            product.image &&
            product.stock
        ){
            this.products.push(product)
        } else {
            console.log("Tienes que incluir toda la información de este artículo")
        }

        this.products.length === 0 ? product.id = 0 : product.id = this.products.length;
    }

    getProductById(id){
        let identificador = this.products.find((prod) => prod.id == id)
        identificador ? console.log(`Tu producto es ${identificador.title}`) : console.log("Ninguno de tus productos coincide con el ID seleccionado")
    }
}

const productos = new ProductManager();

// Añadiendo productos con el método addProducts
productos.addProduct("Lugia V", "Carta de Pokémon TCG correspondiente a la expansión de Tempestad plateada", 12.99, "https://i.imgur.com/w9Cwyc7.jpg", 30);
productos.addProduct("Lugia VStar", "Carta de Pokémon TCG correspondiente a la expansión de Tempestad plateada", 21.99, "https://i.imgur.com/UKZV1DE.jpg", 15);
productos.addProduct("Mew V", "Carta de Pokémon TCG correspondiente a la expansión de Fusion Strike", 3.49, "https://i.imgur.com/j4OvW3h.jpg", 15);
productos.addProduct("Mew VMax", "Carta de Pokémon TCG correspondiente a la expansión de Fusion Strike", 5.99, "https://i.imgur.com/pOZDgj8.jpg", 6);

// Añadiendo un producto sin toda la información, devuelve por consola mensaje
productos.addProduct("Pikachu V", 5.99, "https://i.imgur.com/pOZDgj8.jpg");

// Probando el método getProducts
productos.getProducts();

// Probamos el método getProductsById
productos.getProductById(3);