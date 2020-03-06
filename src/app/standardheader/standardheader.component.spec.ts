import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StandardheaderComponent } from './standardheader.component';

describe('StandardheaderComponent', () => {
  let component: StandardheaderComponent;
  let fixture: ComponentFixture<StandardheaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StandardheaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StandardheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
