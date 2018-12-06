import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AwarenessdetailsComponent } from './awarenessdetails.component';

describe('AwarenessdetailsComponent', () => {
  let component: AwarenessdetailsComponent;
  let fixture: ComponentFixture<AwarenessdetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AwarenessdetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AwarenessdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
