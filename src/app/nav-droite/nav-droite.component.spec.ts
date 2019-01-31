import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavDroiteComponent } from './nav-droite.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('NavDroiteComponent', () => {
  let component: NavDroiteComponent;
  let fixture: ComponentFixture<NavDroiteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavDroiteComponent ],
      imports: [ RouterTestingModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavDroiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
