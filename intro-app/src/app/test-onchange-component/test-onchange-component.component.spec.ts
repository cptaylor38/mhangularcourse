import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestOnchangeComponentComponent } from './test-onchange-component.component';

describe('TestOnchangeComponentComponent', () => {
  let component: TestOnchangeComponentComponent;
  let fixture: ComponentFixture<TestOnchangeComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestOnchangeComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestOnchangeComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
