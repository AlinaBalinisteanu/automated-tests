describe('Login user with incorrect email and password', () => {
    it('Go to the Automation exercise Home page', () => {
      cy.visit('https://www.automationexercise.com/')
      cy.get('.single-widget').find('h2').scrollIntoView().should('be.visible')
      cy.get('[href="/login"]').last().click()
      cy.get('.login-form').contains("Login to your account").should('be.visible')
      cy.get('input[data-qa="login-email"]').type("just.alina@yahoo.com")
      cy.get('input[name="password"]').type("fies")
      cy.get('[data-qa="login-button"]').click()
      cy.get('.col-sm-offset-1').contains('Your email or password is incorrect!').should('be.visible')
    });
})