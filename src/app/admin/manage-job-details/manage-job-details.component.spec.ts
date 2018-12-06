import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageJobDetailsComponent } from './manage-job-details.component';

describe('ManageJobDetailsComponent', () => {
  let component: ManageJobDetailsComponent;
  let fixture: ComponentFixture<ManageJobDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageJobDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageJobDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
