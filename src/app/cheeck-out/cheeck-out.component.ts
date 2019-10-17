import { Component, OnInit } from '@angular/core';
import { AuthService } from '../Services/auth.service';
import { ShoppingCartService } from '../Services/shopping-cart.service';
import { OrdersService } from '../Services/orders.service';

@Component({
  selector: 'app-cheeck-out',
  templateUrl: './cheeck-out.component.html',
  styleUrls: ['./cheeck-out.component.scss']
})
export class CheeckOutComponent implements OnInit {
  cart$;

  constructor(
    private authServ: AuthService,
    private shoppingServ: ShoppingCartService,
    private OrderService: OrdersService,
  ) { }

  async ngOnInit() {
    this.cart$ = await this.shoppingServ.getAllCard();
  }

  addOrder() {
    this.OrderService.addOrder() ;
  }

}
