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
  previousValue: number = 0;
  chosenOperand: string = null;
  chosenNum: number = null;
  constructor() { }

  ngOnInit(): void {
  }

  setNum(number: number){
    let newValue: string = this.value.toString() + number;
    //mapping out logic here since not using input field and forms module.
    
  }

  setOperand(operand: string){
    this.chosenNum = null;
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
      case '=':
        this.calculate();
        break;
      default:
        this.chosenOperand = operand;
        break;
    }
  }

  calculate(){
    if(this.chosenNum && this.previousValue && this.chosenOperand){
      switch(this.chosenOperand){
        case '+':
          this.value = this.previousValue + this.chosenNum;
          break;
        case '-':
          this.value = this.previousValue - this.chosenNum;
          break;
        case '/':
          this.value = this.previousValue / this.chosenNum;
          break;
        case 'x':
          this.value = this.previousValue * this.chosenNum;
          break;
        default:
          return;
      }
    }
  }

}
