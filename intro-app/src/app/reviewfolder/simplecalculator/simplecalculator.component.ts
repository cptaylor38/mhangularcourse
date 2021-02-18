import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-simplecalculator',
  templateUrl: './simplecalculator.component.html',
  styleUrls: ['./simplecalculator.component.css']
})
export class SimplecalculatorComponent implements OnInit {
  operands: string[] = ['C', '+/-', '%', '/', 'x', '-', '+', '='];
  nums: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  value: string = '0';
  previousValue: number = 0;
  chosenOperand: string = null;
  chosenNum: number = null;
  constructor() { }

  ngOnInit(): void {
  }

  setNum(number: number){
    if(this.chosenNum){
      this.value = this.value + number;
      this.chosenNum = parseFloat(this.value);
    }
    else {
      this.chosenNum = number;
      this.value = '' + this.chosenNum;
    }
  }

  setOperand(operand: string){
    this.previousValue = this.chosenNum;
    this.chosenNum = null;
    switch(operand){
      case 'C':
        this.value = '0';
        this.chosenNum = null;
        this.chosenOperand = null;
        break;
      case '+/-':
        if(this.value !== '0'){
          this.value = this.parser(parseFloat(this.value) * -1);
        }
        break;
      case '%':
        if(this.value !== '0'){
          this.value = this.parser(parseFloat(this.value) / 100);
        }
        break;
      case '=':
        if(this.previousValue && parseFloat(this.value) && this.chosenOperand) this.calculate();
        break;
      default:
        this.chosenOperand = operand;
        if(this.chosenNum) this.calculate();
        break;
    }
  }

  parser(num){
    return num.toString();
  }

  calculate(){
    switch(this.chosenOperand){
      case '+':
        this.value = this.parser(this.previousValue + this.chosenNum);
        break;
      case '-':
        this.value = this.parser(this.previousValue - this.chosenNum);
        break;
      case '/':
        this.value = this.parser(this.previousValue / this.chosenNum);
        break;
      case 'x':
        this.value = this.parser(this.previousValue * this.chosenNum);
        break;
      default:
        return;
    }
  }

}
