import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-simplecalculator',
  templateUrl: './simplecalculator.component.html',
  styleUrls: ['./simplecalculator.component.css']
})
export class SimplecalculatorComponent implements OnInit {
  operands: string[] = ['C', '+/-', '%', '/', 'x', '-', '+', '='];
  nums: number[] = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0];
  currentValue: number = null;
  inputValue: string = null;
  previousValue: number = null;
  operation: string = null;
  constructor() { }

  ngOnInit(): void {
  }

  setNum(number: number){
    if(!this.inputValue){
        this.inputValue = '' + number;
      }
    else this.inputValue += number;
    this.currentValue = parseFloat(this.inputValue);
  }

  setOperand(operand: string){
    this.inputValue = null;
    switch(operand){
      case '%':
        this.currentValue = this.currentValue / 100;
        break;
      case '+/-':
        this.currentValue = this.currentValue * -1;
        break;
      case 'C':
        this.currentValue = null;
        this.previousValue = null;
        this.operation = null;
        this.inputValue = null;
        break;
      case '=':
        this.calculate();
        this.operation = null;
        break;
      default:
        this.previousValue = this.currentValue;
        this.operation = operand;
    }
  }

  calculate(){
    console.log(this.previousValue, this.operation, this.currentValue)
    switch(this.operation){
      case '+':
        this.currentValue = (this.previousValue + this.currentValue);
        break;
      case '-':
        this.currentValue = (this.previousValue - this.currentValue);
        break;
      case '/':
        this.currentValue = (this.previousValue / this.currentValue);
        break;
      case 'x':
        this.currentValue = (this.previousValue * this.currentValue);
        break;
      default:
        return;
    }
  }
}
