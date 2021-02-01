import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MockPromptEmployeeCountComponent } from './mock-prompt-employee-count.component';

describe('MockPromptEmployeeCountComponent', () => {
  let component: MockPromptEmployeeCountComponent;
  let fixture: ComponentFixture<MockPromptEmployeeCountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MockPromptEmployeeCountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MockPromptEmployeeCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
