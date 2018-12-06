import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageLostDetailsComponent } from './manage-lost-details.component';

describe('ManageLostDetailsComponent', () => {
  let component: ManageLostDetailsComponent;
  let fixture: ComponentFixture<ManageLostDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageLostDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageLostDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
