import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { AuthService } from './auth.service';
import { ShoppingCartService } from './shopping-cart.service';
import { Observable } from 'rxjs';
import { orders } from '../forShpCart&order/orders';
import { map } from 'rxjs/Operators';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  order; // to set the orders to dataBase

  constructor(
    private db: AngularFireDatabase,
    private authServ: AuthService,
    private shoppingServ: ShoppingCartService,
  ) { 
    this.shoppingServ.getAllCard().then((result)=>{
      result.subscribe(item=>{
        this.order = item
      })
    })
  }
  addOrder(){
    this.authServ.user.subscribe(user=>{
      if(user){
        this.db.list('User/' + user.uid + '/Orders/').push(this.order)
        .then((result)=>{
          this.db.object('User/' + user.uid + '/Orders/'+ result.key).update({
            orderDate: new Date().toLocaleDateString(),
            orderTime: new Date().toLocaleTimeString(),
          });
          this.shoppingServ.removeItemFromShoppingCart()//to clean shopping cart
        })
      }
    })
  }

  async getAllOrders(userId):Promise<Observable<orders>>{
    return this.db.object('/User/'+ userId).
    valueChanges().pipe(map((order:any) => new orders(order.Orders)))
  }

  getUser(userId){
    return this.db.object('/User/'+ userId ).valueChanges();
 }

}
 