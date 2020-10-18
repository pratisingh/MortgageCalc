import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-mortage-summary',
  templateUrl: './mortage-summary.component.html',
  styleUrls: ['./mortage-summary.component.css']
})
export class MortageSummaryComponent implements OnInit {
  @Input() totalCostTerm: any;
  @Input() totalAmmortCost: any;
  @Input() noOfTermPayment;
  @Input() noOfAmmortPayment;
  @Input() monthlyPayment;
  @Input() termTotal;
  @Input() AmortTotal;

  constructor() { }

  ngOnInit(): void {
    
  }

}
