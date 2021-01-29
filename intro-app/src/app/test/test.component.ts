import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  constructor() {
    this.formCountArray = Array(this.formcount).fill(0).map((x,i)=> i);
    setTimeout(() => {
      this.addButtonEnabled = !this.addButtonEnabled;
    }, 3000);
  }

  ngOnInit(): void {
  }

  example: string = "String Interpolation Example";
  formCountArray: Array = [];
  formcount: int = 1;
  conditionalComponent: boolean = false;
  addButtonEnabled: boolean = true;
  toggleConditional(){
    this.conditionalComponent = !this.conditionalComponent;
  }
  methodExample(){
    return "String Interpolation with method example.";
  }
  addForms(){
    this.formCountArray.push(this.formCountArray.indexOf(this.formCountArray[this.formCountArray.length - 1]));
    console.log(this.formCountArray.length)
  }

}
