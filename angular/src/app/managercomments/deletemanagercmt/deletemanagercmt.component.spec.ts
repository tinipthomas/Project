import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletemanagercmtComponent } from './deletemanagercmt.component';

describe('DeletemanagercmtComponent', () => {
  let component: DeletemanagercmtComponent;
  let fixture: ComponentFixture<DeletemanagercmtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeletemanagercmtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeletemanagercmtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
