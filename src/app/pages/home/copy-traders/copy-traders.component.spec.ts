import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CopyTradersComponent } from './copy-traders.component';

describe('CopyTradersComponent', () => {
  let component: CopyTradersComponent;
  let fixture: ComponentFixture<CopyTradersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CopyTradersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CopyTradersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
