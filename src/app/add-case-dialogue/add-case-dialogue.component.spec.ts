import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCaseDialogueComponent } from './add-case-dialogue.component';

describe('AddCaseDialogueComponent', () => {
  let component: AddCaseDialogueComponent;
  let fixture: ComponentFixture<AddCaseDialogueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddCaseDialogueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCaseDialogueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
