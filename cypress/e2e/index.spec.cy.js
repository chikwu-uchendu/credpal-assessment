describe('Display Homepage', () => {
  it('passes', () => {
    cy.visit('https://www.credpal.com')
    cy.get('[href="/sales"]').click()
    cy.get('#first_name').type('Rita')
    cy.get('#last_name').type('Osi')
    cy.get('#email').type('rita.osi56@gmail.com')
    cy.get('#phone').type('+2347065543298')
    cy.get('.gap-5 > :nth-child(1)').click()
    cy.get('.gap-4 > .appearance-none').click()
    

  })


  
})