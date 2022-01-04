/// <reference types="Cypress" />

Cypress.on('uncaught:exception', (err, runnable) => {
    return false
    });

describe('Realizar login', () => {
    it('Sucesso', () => {
        cy.visit('https://commodity-homologation.saas-solinftec.com/login')
        cy.get('#input-login-username')
        .type('user.teste')

        cy.get('#input-login-password')
        .type('user.teste4mbtlo7F3S')

        cy.get('#btn-login-login').click()
    })
})