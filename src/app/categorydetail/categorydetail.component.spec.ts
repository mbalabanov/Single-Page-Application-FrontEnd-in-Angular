import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategorydetailComponent } from './categorydetail.component';

describe('CategorydetailComponent', () => {
  let component: CategorydetailComponent;
  let fixture: ComponentFixture<CategorydetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategorydetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategorydetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
