import { Component, OnInit ,NgZone } from '@angular/core';
import { AuthService } from '../Services/auth.service';
import { UserService } from '../Services/user.service';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from '../inter-faces.user';
import { auth } from 'firebase';
import { AngularFireAuth } from '@angular/fire/auth';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  errorMessage: string; 

  constructor(
    private userServ: UserService,
    private autserv: AuthService,
    private router: Router,
    private activatedRoute:ActivatedRoute,
    private afauth:AngularFireAuth,

  ) { }

  SendVerificationMail() {
    return this.afauth.auth.currentUser.sendEmailVerification()
    .then(() => {
      this.router.navigate(['/']);
    })
  }

  signUp(value : User) {
    this.autserv.createWithEmailAndPassword(value.email, value.password)
      .then(result => {
        this.SendVerificationMail().then(result=>{console.log(result)}).catch((error) => {
          window.alert(error.message)
        }); // Sending email verification notification, when new user registers
        this.userServ.addNewUser(result.user.uid,value);
        this.autserv.user.subscribe(user => {
          if(user){
            let returnURL = this.activatedRoute.snapshot.queryParamMap.get('returnUrl');
            if(returnURL){
              this.router.navigateByUrl(returnURL);
            }else{
              this.router.navigateByUrl('/');
            }
          }
        })
      })
      .catch(err => {
        this.errorMessage = err.message
        console.log(err.message);
      })
  }

  uploadPhoto(event){
    this.userServ.uploadPhoto(event)
  }

  
  ngOnInit() {
  }

}
