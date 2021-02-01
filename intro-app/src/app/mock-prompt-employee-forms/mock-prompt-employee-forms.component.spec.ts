import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MockPromptEmployeeFormsComponent } from './mock-prompt-employee-forms.component';

describe('MockPromptEmployeeFormsComponent', () => {
  let component: MockPromptEmployeeFormsComponent;
  let fixture: ComponentFixture<MockPromptEmployeeFormsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MockPromptEmployeeFormsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MockPromptEmployeeFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
