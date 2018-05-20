import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditmanagercmtComponent } from './editmanagercmt.component';

describe('EditmanagercmtComponent', () => {
  let component: EditmanagercmtComponent;
  let fixture: ComponentFixture<EditmanagercmtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditmanagercmtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditmanagercmtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
