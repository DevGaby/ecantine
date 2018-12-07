import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuHebdoAdminComponent } from './menu-hebdo-admin.component';

describe('MenuHebdoAdminComponent', () => {
  let component: MenuHebdoAdminComponent;
  let fixture: ComponentFixture<MenuHebdoAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuHebdoAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuHebdoAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
