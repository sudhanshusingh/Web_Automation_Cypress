/// <reference types="cypress"/>
import { openEducatorsPortal, logoutEducatorsPortal, loginWithCreds } from "../support/commands";

before(() => {
  cy.openEducatorsPortal()
})

describe('generate magic link', () => {
  it('validate Invalid Link Pop up Message', () => {
    try {
      cy.fixture('educatorsData.json').then((user) => {
        cy.get('#email').type(user.invalidEmail)
        cy.get('.magin-signin > .button-component').click()
        cy.get('.alert-body').then((EmailAlert) => {
          cy.log(EmailAlert.text())
          expect(EmailAlert.text()).to.equal('Email is not registered with us');
          cy.screenshot()
        })
      })
    } catch (error) {
      cy.log(error.text())
      cy.screenshot()
    }
  })

  it('validate valid Link Pop up Message', () => {
    try {
      cy.fixture('educatorsData.json').then((user) => {
        cy.get('#email').clear().wait(3000).type(user.validEmail)
        cy.get('.magin-signin > .button-component').click()
        cy.get('.alert-body').then((EmailAlert) => {
          cy.log(EmailAlert.text())
          expect(EmailAlert.text()).to.equal('Check your inbox. A magic link has been sent to the registered email address');
        })
      })
    } catch (error) {
      cy.log(error.text())
    }
  })
})

describe('validate page Headers!!', () => {
  it('verify clever header text', () => {
    cy.get('.css-8sgstd-Box-Flex > .button-component').invoke('text').then((text) => {
      expect(text).equal('Sign in with Clever')
    })
    cy.log('failed to find the element')
    cy.xpath('//*[@  class = "css-a6ofzu-Box-StyledText eln02br0"]').contains('We’ll send you a one-time link to access your account.')
  })
  it('verify One time Link header text', () => {
    cy.get('.css-a6ofzu-Box-StyledText').invoke('text').then((text) => {
      expect(text).equal('We’ll send you a one-time link to access your account.')
    })
  })
  it('verify DIY Credentials Sign In header text', () => {
    cy.get('.default-signin > :nth-child(1)').invoke('text').then((text) => {
      expect(text).equal('Your DIY Identity (Login Credentials)')
    })
  })
  it('verify Educator Sign in header text', () => {
    cy.get('.css-1tu0hho-Box-StyledText').invoke('text').then((text) => {
      expect(text).equal('Educator Sign In')
    })
  })
})

describe('Login to Educators Portal', () => {
  it('verify url', () => {
    cy.fixture('educatorsData.json').then((user) => {
      cy.loginWithCreds(user.name, user.password)
    })
  })
})