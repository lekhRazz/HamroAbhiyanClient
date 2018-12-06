import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LostdetailsComponent } from './lostdetails.component';

describe('LostdetailsComponent', () => {
  let component: LostdetailsComponent;
  let fixture: ComponentFixture<LostdetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LostdetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LostdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
