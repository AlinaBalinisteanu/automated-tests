describe('Visit ASSIST DEVQA PAGE', () => {
    it('Go to the Assist DevQa login page', () => {
        cy.visit('https://assist-devqa.netlify.app/')
        //if (cy.get('div.btn').contains('Log In').length > 0){
            cy.get('.logged-menu').click()
            cy.get('span').contains('Log out').click() 
        //}
    });
})