import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestioncommandesComponent } from './gestioncommandes.component';

describe('GestioncommandesComponent', () => {
  let component: GestioncommandesComponent;
  let fixture: ComponentFixture<GestioncommandesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestioncommandesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestioncommandesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
