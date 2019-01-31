import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommandmanagementComponent } from './commandmanagement.component';

describe('CommandmanagementComponent', () => {
  let component: CommandmanagementComponent;
  let fixture: ComponentFixture<CommandmanagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommandmanagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommandmanagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
