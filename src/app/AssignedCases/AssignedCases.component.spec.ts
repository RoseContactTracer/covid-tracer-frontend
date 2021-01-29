import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignedCasesComponent } from './AssignedCases.component';

describe('AssignedCasesComponent', () => {
  let component: AssignedCasesComponent;
  let fixture: ComponentFixture<AssignedCasesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AssignedCasesComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignedCasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
