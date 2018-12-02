import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageAwarenessComponent } from './manage-awareness.component';

describe('ManageAwarenessComponent', () => {
  let component: ManageAwarenessComponent;
  let fixture: ComponentFixture<ManageAwarenessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageAwarenessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageAwarenessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
