import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { DataService } from '../Services/data.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  // public data: any;

  constructor(private ds: DataService){

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree{
    //  this.ds.getData().subscribe(
    //   (res:any)=>{
    //     console.log(res);
    //     this.data = (res);
    //     if(this.data.length > 9){
    //       return true;
    //     }
    //     else return false;
    //   })
   
      return true;
  }
  
}
