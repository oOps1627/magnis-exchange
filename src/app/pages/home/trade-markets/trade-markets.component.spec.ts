import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TradeMarketsComponent } from './trade-markets.component';

describe('TradeMarketsComponent', () => {
  let component: TradeMarketsComponent;
  let fixture: ComponentFixture<TradeMarketsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TradeMarketsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TradeMarketsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
