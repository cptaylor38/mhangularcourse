import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-simplecalculator',
  templateUrl: './simplecalculator.component.html',
  styleUrls: ['./simplecalculator.component.css']
})
export class SimplecalculatorComponent implements OnInit {
  operands: string[] = ['C', '+/-', '%', '/', 'x', '-', '+', '='];
  nums: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  value: number = 0;
  constructor() { }

  ngOnInit(): void {
  }

}
