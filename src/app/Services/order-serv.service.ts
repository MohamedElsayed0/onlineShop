import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { AngularFireDatabase } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
//this service to display thank you page
export class OrderServService {
  orderId; // to order Id
  ordersVw; // to viwe the orders in may app 
  orderDate; // to get order date 
  orderTime; // to get order time


  constructor(
    private authServ:AuthService,
    private db : AngularFireDatabase
  ) { 
    this.authServ.user.subscribe(user=>{
      if(user){
        let getOrdersKeys = this.db.list('User/' + user.uid + '/Orders').snapshotChanges()
        getOrdersKeys.subscribe((order:any)=>{
          order.forEach(item => {
            
            this.orderId = item.key;

            let orderTimeAndDate = item.payload.val();
            this.orderTime = orderTimeAndDate.orderTime;
            this.orderDate = orderTimeAndDate.orderDate;

            let product = item.payload.val().item; // I need change some code here 
            for ( let key in product ){
              this.ordersVw = product[key];
            };

          });
        })
      }
    })
  }
}
 