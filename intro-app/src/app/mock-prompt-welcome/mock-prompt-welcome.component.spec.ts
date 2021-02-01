import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MockPromptWelcomeComponent } from './mock-prompt-welcome.component';

describe('MockPromptWelcomeComponent', () => {
  let component: MockPromptWelcomeComponent;
  let fixture: ComponentFixture<MockPromptWelcomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MockPromptWelcomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MockPromptWelcomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
