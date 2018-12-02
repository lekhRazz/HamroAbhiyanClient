import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageAboutUsComponent } from './manage-about-us.component';

describe('ManageAboutUsComponent', () => {
  let component: ManageAboutUsComponent;
  let fixture: ComponentFixture<ManageAboutUsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageAboutUsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageAboutUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
