import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgcontenttestComponent } from './ngcontenttest.component';

describe('NgcontenttestComponent', () => {
  let component: NgcontenttestComponent;
  let fixture: ComponentFixture<NgcontenttestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgcontenttestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgcontenttestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
