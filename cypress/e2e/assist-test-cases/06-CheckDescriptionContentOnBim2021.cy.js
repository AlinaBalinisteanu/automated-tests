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
        cy.get('.bim-description-content > :nth-child(1)').should('have.text','Description')
        cy.get('.bim-description-content-info > :nth-child(1)').should('have.text','Curabitur a congue velit. Maecenas interdum lorem eu purus aliquet blandit. Suspendisse suscipit quam pretium rutrum porta. Pellentesque porta lacinia erat, a vestibulum orci dapibus non. Suspendisse cursus justo fringilla dui lobortis gravida. Fusce at sem diam. Phasellus dictum elit hendrerit, laoreet lectus dapibus, luctus nulla. Maecenas porttitor euismod urna, non pulvinar lectus porta eu. Etiam vel eros lorem. Curabitur sit amet odio mi. Suspendisse justo dui, rhoncus non quam nec, gravida lobortis massa. Maecenas ut congue arcu, quis vestibulum est.')
    
      })
  });
  })