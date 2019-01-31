import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagefundComponent } from './managefund.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

describe('ManagefundComponent', () => {
  let component: ManagefundComponent;
  let fixture: ComponentFixture<ManagefundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagefundComponent ],
      imports: [ 
        FormsModule,
        HttpClientModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagefundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
