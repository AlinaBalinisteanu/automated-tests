describe('Download the invoice after purchase order', () => {
    it('Go to the Automation exercise Home page', () => {
      cy.visit('https://www.automationexercise.com/')
      cy.get('.single-widget').find('h2').scrollIntoView().should('be.visible')
      cy.get('.add-to-cart[data-product-id="1"]').last().click({ force: true})
      cy.get('.close-modal').click()
      cy.get('.add-to-cart[data-product-id="3"]').last().click({ force: true})
      cy.get('.close-modal').click()
      cy.get('.add-to-cart[data-product-id="8"]').last().click({ force: true})
      cy.get('[href="/view_cart"]').last().should('be.visible').click()
      cy.get('.check_out').click()
      cy.get('[href="/login"]').last().click()
      cy.get('input[data-qa="signup-name"]').type("Balinisteanu Alina")
      cy.get('input[data-qa="signup-email"]').type("junekravi60010050@gmail.com")
      cy.get('[data-qa="signup-button"]').click()
      cy.get('[id="id_gender2"]').click()
      cy.get('input[data-qa="password"]').type("fiesta")
      cy.get('input[data-qa="first_name"]').type("Alina")
      cy.get('input[data-qa="last_name"]').type("Balinisteanu")
      cy.get('input[data-qa="address"]').type("Street Teilor, No.3")
      cy.get("#country").select('Singapore')				
      cy.get('input[data-qa="state"]').type("Romania")
      cy.get('input[data-qa="city"]').type("Suceava")
      cy.get('input[data-qa="zipcode"]').type("720193")
      cy.get('input[data-qa="mobile_number"]').type("100100100")
      cy.get('[data-qa="create-account"]').click()
      cy.get('[data-qa="account-created"]').should('be.visible')
      cy.get('[data-qa="continue-button"]').click()
      cy.get('a').contains('Logged in as')
      cy.get('[href="/view_cart"]').last().click({ force: true})
      cy.get('.check_out').click()
      cy.get('.address_firstname').contains("Mrs. Alina Balinisteanu")
      cy.get('.address_address1').contains("Street Teilor, No.3")
      cy.get('.address_city').contains("Suceava Romania")
      cy.get('.address_postcode').contains("720193")
      cy.get('.address_country_name').contains("Singapore")
      cy.get('.address_phone').contains("100100100")
      cy.get('[id="susbscribe_email"]').scrollIntoView().should('be.visible')
      cy.get('.form-control').type("Thank you seller for the products.")
      cy.get('[href="/payment"]').click()
      cy.get('input[data-qa="name-on-card"]').type("BALINISTEANU ALINA")
      cy.get('input[data-qa="card-number"]').type("1100 2000 3000 4000")
      cy.get('input[data-qa="cvc"]').type("001")
      cy.get('input[data-qa="expiry-month"]').type("03")
      cy.get('input[data-qa="expiry-year"]').type("2025")
      cy.get('[id="submit"]').click()
      cy.get('[data-qa="order-placed"]').next().contains("Congratulations! Your order has been confirmed!")
      cy.get('[href="/download_invoice/2200"]').click()
      cy.get('[data-qa="continue-button"]').click()
      cy.once('uncaught:exception', () => false)
      cy.get('[href="/delete_account"]').click()
      cy.once('uncaught:exception', () => false)
      cy.get('.btn-danger').last().click()
  });
})