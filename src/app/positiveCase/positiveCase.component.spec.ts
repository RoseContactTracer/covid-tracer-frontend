import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PositiveCaseComponent } from './positiveCase.component';

describe('PositiveCaseComponent', () => {
  let component: PositiveCaseComponent;
  let fixture: ComponentFixture<PositiveCaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PositiveCaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PositiveCaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
