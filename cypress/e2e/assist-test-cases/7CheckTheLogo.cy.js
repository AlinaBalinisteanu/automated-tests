describe('Visit ASSIST SOFTWARE SITE', () => {
    it('Go to the Assist Software Home page', () => {
      cy.visit('https://assist-devqa.netlify.app')
      cy.get('.logo').should('be.visible').should('have.css', 'background-color', 'rgba(0, 0, 0, 0)')
  });
})
