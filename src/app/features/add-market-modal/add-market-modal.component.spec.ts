import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMarketModalComponent } from './add-market-modal.component';

describe('AddMarketModalComponent', () => {
  let component: AddMarketModalComponent;
  let fixture: ComponentFixture<AddMarketModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddMarketModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddMarketModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
