import { Component, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-day-priority-list',
  templateUrl: './day-priority-list.component.html',
  styleUrls: ['./day-priority-list.component.css']
})
export class DayPriorityListComponent implements OnInit {
  daysArray: string[] = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
  day: string;
  constructor() { }

  ngOnInit(): void {
  }

  adjustArray(action, index){
    let replaced = null;
    let replacer = this.daysArray[index];
    if(action === 'higher'){
      if(index !== 0){
        replaced = this.daysArray[index - 1];
        this.daysArray[index - 1] = replacer;
        this.daysArray[index] = replaced;
      }
    }
    else {
      if(index !== 6){
        replaced = this.daysArray[index + 1];
        this.daysArray[index + 1] = replacer;
        this.daysArray[index] = replaced;
      }
    }
  }

}
