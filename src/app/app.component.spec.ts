import { TestBed, async,ComponentFixture } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { By } from "@angular/platform-browser";
import { Component, DebugElement } from "@angular/core";

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let loanAmountEl: DebugElement;
  let interestEl: DebugElement;
  let ammotEl: DebugElement;
  let frequencyEl: DebugElement;
  let termEl: DebugElement;
  let submitEl: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();
    
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'Mortgage Calculator'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Mortgage Calculator');
  }));
  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Mortgage Calculator');
  }));

  it(' Mortgage Summary Calculated Successfully', () => {
    fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    
    app.paymentPlan.interestRate  = 5;
    app.paymentPlan.loanAmount  = 100000
    app.paymentPlan.amortizationPeriod  = 10
    app.paymentPlan.loanTermInYears  = 5
    app.paymentPlan.paymentfrequency  = 12
    fixture.detectChanges();
   
    submitEl = fixture.debugElement.query(By.css('button[id=calculation]'));
  
    // This sync emits the event and the subscribe callback gets executed above
    submitEl.triggerEventHandler('click', null);

    // Now we can check to make sure the emitted value is correct
    expect(app.monthlyPayment).toBe("1058.15");
    expect(app.monthlyPayment).toEqual("1058.15");
    expect(app.noOfTermPayment).toBe(60);
});
});