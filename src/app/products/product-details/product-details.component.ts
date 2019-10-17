import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ShoppingCartService } from 'src/app/Services/shopping-cart.service';
import { ProductsService } from 'src/app/Services/products.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  product={};
  products:any=[];
  id;
  constructor(
    private productServ:ProductsService,
    private activatedRoute:ActivatedRoute,
    private shoppingServ:ShoppingCartService
  ) { 
    this.id = this.activatedRoute.snapshot.paramMap.get("Pid");
    if(this.id){
      this.productServ.getProductIdForDetailPage(this.id).subscribe(item=>{
        this.products = item;
        this.product=item.payload.val();
       // console.log(this.products);
      })
    }
  }
  addToCart(){
    this.shoppingServ.addToCart(this.products);
  }

  ngOnInit() {
  }

}
