import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { CanActivate, RouterStateSnapshot, Router } from '@angular/router';
import { map } from 'rxjs/Operators';
@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(
    private authServ : AuthService,
    private Router : Router
  ) { }

  canActivate(route,state:RouterStateSnapshot){
    return this.authServ.user.pipe(map(user=>{
      if(user) {
        return true
      }else{
        this.Router.navigate(['/login'],{queryParams:{returnUrl:state.url}})
        return false
      }
    }))
  }
} 
