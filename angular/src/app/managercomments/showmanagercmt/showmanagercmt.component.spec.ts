import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowmanagercmtComponent } from './showmanagercmt.component';

describe('ShowmanagercmtComponent', () => {
  let component: ShowmanagercmtComponent;
  let fixture: ComponentFixture<ShowmanagercmtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowmanagercmtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowmanagercmtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
