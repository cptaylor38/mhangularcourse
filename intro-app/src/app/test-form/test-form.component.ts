import { Component, OnInit,} from '@angular/core';

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
  inputValue = { name: "", text: "" };
  inputEvent = "";

  methodTest(){
    return this.testName;
  }

  getValues(event: any){
    this.inputValue.name = event.testNameInput;
    this.inputValue.text = event.textInput;
  }

  onTextInputChange(event: any){
    this.inputEvent = event.target.value;
  }

}
