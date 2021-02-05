import { Component, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-day-priority-list',
  templateUrl: './day-priority-list.component.html',
  styleUrls: ['./day-priority-list.component.css']
})
export class DayPriorityListComponent implements OnInit {
  daysArray: string[] = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
  constructor() { }

  ngOnInit(): void {
  }

  adjustArray(e: {action: string, index: number}){
    let replaced = null;
    let replacer = this.daysArray[e.index];
    if(e.action === 'higher'){
      if(e.index !== 0){
        replaced = this.daysArray[e.index - 1];
        this.daysArray[e.index - 1] = replacer;
        this.daysArray[e.index] = replaced;
      }
    }
    else {
      if(e.index !== 6){
        replaced = this.daysArray[e.index + 1];
        this.daysArray[e.index + 1] = replacer;
        this.daysArray[e.index] = replaced;
      }
    }
  }

}
