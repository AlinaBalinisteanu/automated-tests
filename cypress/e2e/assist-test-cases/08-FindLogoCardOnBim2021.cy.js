describe('Visit ASSIST SOFTWARE SITE', () => {
    it('Go to the Assist DevQa Home page', () => {
      cy.visit('https://assist-devqa.netlify.app')
  
      cy.get('body').then(($ele) => {
        if ($ele.find('div.logged-menu').length > 0) { 
          cy.get('.logged-menu').click()
          cy.get('span').contains('Log out').click() 
          cy.wait(1000)
        }
        cy.get('div.btn').contains('Log In').click() 
        cy.get('.login-container > :nth-child(2)').click() 
        cy.get('input[name="email"]').type("user1@test.com")
        cy.get('input[name="password"]').type("user123456")
        cy.get('.submit-btn').click()
        cy.wait(1000)
  
        ///cy.get('[href="/home"]').click()
        ///cy.wait(1000)
        cy.get('[href="/bim"]').click()
        cy.wait(1000)
        cy.get('.card-logo').should('have.css', 'background-image').and('include', 'url("https://firebasestorage.googleapis.com/v0/b/best-innovative-minds.appspot.com/o/jury%2Fimage_2022-02-09_145943.png?alt=media&token=d6521560-0183-4bbe-bb25-fe6342274026")')
      })
  });
  })