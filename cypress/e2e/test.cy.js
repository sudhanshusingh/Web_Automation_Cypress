/// <reference types="cypress"/>
import { aliasQuery, aliasMutation } from '../src/utils'

context('Tests', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://api-wip.diy.org/graphql', (req) => {
      cy.log("this is dummy request")
      // Queries
      aliasQuery(req, 'GetLaunchList')
      aliasQuery(req, 'LaunchDetails')
      aliasQuery(req, 'GetMyTrips')

      // Mutations
      aliasMutation(req, 'Login')
      aliasMutation(req, 'BookTrips')
    })
  })
  // ...
})