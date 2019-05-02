function Product(id,name,price) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.getId = function () {
        return this.id;
    };
    this.getName = function () {
        return this.name;
    };
    this.getPrice = function () {
        return this.price;
    };
}
function ListProduct() {
    this.data = [];
    this.viewProduct = function () {
        let listProduct = this.data;
        for (let i = 0; i < listProduct.length; i++) {
            document.write("<div>" + listProduct[i].id + " , " + listProduct[i].name + " , " + listProduct[i].price + "</div>");
        }
    };
    this.addProduct = function (id, name, price) {
        let product = {
            id: id,
            name: name,
            price: price
    }
        ;
        this.data.push(product);

    };
    this.removeProduct = function(id){
        for(let i = 0; i < this.data.length; i++){
            if (this.data[i].id === id) {
                this.data.splice(i, 1);
            }
        }
    };
    this.editProduct = function(id, name, price){
        for(let i = 0; i < this.data.length; i++){
            if (this.data[i].id === id) {
                this.data[i].name = name;
                this.data[i].price = price;
            }
        }
    }
}
let listProduct1 = new ListProduct();
listProduct1.addProduct(1,"IphoneXsMax",2000);
listProduct1.addProduct(2,"IphoneXs",2001);
listProduct1.addProduct(3,"IphoneX",2002);
listProduct1.addProduct(4,"SamSungS10",2003);
listProduct1.addProduct(5,"SamSungS9",2004);
listProduct1.addProduct(6,"SamSungs8",2005);
listProduct1.removeProduct(5);
listProduct1.editProduct(2,"Sony-Xperia-Z3", 1500 );
listProduct1.viewProduct();

