import { Component, OnInit } from '@angular/core';
import { CategoriesService } from '../Services/categories.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/Operators';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  options: any[] = [];

  constructor(
    private categoryServ: CategoriesService,
    private router: Router
  ) {
    this.categoryServ.getCategories().subscribe(pro => {
      this.options = pro
    })
  }

  filter(value) {
    this.router.navigate(['/all-one-ctegories'], { queryParams: { categor: value } })
  }
  search = (text$: Observable<string>) =>
    text$.pipe(
      map(term => term === '' ? []
        : this.options.filter(v =>
          v.name.toLowerCase()
            .indexOf(term.toLowerCase()) > -1)
          .slice(0, 10))
    );
    
formatter = (x: {name: string}) => x.name;

  ngOnInit() {
  }

}
