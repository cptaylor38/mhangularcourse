import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DayPriorityListComponent } from './day-priority-list.component';

describe('DayPriorityListComponent', () => {
  let component: DayPriorityListComponent;
  let fixture: ComponentFixture<DayPriorityListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DayPriorityListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DayPriorityListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
