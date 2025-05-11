describe('Detalle de obras de teatro', () => {
  beforeEach(() => {
    cy.visit('/obras'); 
  });

  it('debe mostrar los detalles al hacer clic en una obra', () => {
    cy.get('[data-cy="obra-card"]').first().click();

    cy.get('p.h3', { timeout: 10000 }).should('exist').and('not.be.empty');

    cy.contains('dt', 'Género', { timeout: 10000 }).next().should('not.be.empty');
    cy.contains('dt', 'Duración').next().should('not.be.empty');
    cy.contains('dt', 'Sinopsis').next().should('not.be.empty');
    cy.contains('dt', 'Elenco').next().should('not.be.empty');
  });

  it('debe mostrar reseñas si existen', () => {
    cy.get('[data-cy="obra-card"]').first().click();

    cy.get('.list-group-item', { timeout: 10000 }).should('have.length.at.least', 1);

    cy.get('.list-group-item').first().within(() => {
      cy.contains('Calificación:').should('exist');
      cy.get('p em').should('exist');
    });
  });

});
