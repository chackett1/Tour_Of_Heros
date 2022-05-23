describe('My First Test', () => {

  it('Does not do much!', () => {
    expect(true).to.equal(true)
  })

  it('Add New Hero', () => {
    cy.visit('http://localhost:4200/dashboard', { timeout: 120000 })

    cy.get('a[routerlink="/heroes"]').click()

    cy.get('input[id="new-hero"]').type('New Hero')

    cy.contains('button', 'Add hero')//.click()

    cy.contains('New Hero')
  })
})