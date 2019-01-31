import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificationprofilComponent } from './modificationprofil.component';
import { FormsModule } from '@angular/forms';

describe('ModificationprofilComponent', () => {
  let component: ModificationprofilComponent;
  let fixture: ComponentFixture<ModificationprofilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModificationprofilComponent ],
      imports: [ FormsModule ]
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
