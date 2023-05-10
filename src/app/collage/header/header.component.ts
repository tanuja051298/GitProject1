import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  public isShow:boolean= true;

  // public navitageStud: boolean = false;

  constructor(private route: Router){

  }
  
  onClickOfAdmsn(){
    console.log("Hello this is comp.ts");
    if(this.isShow==true){
      this.route.navigate(['admsn']);

      // this.route.navigateByUrl('admsn');
    }
  }
  // onClickofStud(){
  //   this.navitageDept = true;
  //   this.route.navigate(['detp/12/']);

    // this.route.navigateByUrl('stud/15');
 // }

}

