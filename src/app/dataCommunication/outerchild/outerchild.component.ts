import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-outerchild',
  templateUrl: './outerchild.component.html',
  styleUrls: ['./outerchild.component.css']
})
export class OuterchildComponent {

  @Input() dataFromParent2: any;

  public OuterchildData: any="Test data from outer child";

  constructor(){

  }
  getAllMarksData(){
    return this.OuterchildData;
  }

 
}
