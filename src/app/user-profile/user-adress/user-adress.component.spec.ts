import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserAdressComponent } from './user-adress.component';

describe('UserAdressComponent', () => {
  let component: UserAdressComponent;
  let fixture: ComponentFixture<UserAdressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserAdressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserAdressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
