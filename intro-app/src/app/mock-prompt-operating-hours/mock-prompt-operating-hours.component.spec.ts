import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MockPromptOperatingHoursComponent } from './mock-prompt-operating-hours.component';

describe('MockPromptOperatingHoursComponent', () => {
  let component: MockPromptOperatingHoursComponent;
  let fixture: ComponentFixture<MockPromptOperatingHoursComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MockPromptOperatingHoursComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MockPromptOperatingHoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
