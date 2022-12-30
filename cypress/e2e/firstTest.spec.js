// LOCATORS

// activate cypress intellisense 👇
/// <reference types="cypress" />

describe('Our first suite', () => {
    it('First test', () => {

      cy.visit('/')
      cy.contains('Forms').click()
      cy.contains('Form Layouts').click()

      // by Tag name
      cy.get('input')

      // by ID
      cy.get('#inputEmail1')

      // by class name
      cy.get('.input-full-width')

      // by attribute name
      cy.get('[placeholder]')

      // by attribute name and value
      cy.get('[placeholder="Email"]')

      // by class value
      cy.get('[class="input-full-width size-medium shape-rectangle"]')

      // by tag name and attribute with value
      cy.get('input[placeholder="Email"]')

      // by two different attributes
      cy.get('[placeholder="Email"][fullwidth]')

      // by tag name and attribute with value, ID and classname
      cy.get('input[placeholder="Email"]#inputEmail1.input-full-width')

      // The most recommended way by cypress - i.e. create your own attributes
      // cy.get('[data-cy="inputEmail1"]')

    });
});
