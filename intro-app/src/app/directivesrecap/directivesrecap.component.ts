import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directivesrecap',
  templateUrl: './directivesrecap.component.html',
  styleUrls: ['./directivesrecap.component.css']
})
export class DirectivesrecapComponent implements OnInit {
  colors: string[] = ["red", "blue", "yellow", "orange", "green"];
  condition: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  changeCondition(){
    this.condition = !this.condition;
  }

}
