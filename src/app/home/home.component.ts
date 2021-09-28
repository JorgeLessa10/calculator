import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  history = ' ';
  number1: number | undefined;
  number2: number | undefined;
  operator: string  = ''; 
  operator2: string = '';
  result = '0';

  click(key: string): void {    
    if (key ===  '0' || key ===  '1' || key ===  '2' || key ===  '3' || key ===  '4' || 
        key ===  '5' || key ===  '6' || key ===  '7' || key ===  '8' || key ===  '9' )
        {          
          this.history += key;
          if (this.operator) 
          {
            if (this.number2) 
            {
              const separador = ' ' + this.operator + ' ';
              const numeros = this.history.split(separador);
              this.number2 = +numeros[1];
            } 
            else 
            {
              if (+key) 
              {
                this.number2 = +key;
              }
            }
          } else {            
            this.number1 = +this.history;
          }
        } 
        else if(this.number1 && (key ===  '+' || key ===  '-' || key ===  '*' || key ===  '/')){
          if (this.number1 && this.number2) {
            this.operator2 = this.operator;
            this.calcule();
            this.number1 = +this.result;
            this.number2 = undefined;
          }

          this.operator = key;      
          this.history += ' ' + key + ' ';
        }        
        else 
        {          
          if(this.number1 && key === '=')
          {
            this.history += ' ' + key;            
            if(this.number1 && this.operator && this.number2)
            {              
              this.calcule();              
              if (this.result === 'ERROR')
              {
                this.history = ' ';
              } else 
              {
                this.history += ' ' + this.result;
              }
            }
          }
        }
  }


  clear(): void {
    this.history = '';
    this.number1 = undefined;
    this.number2 = undefined;
    this.operator = '';
    this.result = '0';
  }

  calcule(): void 
  {
    let calcResult: number;
    if (this.number1 && this.number2)
    {
      switch (this.operator) 
      {
        case '+':
          calcResult = this.number1 + this.number2;
          this.result = calcResult.toString();
          break;
        case '-':
          calcResult = this.number1 - this.number2;
          this.result = calcResult.toString();
          break;
        case '*':
          calcResult = this.number1 * this.number2;
          this.result = calcResult.toString();
          break;
        case '/':
          calcResult = this.number1 / this.number2;
          this.result = calcResult.toString();
          break;
        default:
      }
    }
  }

  constructor() { }
  


  ngOnInit(): void {
  }

}
