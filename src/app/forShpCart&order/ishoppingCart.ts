import { IshoppingCartItem } from './ishoppingCartItems';


export class ShoppingCart { 

    constructor(
        private item: IshoppingCartItem[]
    ) { 
      //console.log(this.item)
    };

    get getTotleCounter() {
        let counter = 0;
        for (const key in this.item) {
            counter += this.item[key].quantatiy
        }
        return counter;
    };
    get productIds() {
        if (this.item ) return Object.keys(this.item);
    };

    get totalPrice() {
        let totalPricecounter = 0;
        for (const key in this.item) {
            let itemPric = this.item[key].product.price;
            let quantatiy = this.item[key].quantatiy;
            totalPricecounter += itemPric * quantatiy
        }
        return totalPricecounter
    };
}
