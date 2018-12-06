import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FounddetailsComponent } from './founddetails.component';

describe('FounddetailsComponent', () => {
  let component: FounddetailsComponent;
  let fixture: ComponentFixture<FounddetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FounddetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FounddetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
