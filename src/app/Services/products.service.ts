import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(
    private db : AngularFireDatabase
  ) { }

  creatProduct(product){
    this.db.list('/prouducts').push(product)
  }
  getProduct(){
    return this.db.list('/prouducts').snapshotChanges();
  }
  getProductId(id:string){//to get value of products
    return this.db.object(`/prouducts/${id}`).valueChanges();
  }
  getProductIdForDetailPage(id:string){
    return this.db.object(`/prouducts/${id}`).snapshotChanges();
  }
  updateProduct(Pid,product){
    return this.db.object(`/prouducts/${Pid}`).update(product);
  }
  deleteProduct(Pid:string){
    return this.db.object(`/prouducts/${Pid}`).remove();
  }
}
