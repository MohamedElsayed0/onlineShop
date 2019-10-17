import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AngularFireDatabase } from '@angular/fire/database';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-edite-user-info',
  templateUrl: './edite-user-info.component.html',
  styleUrls: ['./edite-user-info.component.scss']
})
export class EditeUserInfoComponent implements OnInit {
  userid;
  userInformation={};
  constructor(
    private activatedRoute:ActivatedRoute,
    private db:AngularFireDatabase,
    private userServ:UserService,
    private router:Router
  ) {
    this.userid = this.activatedRoute.snapshot.paramMap.get('uid');
    if(this.userid){
      this.db.object(`User/${this.userid}`).valueChanges().subscribe(info=>{
        this.userInformation = info;
      })
    }
   }
   update(value){
     this.userServ.update(this.userid,value);
     this.router.navigateByUrl('/user-profile')

   }
  ngOnInit() {
  }

}
