import { Component, OnInit, ViewChild } from '@angular/core';

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
  formCountArray: Array<number> = [];
  colorToggled: boolean = true;
  formcount: number = 1;
  localReferenceInput: string;
  testing: boolean = false;
  conditionalComponent: boolean = false;
  addButtonEnabled: boolean = true;
  ngclass: boolean = true;
  name: string = 'george';

  @ViewChild('viewChildInput',{static: true}) viewChildInput;
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
  toggleColor(){
    this.colorToggled = !this.colorToggled;
  }
  getBackgroundColor(){
    return this.colorToggled ? 'green' : 'red';
  }
  toggleNgClass(){
    this.ngclass = !this.ngclass;
  }
  localReferenceSubmit(element: HTMLInputElement){
    console.log(element.value);
    this.localReferenceInput = element.value;
  }
  viewChildExampleSubmit(){
    console.log(this.viewChildInput);
  }

  onChangeFirst(){
    let randomNames = ['bob', 'ted', 'susan'];
    this.name = randomNames[Math.floor(randomNames.length * Math.random())];
  }
}
