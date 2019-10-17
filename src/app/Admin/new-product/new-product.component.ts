import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/Services/products.service';
import { CategoriesService } from 'src/app/Services/categories.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Addproduct } from 'src/app/addproduct';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.scss']
})
export class NewProductComponent implements OnInit {

  product:Addproduct={};
  Category$;

  //categoryName='';
  //category;
  constructor(
    private productServ:ProductsService,
    private categoryServ:CategoriesService,
    private router:Router,
  ) { 
    this.Category$ =  this.categoryServ.getCategories();
  }
  save(product:Addproduct){
    //console.log(product)
      if(product){
        this.productServ.creatProduct(product);
        this.router.navigateByUrl('admin-products')
      }
  }
  delet(){
    this.router.navigateByUrl('admin-products')
  }
  ngOnInit() {
   
  }

}
