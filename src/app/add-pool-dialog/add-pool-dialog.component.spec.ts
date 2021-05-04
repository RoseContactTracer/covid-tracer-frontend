import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPoolDialogComponent } from './add-pool-dialog.component';

describe('AddPoolDialogComponent', () => {
  let component: AddPoolDialogComponent;
  let fixture: ComponentFixture<AddPoolDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddPoolDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPoolDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
