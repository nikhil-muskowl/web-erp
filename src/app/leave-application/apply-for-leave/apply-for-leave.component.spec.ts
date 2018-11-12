import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplyForLeaveComponent } from './apply-for-leave.component';

describe('ApplyForLeaveComponent', () => {
  let component: ApplyForLeaveComponent;
  let fixture: ComponentFixture<ApplyForLeaveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApplyForLeaveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplyForLeaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
