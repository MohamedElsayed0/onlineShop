import { Component, OnInit, Input } from '@angular/core';
import { ShoppingCartService } from 'src/app/Services/shopping-cart.service';
import { ProductsService } from 'src/app/Services/products.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-products-card',
  templateUrl: './products-card.component.html',
  styleUrls: ['./products-card.component.scss']
})
export class ProductsCardComponent implements OnInit {

  @Input('product') product:any = []; 
 
  @Input('shoppingCart') shoppingCart;
  constructor(
    private shoppingServ: ShoppingCartService,
    private productServ: ProductsService,
    private activatedRoute:ActivatedRoute
    ) {
  }
  addToCart() { 
    // console.log(this.product);
     this.shoppingServ.addToCart(this.product)
   }
   getQty(){
     
   }
  ngOnInit() {
  }

}
