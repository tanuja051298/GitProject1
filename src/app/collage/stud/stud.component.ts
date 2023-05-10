import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/Services/api.service';

@Component({
  selector: 'app-stud',
  templateUrl: './stud.component.html',
  styleUrls: ['./stud.component.css']
})
export class StudComponent {
  public allData:any;
  
  constructor(private actRoute: ActivatedRoute, private api:ApiService){
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
    this.allData = res;
    console.log(res);
  })
  // ((err:any)=>{
  //   console.log(err);
  // })
}
onDelete(data:any){
  console.log(data);
  this.api.deleteData(data.id).subscribe((res:any)=>{
    console.log(res);
    this.getAllData();      // to refresh / to get api data 

  }),
  ((err:any)=>{
    console.log(err);
  })
}
}
