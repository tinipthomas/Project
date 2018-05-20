import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowallEmployComponent } from './showall-employ.component';

describe('ShowallEmployComponent', () => {
  let component: ShowallEmployComponent;
  let fixture: ComponentFixture<ShowallEmployComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowallEmployComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowallEmployComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
