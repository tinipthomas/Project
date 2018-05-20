import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatemanagercmtComponent } from './createmanagercmt.component';

describe('CreatemanagercmtComponent', () => {
  let component: CreatemanagercmtComponent;
  let fixture: ComponentFixture<CreatemanagercmtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatemanagercmtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatemanagercmtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
