describe('Prueba de Lista de Asientos', () => {
  beforeEach(() => {
    cy.visit('/'); 
  });

  let asientosFromBackend: any[] = [];

  it('get back', () => {
    cy.request('GET', 'http://localhost:8080/api/asientos') 
      .then((response) => {
        expect(response.status).to.eq(200);
        asientosFromBackend = response.body;
        cy.log(`Se obtuvieron ${asientosFromBackend.length} asientos del backend`);
      });
  });

  it('should display the asiento list', () => {
    cy.get('ul.list-group').should('exist');
    cy.log('La lista de asientos cargó correctamente');
  });

  it('should display the correct number of asientos', () => {
    cy.get('a.list-group-item', { timeout: 10000 })
      .should('have.length', asientosFromBackend.length)
      .then(() => {
        cy.log(`Se muestran ${asientosFromBackend.length} asientos en la vista`);
      });
  });

  it('should have the correct number of <h5> elements with asiento.id', () => {
    cy.get('h5.mb-1').each(($h5, index) => {
      cy.wrap($h5)
        .should('contain.text', `Asiento ID: ${asientosFromBackend[index].id}`)
        .then(() => {
          cy.log(`Asiento ID correcto: ${asientosFromBackend[index].id}`);
        });
    });
  });

  it('should display the correct availability for each asiento', () => {
    cy.get('small.text-body-secondary').each(($small, index) => {
      const disponible = asientosFromBackend[index].disponible ? 'Disponible' : 'Ocupado';
      cy.wrap($small)
        .should('contain.text', `Estado: ${disponible}`)
        .then(() => {
          cy.log(`Estado correcto para el asiento ${asientosFromBackend[index].id}`);
        });
    });
  });

  it('should display correct details for each asiento (número y fila)', () => {
    cy.get('p.mb-1').each(($p, index) => {
      const asiento = asientosFromBackend[index];
      const detalles = `Número: ${asiento.numero} - Fila: ${asiento.fila}`;
      cy.wrap($p)
        .should('contain.text', detalles)
        .then(() => {
          cy.log(`Detalles correctos para el asiento ${asiento.id}`);
        });
    });
  });
});