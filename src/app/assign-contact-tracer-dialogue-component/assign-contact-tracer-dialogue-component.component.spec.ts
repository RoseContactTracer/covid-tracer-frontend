import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignContactTracerDialogueComponentComponent } from './assign-contact-tracer-dialogue-component.component';

describe('AssignContactTracerDialogueComponentComponent', () => {
  let component: AssignContactTracerDialogueComponentComponent;
  let fixture: ComponentFixture<AssignContactTracerDialogueComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssignContactTracerDialogueComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignContactTracerDialogueComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
