import { Component, OnInit } from '@angular/core';
import { OrderServService } from '../Services/order-serv.service';

@Component({
  selector: 'app-thank-you',
  templateUrl: './thank-you.component.html',
  styleUrls: ['./thank-you.component.scss']
})
export class ThankYouComponent implements OnInit {

  constructor(
    private orderserv:OrderServService,

  ) { }

  ngOnInit() {
  }

}
