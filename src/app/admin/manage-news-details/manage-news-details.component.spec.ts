import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageNewsDetailsComponent } from './manage-news-details.component';

describe('ManageNewsDetailsComponent', () => {
  let component: ManageNewsDetailsComponent;
  let fixture: ComponentFixture<ManageNewsDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageNewsDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageNewsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
