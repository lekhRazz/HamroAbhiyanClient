import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageAwarenessDetailsComponent } from './manage-awareness-details.component';

describe('ManageAwarenessDetailsComponent', () => {
  let component: ManageAwarenessDetailsComponent;
  let fixture: ComponentFixture<ManageAwarenessDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageAwarenessDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageAwarenessDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
