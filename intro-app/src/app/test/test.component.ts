import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  constructor() {
    this.formCountArray = Array(this.formcount).fill(0).map((x,i)=> i);
  }

  ngOnInit(): void {
  }

  example: string = "String Interpolation Example";
  formCountArray: Array = [];
  formcount = 1;
  methodExample(){
    return "String Interpolation with method example.";
  }
  addForms(){
    this.formCountArray.push(this.formCountArray.indexOf(this.formCountArray[this.formCountArray.length - 1]));
    console.log(this.formCountArray.length)
  }

}
