describe('Login User  with correct email and password', () => {
    it('Go to the Automation exercise Home page', () => {
      cy.visit('https://www.automationexercise.com/')
      cy.get('.single-widget').find('h2').scrollIntoView().should('be.visible')
      cy.get('[href="/login"]').click()
      cy.get('input[data-qa="login-email"]').type("just.alina31@yahoo.com")
      cy.get('input[name="password"]').type("fiesta")
      cy.get('[data-qa="login-button"]').click()
      cy.get('a').contains('Logged in as')
      cy.once('uncaught:exception', () => false)
      cy.get('[href="/delete_account"]').click()
      cy.once('uncaught:exception', () => false)
      cy.get('.btn-danger').last().click()   
  });
})
