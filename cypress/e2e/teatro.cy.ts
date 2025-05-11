describe('Pruebas de Lista de Teatros', () => {
    beforeEach(() => {
      cy.visit('/teatros');
    });
  
    let teatrosFromBackend: string | any[] = [];
  
    it('Debería obtener la lista de teatros desde el backend', () => {
      cy.request('GET', 'http://localhost:8080/api/teatros')
        .then((response) => {
          expect(response.status).to.eq(200);
          teatrosFromBackend = response.body;
          cy.log(`Se obtuvieron ${teatrosFromBackend.length} teatros del backend`);
        });
    });
  
    it('Debería mostrar la lista de teatros en la página', () => {
      cy.get('.teatro-body').should('exist');
      cy.log('La lista de teatros cargó correctamente');
    });
  
    it('Debería mostrar la cantidad correcta de teatros', () => {
      cy.get('.teatro-body')
        .should('have.length', teatrosFromBackend.length)
        .then(() => {
          cy.log(`Se muestran ${teatrosFromBackend.length} teatros en la vista`);
        });
    });
  
    it('Cada teatro debería mostrar el nombre correctamente', () => {
      cy.get('.teatro-card').each(($card, index) => {
        cy.wrap($card)
          .should('contain.text', teatrosFromBackend[index].nombre)
          .then(() => {
            cy.log(`Nombre correcto: ${teatrosFromBackend[index].nombre}`);
          });
      });
    });
  
    it('Cada teatro debería mostrar la dirección correctamente', () => {
      cy.get('.teatro-body').each(($body, index) => {
        const direccion = teatrosFromBackend[index].direccion;
        cy.wrap($body)
          .should('contain.text', direccion)
          .then(() => {
            cy.log(`Dirección correcta para el teatro ${teatrosFromBackend[index].nombre}`);
          });
      });
    });
  });
  