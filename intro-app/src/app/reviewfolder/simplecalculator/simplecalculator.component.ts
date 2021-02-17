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
  chosenOperand: string = null;
  chosenNum: number = null;
  constructor() { }

  ngOnInit(): void {
  }

  setNum(number: number){
    this.chosenNum = number;
    if(this.chosenNum && this.chosenOperand){
      this.calculate(number);
    }
    else{
      this.value = number;
    }
  }

  setOperand(operand: string){
    switch(operand){
      case 'C':
        this.value = 0;
        this.chosenNum = null;
        this.chosenOperand = null;
        break;
      case '+/-':
        if(this.value !== 0){
          this.value = this.value * -1
        }
        break;
      case '%':
        if(this.value !== 0){
          this.value = this.value / 100;
        }
        break;
      default:
        this.chosenOperand = operand;
        break;
    }
  }

  calculate(num: number){
    
  }

}
