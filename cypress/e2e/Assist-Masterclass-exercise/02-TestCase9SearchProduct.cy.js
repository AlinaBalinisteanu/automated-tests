describe('Search product', () => {
    it('Go to the Automation exercise Home page', () => {
      cy.visit('https://www.automationexercise.com/')
      cy.get('.single-widget').find('h2').scrollIntoView().should('be.visible')
      cy.get('[href="/products"]').click()
      cy.wait(1000)
      cy.get('.single-widget').find('h2').scrollIntoView().should('be.visible')
      cy.get('#search_product').type("Blue").should('be.visible')
      cy.get('#submit_search').click().should('be.visible')
      cy.get('.features_items').contains('Searched Products')
      cy.get('.col-sm-4').should('be.visible')
  });
})
