import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheeckOutComponent } from './cheeck-out.component';

describe('CheeckOutComponent', () => {
  let component: CheeckOutComponent;
  let fixture: ComponentFixture<CheeckOutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheeckOutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheeckOutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
