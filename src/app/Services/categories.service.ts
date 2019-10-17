import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(
    private db:AngularFireDatabase,
  ) { }

  getCategories(){
      return this.db.list('/Categories').valueChanges()
  }
}
 