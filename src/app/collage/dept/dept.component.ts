import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthGuard } from 'src/app/auth_guard/auth.guard';

@Component({
  selector: 'app-dept',
  templateUrl: './dept.component.html',
  styleUrls: ['./dept.component.css']
})
export class DeptComponent {
  public name:any;
  public idd:any;
   constructor( private auth:AuthGuard, private actRoute: ActivatedRoute){
    // i will fetch the data. there are two ways to read the data

      // 1. route param (direct value)

      this.name = this.actRoute.snapshot.params['uname'];
      this.idd = this.actRoute.snapshot.params['id'];
      console.log(this.name, this.idd);
      
      console.log(this.actRoute.snapshot.params);
      console.log(this.name);
      console.log(this.idd);

      // 2. param Map :
      console.log(this.actRoute.paramMap);
      this.actRoute.paramMap.subscribe(
        ((res:any)=>{
          console.log(res);
          this.name = res.params.uname;
          this.idd = res.params.id;
          console.log(this.name);
          console.log(this.idd);
      
        })
      )
    
  }

}
