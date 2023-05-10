import { Component, ViewChild } from '@angular/core';
import { OuterchildComponent } from '../outerchild/outerchild.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {

  public parentData: any;

  public parentData2: any="data from parent to outer child";

  public childData:any;

  @ViewChild(OuterchildComponent) childComp: any;

  constructor(){
    // this.parentData = "Data from parent component";
    this.parentData = "Data from parent component to inner child";

    console.log(this.childComp);
  }

  ngOnInit(){
    // console.log(this.childComp);
  }

  ngAfterViewInit(){
    console.log(this.childComp);
    console.log(this.childComp.outerChildData);
    console.log(this.childComp.getAllMarksData());
  }

  fetchDataFromChild(evt:any){
    console.log(evt);
    this.childData = evt;
  }




}
