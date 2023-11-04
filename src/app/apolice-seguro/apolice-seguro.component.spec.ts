import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApoliceSeguroComponent } from './apolice-seguro.component';

describe('ApoliceSeguroComponent', () => {
  let component: ApoliceSeguroComponent;
  let fixture: ComponentFixture<ApoliceSeguroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ApoliceSeguroComponent]
    });
    fixture = TestBed.createComponent(ApoliceSeguroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
