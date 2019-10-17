import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../Services/auth.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent implements OnInit {
  error:string;
  constructor(
    private authserv:AuthService,
    private router:Router,
    private activatedRoute:ActivatedRoute) { }

  ngOnInit() {
  } 

  loginEmailAndPassword(data) {
    this.authserv
      .loginEmailAndPassword(data.email, data.password)
      .then(() => {
        this.authserv.user.subscribe(user => {
          if(user){
            let returnURL = this.activatedRoute.snapshot.queryParamMap.get('returnUrl');
            this.router.navigateByUrl(returnURL);
          }
        })
      })
      .catch(error => this.error = error)
  }

}
