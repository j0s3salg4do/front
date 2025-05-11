describe('Prueba de la lista de boletos', () => {
  beforeEach(() => {
    cy.visit('/boletos');
  });

  it('debe mostrar una lista de boletos', () => {
    cy.get('.list-group-item').should('have.length.greaterThan', 0);
  });

  it('cada boleto debe mostrar los detalles correctamente', () => {
    cy.get('.list-group-item').first().within(() => {
      cy.get('h5').should('contain', 'Boleto ID');
      cy.get('.text-body-secondary').should('contain', 'Precio');
      cy.get('p.mb-1').should('contain', 'Cliente');
      cy.get('.text-body-secondary').should('contain', 'Función');
      cy.get('.text-body-secondary').should('contain', 'Teatro');
      cy.get('.text-body-secondary').should('contain', 'Fecha');
    });
  });

  it('debe mostrar los detalles del primer boleto correctamente', () => {
  cy.get('.list-group-item').first().as('primerBoleto');

  cy.get('@primerBoleto').find('.text-body-secondary').should('exist'); 

  cy.get('@primerBoleto').find('.text-body-secondary').contains('Precio:').should('exist');
  });

});
