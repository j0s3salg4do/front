import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ResenaListComponent } from './resena-list.component';
import { ResenaService } from '../resena.service';
import { of } from 'rxjs';
import { Resena } from '../resena';
import { HttpClientModule } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('ResenaListComponent', () => {
  let component: ResenaListComponent;
  let fixture: ComponentFixture<ResenaListComponent>;
  let resenaService: ResenaService;

  const mockResenas: Resena[] = [
    {
      id: 1,
      comentario: 'Excelente obra',
      calificacion: 5
    },
    {
      id: 2,
      comentario: 'Muy entretenida',
      calificacion: 4
    }
  ];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ResenaListComponent],
      imports: [HttpClientModule],
      providers: [ResenaService],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();

    fixture = TestBed.createComponent(ResenaListComponent);
    component = fixture.componentInstance;
    resenaService = TestBed.inject(ResenaService);

    spyOn(resenaService, 'getResenas').and.returnValue(of(mockResenas));
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should load and display resenas', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.textContent).toContain('Excelente obra');
    expect(compiled.textContent).toContain('Muy entretenida');
  });

  it('should have the correct number of resenas', () => {
    expect(component.resenas.length).toBe(2);
  });
});
