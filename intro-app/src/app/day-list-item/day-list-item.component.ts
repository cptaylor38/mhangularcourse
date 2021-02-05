import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-day-list-item',
  templateUrl: './day-list-item.component.html',
  styleUrls: ['./day-list-item.component.css']
})
export class DayListItemComponent implements OnInit {
  @Output() priorityChange = new EventEmitter<{action: string, index: number}>()
  constructor() { }

  ngOnInit(): void {
  }
  @Input('dayItem') day: string;
  @Input() index: number;
  adjustPriority(action: string, index: number){
    this.priorityChange.emit({action: action, index: index });
  }
}
