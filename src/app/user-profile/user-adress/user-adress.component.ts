import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-user-adress',
  templateUrl: './user-adress.component.html',
  styleUrls: ['./user-adress.component.scss']
})
export class UserAdressComponent implements OnInit {
  myuser;
  constructor(
    private authServ:AuthService
  ) { 
    this.authServ.user.subscribe(user=>{
      if(user){
        this.myuser = user;
      }
    })
  }

  ngOnInit() {
  }

}
