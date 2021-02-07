import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewInitAndOnDestroyTestComponent } from './view-init-and-on-destroy-test.component';

describe('ViewInitAndOnDestroyTestComponent', () => {
  let component: ViewInitAndOnDestroyTestComponent;
  let fixture: ComponentFixture<ViewInitAndOnDestroyTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewInitAndOnDestroyTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewInitAndOnDestroyTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
