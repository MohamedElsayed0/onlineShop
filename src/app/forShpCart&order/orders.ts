import { ordersItem } from './orders-Item';

export class orders {

    constructor(
        private order: ordersItem
    ) { }

    get keys() {
        let productKeys = [];
        let order = this.order;
        for (let i in order) {
            productKeys.push(this.order[i].orderKey);
        }
        return productKeys
    }
    get productIds() {
        if (this.order) return Object.keys(this.order);
    }
    get totalPrice() {
        let totalPricecounter;
        let orders = this.order;

        for (const key in orders) {
            let a = orders[key].item;
            for (let i in a) {
                totalPricecounter = a[i].product
            }
        }
        return totalPricecounter
    }
}