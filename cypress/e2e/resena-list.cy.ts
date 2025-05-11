describe('ResenaList E2E', () =>{
    beforeEach(() => {
        cy.visit('/resenas');
    });

    it('debe mostrar la lista de reseñas', () => {
        cy.get('.card.mb-3').should('have.length.greaterThan', 0);
        });
    })

    it('cada reseña debe mostrar comentario y calificación', () => {
        cy.visit('/resenas');
        cy.get('.card.mb-3').each(($card) => {
            cy.wrap($card).find('.card-title').should('contain.text', 'Calificación');
            cy.wrap($card).find('.card-text').should('contain.text', 'Comentario');
    });
});