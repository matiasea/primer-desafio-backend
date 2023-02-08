    
class ProductManager {
        products;
        static id = 1

        constructor () {
        this.products = [];
    }

    getProducts() {
        //devuelve todos los productos del array
        return this.products;
    }

    addProduct( title, descripcion, price, thumbnail, code, stock){
        //agrega productos al array "products" con la condicion que no se repita el campo code
        const codeEncontrado = this.products.find(busqueda => busqueda.code === code);
        const product = { title, descripcion, price, thumbnail, code, stock, id: ProductManager.id++};
  
        if (codeEncontrado) {
            return console.log("El code ya existe")  
      }else if(!title || !descripcion  || !price  || !thumbnail || !code || !stock) {
         return console.log("Todos los campos son obligatorios")
      }
      else{
        console.log("Producto Agregado con exito")
        this.products.push(product)
      }
       
    }

    getProductById (id){
        //filtra y nos develve el producto buscado por su Id
        const idEncontrado = this.products.find(busqueda => (busqueda.id === id));
        if (idEncontrado) {
            return console.log(idEncontrado)
            
        } else { 
            console.log("El producto no existe")
        
        }
    }
    

}


const newProductManager = new ProductManager();
newProductManager.addProduct("Heladera", "Acero", 100550, "img", "rt38", 4)
newProductManager.addProduct("Cocina", "" , 88574, "img", "5538", 11)
newProductManager.getProductById(2);
//console.log(newProductManager.getProducts());
console.log (newProductManager.id)