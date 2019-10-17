import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/Services/products.service';
import { CategoriesService } from 'src/app/Services/categories.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Addproduct } from 'src/app/addproduct';

@Component({
  selector: 'app-edit-products',
  templateUrl: './edit-products.component.html',
  styleUrls: ['./edit-products.component.scss']
})
export class EditProductsComponent implements OnInit {
  product:Addproduct={};
  Category$;
  id;

  constructor(
    private productServ:ProductsService,
    private categoryServ:CategoriesService,
    private router:Router,
    private activetedRoute:ActivatedRoute
  ) {

    this.Category$ =  this.categoryServ.getCategories();

    this.id = this.activetedRoute.snapshot.paramMap.get('id');
    if(this.id){
      this.productServ.getProductId(this.id).subscribe(product=>{
        this.product = product
      })
    }
   }
   save(product){
    if(this.id){

      this.productServ.updateProduct(this.id,product);
      
    }
    this.router.navigateByUrl('admin-products')
  }
  delet(){
    if(confirm('Are you sure you want delet the product ?')){
      this.productServ.deleteProduct(this.id)
      this.router.navigateByUrl('admin-products')
    }
  }
  ngOnInit() {
  }

}
