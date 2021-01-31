import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MockPromptComponent } from './mock-prompt.component';

describe('MockPromptComponent', () => {
  let component: MockPromptComponent;
  let fixture: ComponentFixture<MockPromptComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MockPromptComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MockPromptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
