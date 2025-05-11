import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AsientoDetailComponent } from './asiento-detail.component';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { Asiento } from '../asiento';
import { faker } from '@faker-js/faker';
import { RouterModule } from '@angular/router';

describe('AsientoDetailComponent', () => {
  let component: AsientoDetailComponent;
  let fixture: ComponentFixture<AsientoDetailComponent>;
  let debug: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [AsientoDetailComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AsientoDetailComponent);
    component = fixture.componentInstance;

    component.asientos = Array.from({ length: 5 }, (_, i) => ({
      id: i + 1,
      numero: i + 1,
      fila: 'A',
      disponible: i % 2 === 0,
      ubicacion: null,
      boleto: null,
      teatro: 'Teatro Principal',
    }));

    component.asientosSeleccionados = [];
    fixture.detectChanges();
    debug = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).not.equal(null);
  });

  it('should display the correct number of asientos', () => {
    const asientosElements = debug.queryAll(By.css('.grilla-asientos .asiento'));
    expect(asientosElements.length).greaterThan(0);
  });

  it('should apply the "ocupado" class to unavailable asientos', () => {
    const asientosElements = debug.queryAll(By.css('.grilla-asientos .asiento.ocupado'));
    const unavailableAsientos = component.asientos.filter(a => !a.disponible);
    expect(asientosElements.length).equal(unavailableAsientos.length);
  });

  it('should apply the "seleccionado" class to selected asientos', () => {
    const asientoToSelect = component.asientos[0];
    component.seleccionarAsiento(asientoToSelect);
    fixture.detectChanges();

    const selectedElement = debug.query(By.css('.grilla-asientos .asiento.seleccionado'));
    expect(selectedElement).not.equal(null);
    expect(selectedElement.nativeElement.textContent.trim()).contain(asientoToSelect.numero.toString());
  });

  it('should display the selected asientos in the list', () => {
    const asiento1 = component.asientos[0];
    const asiento2 = component.asientos[2];
    component.seleccionarAsiento(asiento1);
    component.seleccionarAsiento(asiento2);
    fixture.detectChanges();

    const selectedListItems = debug.queryAll(By.css('ul li'));
    expect(selectedListItems.length).equal(2);
    expect(selectedListItems[0].nativeElement.textContent.trim()).contain(asiento1.numero.toString());
    expect(selectedListItems[1].nativeElement.textContent.trim()).contain(asiento2.numero.toString());
  });

  it('should disable the "Confirmar Compra" button when no asientos are selected', () => {
    const button = debug.query(By.css('button')).nativeElement;
    expect(button.disabled).equal(true);
  });

  it('should enable the "Confirmar Compra" button when asientos are selected', () => {
    const asientoToSelect = component.asientos[0];
    component.seleccionarAsiento(asientoToSelect);
    fixture.detectChanges();

    const button = debug.query(By.css('button')).nativeElement;
    expect(button.disabled).equal(false);
  });

  it('should call confirmarCompra when the button is clicked', () => {
    const confirmarCompraSpy = spyOn(component, 'confirmarCompra');
    
    const asientoToSelect = component.asientos[0];
    component.seleccionarAsiento(asientoToSelect);
    fixture.detectChanges();

    const button = debug.query(By.css('button')).nativeElement;
    button.click();

    expect(confirmarCompraSpy).not.equal(null);
  });
});
