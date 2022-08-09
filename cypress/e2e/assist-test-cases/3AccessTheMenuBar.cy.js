describe('Visit ASSIST SOFTWARE SITE', () => {
    it('Go to the Assist DevQa Home page', () => {
      cy.visit('https://assist-devqa.netlify.app')
      cy.get('div.btn').contains('Log In').click() 
            cy.get('.login-container > :nth-child(2)').click() 
            cy.get('input[name="email"]').type("user1@test.com")
            cy.get('input[name="password"]').type("user123456")
            cy.get('.submit-btn').click()
           /// cy.visit('href.home').click()
      ///cy.get('div.nav-panel').contains('Home').click()
  });
})