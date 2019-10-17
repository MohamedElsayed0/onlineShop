import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from '../Services/shopping-cart.service';
import { ProductsService } from '../Services/products.service';
import { AuthService } from '../Services/auth.service';
import { AngularFireDatabase } from '@angular/fire/database';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {
  cart$;
  productIDs;

  savForlater:any[] =[];
  constructor(
    private shoppingServ: ShoppingCartService,
    private productServ:ProductsService,
    private authServ : AuthService,
    private db:AngularFireDatabase
  ) {

   }

  async ngOnInit() {
    this.cart$ = await this.shoppingServ.getAllCard();
    this.cart$.subscribe(card=>{
      console.log(card) 
      this.productIDs = card.productIds;
    })
  }
  removeItem(i) {
    this.shoppingServ.removeItemFromShoppingCartComponant(this.productIDs[i])
  }

 /* saveForLater(i){
    this.shoppingServ.saveForLater(this.productIDs[i]).then((result)=>{
      result.subscribe(prod=>{
        this.authServ.user.subscribe(user=>{
          if(user){
            this.db.object('User/' + user.uid + '/saveForLater/' + this.productIDs[i]).set(prod)
            .then(()=>{
              this.db.object('User/' + user.uid + '/saveForLater/').snapshotChanges().subscribe(product=>{
                this.savForlater.push(product);
                console.log(this.savForlater);
                console.log(this.savForlater);
                
              });
            })
          }
        })
      })
    })
  }*/
}
