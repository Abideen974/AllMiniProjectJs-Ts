describe('My First Test', () => {
  it('Hello world', () => {
    cy.visit("http://localhost:3000/")
    cy.get('.MuiButton-root').click()
  })
})

