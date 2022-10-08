describe('Verify product quantity in cart', () => {
    it('Go to the Automation exercise Home page', () => {
      cy.visit('https://www.automationexercise.com/')
      cy.get('.single-widget').find('h2').scrollIntoView().should('be.visible')
      cy.get('[href="/product_details/3"]').click().should('be.visible')
      cy.get('.product-information').should('be.visible')
      cy.get('input[name="quantity"]').type('{selectall}{backspace}')
      cy.get('input[name="quantity"]').type('4')
      cy.wait(2000)
      cy.get('.cart').click({force: true});
      cy.wait(2000)
      cy.get('[href="/view_cart"]').last().click({force:true})
      cy.get('.cart_quantity').contains('4')   
  });
})