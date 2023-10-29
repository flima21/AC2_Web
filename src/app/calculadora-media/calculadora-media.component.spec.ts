import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculadoraMediaComponent } from './calculadora-media.component';

describe('CalculadoraMediaComponent', () => {
  let component: CalculadoraMediaComponent;
  let fixture: ComponentFixture<CalculadoraMediaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CalculadoraMediaComponent]
    });
    fixture = TestBed.createComponent(CalculadoraMediaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
