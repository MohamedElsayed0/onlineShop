import { Component } from '@angular/core';
import { CategoriesService } from './Services/categories.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  categories;
  
  constructor(
    private categoriesServ:CategoriesService,
    ) {

    this.categories = this.categoriesServ.getCategories();
  }
}
