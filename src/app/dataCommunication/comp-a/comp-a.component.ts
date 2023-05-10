import { Component } from '@angular/core';
import { DataService } from 'src/app/Services/data.service';

@Component({
  selector: 'app-comp-a',
  templateUrl: './comp-a.component.html',
  styleUrls: ['./comp-a.component.css']
})
export class CompAComponent {

  public dataFromA ="This is the data from A component";
  public dataFromB :any;
  constructor(private ds: DataService){
    // this.ds.currentMessage.subscribe((res:any)=>{
    //   console.log(res);
    // })

  this.ds.getData().subscribe((res:any)=>{
    console.log(res);
    this.dataFromB = res;
  })
}
  setMessageFromA(){
    this.ds.setData(this.dataFromA);
  }
}
