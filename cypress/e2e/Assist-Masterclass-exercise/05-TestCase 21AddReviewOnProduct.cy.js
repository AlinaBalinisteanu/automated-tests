describe('Add review on product', () => {
    it('Go to the Automation exercise Home page', () => {
      cy.visit('https://www.automationexercise.com/')
      cy.get('.single-widget').find('h2').scrollIntoView().should('be.visible')
      cy.get('[href="/products"]').click()
      cy.get('.single-widget').find('h2').scrollIntoView().should('be.visible')
      cy.get('[href="/product_details/1"]').click()
      cy.get('[href="#reviews"]').should('be.visible')
      cy.get('input[id="name"]').type("Alina Balinisteanu")
      cy.get('input[id="email"]').type("just.alina@yahoo.com")
      cy.get('#review').type('Thank you for your review.')
      cy.get('#button-review').click()
      cy.get('.alert').contains("Thank you for your review.")												
  });
})
