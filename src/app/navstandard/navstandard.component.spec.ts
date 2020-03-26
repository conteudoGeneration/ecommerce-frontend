import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavstandardComponent } from './navstandard.component';

describe('NavstandardComponent', () => {
  let component: NavstandardComponent;
  let fixture: ComponentFixture<NavstandardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavstandardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavstandardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
