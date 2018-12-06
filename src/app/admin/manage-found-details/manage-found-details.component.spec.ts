import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageFoundDetailsComponent } from './manage-found-details.component';

describe('ManageFoundDetailsComponent', () => {
  let component: ManageFoundDetailsComponent;
  let fixture: ComponentFixture<ManageFoundDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageFoundDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageFoundDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
