describe('Visit ASSIST SOFTWARE SITE', () => {
    it('Go to the Assist Software Home page', () => {
      cy.visit('https://assist-devqa.netlify.app')
      cy.get('div.btn').contains('Apply Now').click() 
  });
})
