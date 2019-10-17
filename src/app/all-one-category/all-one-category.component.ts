import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../Services/products.service';

@Component({
  selector: 'app-all-one-category',
  templateUrl: './all-one-category.component.html',
  styleUrls: ['./all-one-category.component.scss']
})
export class AllOneCategoryComponent implements OnInit {
  products: any[];
  filterProducts: any[];
  categor = "";
  constructor(
    private productServ: ProductsService,
    private router: ActivatedRoute,
  ) { 
    this.productServ.getProduct().subscribe(product => {
      this.products = product;
     this.router.queryParamMap.subscribe(param => {
       this.categor = param.get("categor");

       if (this.categor) {
         this.filterProducts = this.products.filter(pro => pro.payload.val().Catrgory === this.categor)
       }
       else {
         this.filterProducts
       }
       
     })
   });
  }

  ngOnInit() {
  }

}
