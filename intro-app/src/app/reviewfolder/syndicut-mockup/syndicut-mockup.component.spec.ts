import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SyndicutMockupComponent } from './syndicut-mockup.component';

describe('SyndicutMockupComponent', () => {
  let component: SyndicutMockupComponent;
  let fixture: ComponentFixture<SyndicutMockupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SyndicutMockupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SyndicutMockupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
