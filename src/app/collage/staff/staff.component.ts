import { Component } from '@angular/core';
import { ApiService } from 'src/app/Services/api.service';

@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.css']
})
export class StaffComponent {
  public citys:any=["choose city","Pune","Mumbai","Goa","Hyderabad","Benguluru","Channai"];
  
  
  public allData:any;
  
  //to update put form in input fields
  public n:any;
  public el:any;
  public cit:any;
  public gen:any;
  public ps:any;
  public idd:any;

  constructor(private api: ApiService ){
    this.getAllData();
  }

onSubmitData(data:any){
  console.log(data.value);
  this.api.postData(data.value).subscribe((res:any)=>{
    console.log(res);
    this.getAllData();       // to refresh / to get api data 
  }),
  ((err:any)=>{
    console.log(err);
  })
}
getAllData(){
  this.api.getData().subscribe((res:any)=>{
    console.log(res);
    this.allData = res;

  })
  // ((err:any)=>{
  //   console.log(err);
  // })
}
updateStudData(data:any){
  console.log(data.value)
  this.api.updateData(data.value).subscribe((resp:any)=>{
    console.log(resp)},
    ((err:any)=>console.log(err))
    )
}
 //to update put form in input fields
 onUpdate(data:any){
    console.log(data);
    this.n = data.fname;
    // this.ln = data.lname;
    this.el = data.eml;
    this.cit = data.city;
    this.gen = data.gender;
    this.ps = data.pass;
    this.idd = data.id;

} 
 //new update data
onClickUpdate(data:any){
    console.log(data);
    this.api.updateData(data.value).subscribe((res:any)=>{
      console.log(res);
      this.getAllData();
    }),
    ((err:any)=>{
      console.log(err);
    })
  }
}
