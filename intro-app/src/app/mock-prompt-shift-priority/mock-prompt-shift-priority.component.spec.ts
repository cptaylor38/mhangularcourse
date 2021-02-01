import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MockPromptShiftPriorityComponent } from './mock-prompt-shift-priority.component';

describe('MockPromptShiftPriorityComponent', () => {
  let component: MockPromptShiftPriorityComponent;
  let fixture: ComponentFixture<MockPromptShiftPriorityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MockPromptShiftPriorityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MockPromptShiftPriorityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
