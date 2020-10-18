import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MortgageService {
  terms = [
    {
      id: 1,
      value: "1 year"
    },
    {
      id: 2,
      value: "2 year"
    },
    {
      id: 3,
      value: "3 year"
    },
    {
      id: 4,
      value: "4 year"
    },
    {
      id: 5,
      value: "5 year"
    },
  ]
  paymentFrequency = [
    {
      name:"Annually(once per year)",
      value: 1
    },
    {
      name: "Semi Annualy(twice per year)",
      value: 2
    },
    {
      name: "Quarterly(4 times per year)",
      value: 4
      },
    {
      name: "Bi-Weekly (once every 2 weeks)",
      value: 26
    },
    {
      name: "Semi-monthly (2 times per month)",
      value: 24
    },
    {
      name:"Monthly (12 times per year)",
      value: 12
        }
  ]
    
  

  constructor() { }
}
