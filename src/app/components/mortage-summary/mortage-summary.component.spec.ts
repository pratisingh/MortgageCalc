import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MortageSummaryComponent } from './mortage-summary.component';

describe('MortageSummaryComponent', () => {
  let component: MortageSummaryComponent;
  let fixture: ComponentFixture<MortageSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MortageSummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MortageSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
