import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-form',
  templateUrl: './test-form.component.html',
  styleUrls: ['./test-form.component.css']
})
export class TestFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  testName: string = "";
  text: string = "";

  methodTest(){
    return this.testName;
  }

}
