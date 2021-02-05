import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MockFormsHomeComponent } from './mock-forms-home.component';

describe('MockFormsHomeComponent', () => {
  let component: MockFormsHomeComponent;
  let fixture: ComponentFixture<MockFormsHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MockFormsHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MockFormsHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
