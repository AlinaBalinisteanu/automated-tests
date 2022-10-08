describe('Remove products from cart', () => {
    it('Go to the Automation exercise Home page', () => {
      cy.visit('https://www.automationexercise.com/')
      cy.get('.single-widget').find('h2').scrollIntoView().should('be.visible')
      cy.get('.add-to-cart[data-product-id="1"]').last().click({ force: true})
      cy.get('.close-modal').click()
      cy.get('.add-to-cart[data-product-id="5"]').last().click({ force: true})
      cy.get('.close-modal').click()
      cy.get('.add-to-cart[data-product-id="6"]').last().click({ force: true})
      cy.get('[href="/view_cart"]').last().should('be.visible').click()
      cy.get('[id="cart_items"]').should('be.visible')
      cy.get('#product-5 > .cart_delete').click()
      cy.get('#product-5').should('not.exist')
    });
})