import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { ShoppingCart } from '../forShpCart&order/ishoppingCart';
import { map, take } from 'rxjs/Operators';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  constructor(
    private db: AngularFireDatabase,
    private authServ:AuthService
  ) { }
  creatShoppingCart() {
   return this.db.list('/shopping-cart').push({
      date: new Date().getDate(),
    })
  }

  async getOrCreatId() {
    let cardId = localStorage.getItem('cartId');
    if (cardId) return cardId;

    let result = await this.creatShoppingCart();

    localStorage.setItem('cartId', result.key);
    //console.log(result.key)
    return result.key
  }

  async getAllCard(): Promise<Observable<ShoppingCart>> {
    let cardID = await this.getOrCreatId();
    if (cardID ) {
      return this.db.object('/shopping-cart/' + cardID).
        valueChanges().pipe(map(card => new ShoppingCart((card as any).item)))
    }
  }

  getItem(cardID: string, productId: string) {
    return this.db.object('/shopping-cart/' + cardID + '/item/' + productId)
  }

  async addToCart(product){
    this.addAndRemoveItemTocart(product,1)
  }
  
  async removeFromCart(product){
    this.addAndRemoveItemTocart(product,-1)
  }
  async addAndRemoveItemTocart(product,quantatiyState) {
    let cardID = await this.getOrCreatId();
    let items$ = this.getItem(cardID, product.key)
    items$.snapshotChanges().pipe(take(1)).subscribe((item: any) => {
      if (item.payload.exists()) {
        items$.update({
          quantatiy: item.payload.val().quantatiy + quantatiyState,
        })
      }else {
        items$.set({
          product: product.payload.val(),
          quantatiy: 1,
        })
      } 
    })
  }

  async removeItemFromShoppingCartComponant(productId) {//remove from cart
    let cardID = await this.getOrCreatId();
    return this.db.object('/shopping-cart/' + cardID + '/item/' + productId).remove()
  }

  async removeItemFromShoppingCart() {//remove when i add order
    let cardID = await this.getOrCreatId();
    return this.db.object('/shopping-cart/' + cardID + '/item/').remove()
  }
  /*
  async saveForLater(productId) {//remove from cart and save for later
    let cardID = await this.getOrCreatId();
    return this.db.object('/shopping-cart/' + cardID + '/item/' + productId).valueChanges();
  }

  getForLater(user){
        return this.db.list("User/"+ user +'/saveForLater/').valueChanges()
  }
*/
}
