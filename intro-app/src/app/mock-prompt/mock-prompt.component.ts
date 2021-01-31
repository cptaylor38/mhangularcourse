import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mock-prompt',
  templateUrl: './mock-prompt.component.html',
  styleUrls: ['./mock-prompt.component.css']
})
export class MockPromptComponent implements OnInit {
  currentStage: int = 0;

  constructor() {
   }

  ngOnInit(): void {
  }

  stageManager(){
    //temp to prevent having to refresh
    if(this.currentStage === 4) this.currentStage = 0;
    else this.currentStage++;
  }

}
