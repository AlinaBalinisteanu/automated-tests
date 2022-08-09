describe('Visit ASSIST DEVQA PAGE', () => {
    it('Go to the Assist DevQa login page', () => {
        cy.visit('https://assist-devqa.netlify.app/')
            cy.get('.logged-menu').click()
            cy.get('span').contains('Log out').click() 
    });
})