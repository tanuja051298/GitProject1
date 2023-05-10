import { Component } from '@angular/core';
import { DataService } from 'src/app/Services/data.service';

@Component({
  selector: 'app-comp-b',
  templateUrl: './comp-b.component.html',
  styleUrls: ['./comp-b.component.css']
})
export class CompBComponent {

  public dataFromA :any;
  public dataFromB : any="This is the data from B component";

  constructor(private ds : DataService){
    // this.ds.currentMessage.subscribe((res:any)=>{
    //   console.log(res);
    // })
    

    this.ds.getData().subscribe((res:any)=>{
      console.log(res);
      this.dataFromA = res;
    })
  }

  setMessageFromB(){
    this.ds.setData(this.dataFromB);
  }

}
