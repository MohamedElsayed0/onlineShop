import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditeUserInfoComponent } from './edite-user-info.component';

describe('EditeUserInfoComponent', () => {
  let component: EditeUserInfoComponent;
  let fixture: ComponentFixture<EditeUserInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditeUserInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditeUserInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
