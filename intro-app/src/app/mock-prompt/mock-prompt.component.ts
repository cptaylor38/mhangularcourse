import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mock-prompt',
  templateUrl: './mock-prompt.component.html',
  styleUrls: ['./mock-prompt.component.css']
})
export class MockPromptComponent implements OnInit {
  currentStage: number = 0;

  constructor() {
   }

  ngOnInit(): void {
  }

  stageManager(isNext: boolean){
    console.log(isNext);
    //temp to prevent having to refresh
    if(isNext){
      if(this.currentStage === 5) this.currentStage = 0;
      else this.currentStage++;
    }
    //temp to prevent having to refresh
    else {
      if(this.currentStage > 0) this.currentStage--;
    }
  }

}
