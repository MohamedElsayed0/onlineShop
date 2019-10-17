import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductsService } from 'src/app/Services/products.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.scss']
})
export class AdminProductsComponent implements OnInit,OnDestroy {
 
  products:any[];
  subscribe:Subscription;
  fillterProduct:any[];
  
  constructor(
    private productServ:ProductsService,
  ) {

   this.subscribe = this.productServ.getProduct().subscribe(product=>{
      this.fillterProduct = this.products = product
    })
   }

   filter(queryString:string){
     if(queryString){
      this.fillterProduct = this.products.filter(
        val => val.payload.val().title.toLowerCase().includes(queryString.toLowerCase())
        )
     }else{
      this.fillterProduct = this.products
     }
   }
  ngOnDestroy(): void {
    this.subscribe.unsubscribe();
  }
  ngOnInit() {
  } 
}
