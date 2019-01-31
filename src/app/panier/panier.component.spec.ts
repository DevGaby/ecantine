import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PanierComponent } from './panier.component';
import { HttpClientModule } from '@angular/common/http';

describe('PanierComponent', () => {
  let component: PanierComponent;
  let fixture: ComponentFixture<PanierComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PanierComponent ],
      imports: [HttpClientModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PanierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
