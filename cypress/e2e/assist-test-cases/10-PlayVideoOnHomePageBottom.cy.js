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
  
        cy.get('[href="/home"]').click()
        ///cy.wait(1000)
       /// cy.get('.ytp-large-play-button-red-bg').contains('Play').click()
        ////cy.wait(9000)
        cy.get('#widget4').should('have.prop', 'paused', true).and('have.prop', 'ended', false).then(($video) => { $video[0].play()
            cy.get('#widget4',{timeout:200000}).should('have.prop', 'ended', true)
  })
  })
      })
    })