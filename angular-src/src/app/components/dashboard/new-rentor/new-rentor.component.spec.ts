import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewRentorComponent } from './new-rentor.component';

describe('NewRentorComponent', () => {
  let component: NewRentorComponent;
  let fixture: ComponentFixture<NewRentorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewRentorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewRentorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
