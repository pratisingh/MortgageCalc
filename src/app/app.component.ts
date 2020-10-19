import { Component } from "@angular/core";
import { formatCurrency } from "@angular/common";
import { MortgageService } from "./services/mortgage.service";
import {
  SingleDataSet,
  Label,
  monkeyPatchChartJsLegend,
  monkeyPatchChartJsTooltip
} from "ng2-charts";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "Mortgage Calculator";

  // Pie Chart
  public pieChartOptions: any = {
    responsive: true
  };
  public pieChartLabels: Label[] = [
    ["Total Term Cost"],
    ["Total Amortization Cost"]
  ];
  public pieChartData: SingleDataSet = [0, 0];
  public pieChartType: string = "pie";
  public pieChartLegend = true;
  public pieChartPlugins = [];

  monthlyPayment: any;
  noOfAmmortPayment: any;
  noOfTermPayment: any;
  noOfPayment: any;
  totalCostTerm: any;
  totalAmmortCost: any;
  termList = this.mortgageService.terms;
  frequencyList = this.mortgageService.paymentFrequency;
  paymentPlan = {
    loanAmount: 100000,
    interestRate: 5,
    amortizationPeriod: 10,
    loanTermInYears: 5,
    paymentfrequency: 12
  };
  termTotal;
  AmortTotal;

  public reset() {
    this.paymentPlan.loanAmount = 0;
    this.paymentPlan.interestRate = 0;
    this.paymentPlan.loanTermInYears = 0;
    this.paymentPlan.paymentfrequency = 0;
    this.paymentPlan.amortizationPeriod = 0;
    this.totalCostTerm = "";
    this.totalAmmortCost = "";
    this.termTotal = "";
    this.AmortTotal = "";
    this.monthlyPayment = "";
    this.noOfAmmortPayment = "";
    this.noOfTermPayment = "";
  }
  constructor(private mortgageService: MortgageService) {}

  // Update the graph and Summary Chart
  updateChart(replace: boolean) {
    this.monthlyPayment = this.calculateMortgage().toFixed(2);
    this.noOfPayment = this.paymentPlan.loanTermInYears * 12;
    this.termTotal =
      this.totalCostTerm.totalprinciple + this.totalCostTerm.totalInterest;
    this.AmortTotal =
      this.totalAmmortCost.totalprinciple + this.totalAmmortCost.totalInterest;
    this.pieChartData[0] = this.termTotal.toFixed(2);
    this.pieChartData[1] = this.AmortTotal.toFixed(2);
  }

  // calculate Monthly mortgage amount
  calculateMortgage() {
    var interest_rate =
      Math.pow(
        1 + this.paymentPlan.interestRate / (100 * 2),
        2 / this.paymentPlan.paymentfrequency
      ) - 1;
    this.noOfAmmortPayment =
      this.paymentPlan.paymentfrequency * this.paymentPlan.amortizationPeriod;

    this.noOfTermPayment =
      this.paymentPlan.paymentfrequency * this.paymentPlan.loanTermInYears;
    let pmt = this.MortgagePMT(
      interest_rate,
      this.noOfAmmortPayment,
      this.paymentPlan.loanAmount
    );

    this.totalCostTerm = this.calculateInterestPaid(
      interest_rate,
      pmt,
      this.noOfTermPayment
    );
    this.totalAmmortCost = this.calculateInterestPaid(
      interest_rate,
      pmt,
      this.noOfAmmortPayment
    );
    return pmt;
  }

  //formula to calculate mortgage payment
  MortgagePMT(rate_per_period, total_payments, principal) {
    if (rate_per_period != 0.0) {
      var q = Math.pow(1 + rate_per_period, total_payments);
      return (principal * rate_per_period * q) / (q - 1);
    }

    return 0;
  }

  // calculations for interest, principal amount paid in term and ammort
  calculateInterestPaid(interestRate, payMonthly, paymentTerm) {
    let principal;
    let interest;
    let totalCost = {
      totalprinciple: 0,
      totalInterest: 0
    };
    for (let i = 1; i <= paymentTerm; i++) {
      if (principal) {
        interest =
          (this.paymentPlan.loanAmount - totalCost.totalprinciple) *
          interestRate;
      } else {
        interest = this.paymentPlan.loanAmount * interestRate;
      }
      principal = payMonthly - interest;

      totalCost.totalInterest += interest;
      totalCost.totalprinciple += principal;
    }
    return totalCost;
  }
}
