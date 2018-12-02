import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageFoundComponent } from './manage-found.component';

describe('ManageFoundComponent', () => {
  let component: ManageFoundComponent;
  let fixture: ComponentFixture<ManageFoundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageFoundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
