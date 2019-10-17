import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  images = [
    "https://cms.souqcdn.com/cms/boxes/img/desktop/1568631109_iPhones_CBM_en.jpg",
            "https://cms.souqcdn.com/cms/boxes/img/desktop/1566824849_HP-15-Laptops-CMB-en.jpg",
             "https://cms.souqcdn.com/cms/boxes/img/desktop/1564423133_Cat-MB-Kingston-v2-en%20%281%29.jpg"];
  constructor() { }

  ngOnInit() {
  }

}
