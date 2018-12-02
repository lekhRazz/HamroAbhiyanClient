import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageLostComponent } from './manage-lost.component';

describe('ManageLostComponent', () => {
  let component: ManageLostComponent;
  let fixture: ComponentFixture<ManageLostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageLostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageLostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
