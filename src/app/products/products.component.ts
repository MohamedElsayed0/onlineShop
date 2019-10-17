import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../Services/products.service';
import { CategoriesService } from '../Services/categories.service';
import { ShoppingCartService } from '../Services/shopping-cart.service';
import { Observable } from 'rxjs';
import { ShoppingCart } from '../forShpCart&order/ishoppingCart';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  shoppingCart$:Observable<ShoppingCart>;
  products:any[]; 
  categorys; 
  constructor(
    private productServ:ProductsService,
    private categoryServ:CategoriesService,
    private shoppingServ:ShoppingCartService,
  ) { 
    this.categorys = this.categoryServ.getCategories();

    this.productServ.getProduct().subscribe(product=>{ 
      this.products = product;
    });
  }

  async ngOnInit() {
    this.shoppingCart$ = await this.shoppingServ.getAllCard();
  }

}
