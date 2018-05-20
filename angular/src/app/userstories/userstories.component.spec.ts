import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserstoriesComponent } from './userstories.component';

describe('UserstoriesComponent', () => {
  let component: UserstoriesComponent;
  let fixture: ComponentFixture<UserstoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserstoriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserstoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
