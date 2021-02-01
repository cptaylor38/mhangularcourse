import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MockPromptBudgetHoursComponent } from './mock-prompt-budget-hours.component';

describe('MockPromptBudgetHoursComponent', () => {
  let component: MockPromptBudgetHoursComponent;
  let fixture: ComponentFixture<MockPromptBudgetHoursComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MockPromptBudgetHoursComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MockPromptBudgetHoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
