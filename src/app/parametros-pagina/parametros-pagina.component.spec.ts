import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParametrosPaginaComponent } from './parametros-pagina.component';

describe('ParametrosPaginaComponent', () => {
  let component: ParametrosPaginaComponent;
  let fixture: ComponentFixture<ParametrosPaginaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParametrosPaginaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParametrosPaginaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
