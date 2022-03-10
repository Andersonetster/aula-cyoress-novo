/// <reference types="cypress"/>
//var faker = require('faker');
var faker = require('faker-br');
const Faker = require('faker-br/lib');

describe('Funcionalidade pré cadastro', () => {
    //comando visitar site
    beforeEach(() => {

        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
        
    });

    // Forma correta, funciona , mas nao utiliza boas práticas
    it('Deve completar o pré cadastro com sucesso', () => {

        cy.get('#reg_email').type('anderson@santos4.com')
        cy.get('#reg_password').type('teste@teste')
        cy.get(':nth-child(4) > .button').click()
        cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()
        cy.get('#account_first_name').type('anderson')
        cy.get('#account_last_name').type('santos')
        cy.get('.woocommerce-Button').click()

        cy.get('.woocommerce-message').should('contain' , 'Detalhes da conta modificados com sucesso')
        
    });

     //comando para instalar arquivo faker para cadastros novos: terminal "npm install faker"
    //var faker = require('faker'); abaixo do reference type
    //Documentação faker https://www.npmjs.com/package/faker-br

    it('Deve completar o pré cadastro com sucesso cadastro faker', () => {

        cy.get('#reg_email').type(faker.internet.email())
        cy.get('#reg_password').type('teste@teste')
        cy.get(':nth-child(4) > .button').click()
        cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()
        cy.get('#account_first_name').type(faker.name.firstName())
        cy.get('#account_last_name').type(faker.name.lastName())
        cy.get('.woocommerce-Button').click()

        cy.get('.woocommerce-message').should('contain' , 'Detalhes da conta modificados com sucesso')
        
    });


    it.only('Deve completar o pré cadastro com sucesso cadastro faker comandos variavel', () => {

        //usando comando variavel
        let nomeFaker =faker.name.firstName()
        let sobrenomeFaker =faker.name.lastName()
        let emailFaker =faker.internet.email(nomeFaker)//<<nome faker para puxar o nome faker para o inicio do email

        cy.get('#reg_email').type(emailFaker)
        cy.get('#reg_password').type('teste@teste')
        cy.get(':nth-child(4) > .button').click()
        cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()
        cy.get('#account_first_name').type(nomeFaker)
        cy.get('#account_last_name').type(sobrenomeFaker)
        cy.get('.woocommerce-Button').click()

        cy.get('.woocommerce-message').should('contain' , 'Detalhes da conta modificados com sucesso')
        
    });

   
    
    
});