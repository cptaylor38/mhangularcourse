import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectivesrecapComponent } from './directivesrecap.component';

describe('DirectivesrecapComponent', () => {
  let component: DirectivesrecapComponent;
  let fixture: ComponentFixture<DirectivesrecapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DirectivesrecapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectivesrecapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
