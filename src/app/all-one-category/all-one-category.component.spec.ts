import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllOneCategoryComponent } from './all-one-category.component';

describe('AllOneCategoryComponent', () => {
  let component: AllOneCategoryComponent;
  let fixture: ComponentFixture<AllOneCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllOneCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllOneCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
