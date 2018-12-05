import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificationprofilComponent } from './modificationprofil.component';

describe('ModificationprofilComponent', () => {
  let component: ModificationprofilComponent;
  let fixture: ComponentFixture<ModificationprofilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModificationprofilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificationprofilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
