import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { ShoppingCart } from '../forShpCart&order/ishoppingCart';
import { CategoriesService } from '../Services/categories.service';
import { ProductsService } from '../Services/products.service';
import { ShoppingCartService } from '../Services/shopping-cart.service';
import { AuthService } from '../Services/auth.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  product: any[];
  categorys;
  shoppingCart$: Observable<ShoppingCart>;
  cart$;
  totalPricecounter$: Observable<ShoppingCart>;
  filtercategorys: any[];


  @Output() public sideNavToggle = new EventEmitter();

  constructor(
    private categoryServ:CategoriesService,
    private productServ:ProductsService,
    private shoppingServ:ShoppingCartService,
    private authserv:AuthService
  ) { 
    this.categoryServ.getCategories().subscribe(catg => {
      this.filtercategorys = this.categorys = catg
    });
  }
  toggleSideNav() {
    this.sideNavToggle.emit()
  }

  logout() {
    this.authserv.logout();
  }
  async ngOnInit() {
    this.shoppingCart$ = await this.shoppingServ.getAllCard();
    this.cart$ = await this.shoppingServ.getAllCard();
    this.totalPricecounter$ = await this.shoppingServ.getAllCard();
  }

}
