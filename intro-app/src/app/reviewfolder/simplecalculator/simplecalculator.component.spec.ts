import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimplecalculatorComponent } from './simplecalculator.component';

describe('SimplecalculatorComponent', () => {
  let component: SimplecalculatorComponent;
  let fixture: ComponentFixture<SimplecalculatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimplecalculatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimplecalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
