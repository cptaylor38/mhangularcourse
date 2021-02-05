import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-day-list-item',
  templateUrl: './day-list-item.component.html',
  styleUrls: ['./day-list-item.component.css']
})
export class DayListItemComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Input() day: string;
}
