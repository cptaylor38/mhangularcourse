import { Component, OnInit, OnChanges, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-test-onchange-component',
  templateUrl: './test-onchange-component.component.html',
  styleUrls: ['./test-onchange-component.component.css']
})
export class TestOnchangeComponentComponent implements OnInit, OnChanges {
  @Input() name: string;  
  currentValue: string;
  previousValue: string;
  constructor() { }

  ngOnChanges(changes: SimpleChanges){
    //why is previous value undefined?
    console.log(changes.name);
    this.previousValue = changes.name.previousValue;
    this.currentValue = changes.name.currentValue;
  }

  ngOnInit(): void {
  }

  ngChangesStyle(){
    
  }

}
