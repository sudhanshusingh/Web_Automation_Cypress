// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import { addMatchImageSnapshotCommand } from 'cypress-image-snapshot/command';


Cypress.Commands.add('openEducatorsPortal', () => {
    console.log('opening educators portal.....');
    cy.visit('https://educator-wip.diy.org/')
    cy.url().should('include', 'educator') 
})

Cypress.Commands.add('logoutEducatorsPortal', () => {
    cy.get('.bottom-sticky > .button-component').click()
})

Cypress.Commands.add('loginWithCreds', (email, password) => {
    return cy
    .get('#username').type(email)
    .get('#password').type(password)
    .xpath('//button[@type = "button" and contains(text(), "Sign In")]').click()    
})

addMatchImageSnapshotCommand();