/// <reference types="cypress"/>

context('Funcionalidade login', () => {

    //Cenário Positivo

    it('Deve fazer login com sucesso', () => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta')
        cy.get('#username').type ('aluno_ebac@teste.com')
        cy.get('#password').type ('teste@teste.com')
        cy.get('.woocommerce-form > .button').click ()

        //validação do teste
        cy.get('.page-title').should('contain','Minha conta')

     
    });

    //Cenário Negativo

    it('Deve exibir uma mensagem de erro ao inserir usuário inválido', () => {

        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta')
        cy.get('#username').type ('aluno_ebac@teste')
        cy.get('#password').type ('teste@teste.com')
        cy.get('.woocommerce-form > .button').click ()
        //validação do teste
        cy.get('.woocommerce-error > li').should('contain','Erro: O usuário aluno_ebac@teste não está registrado neste site')
    });

    it.only('Deve exibir uma mensagem de erro ao inserir senha inválida', () => {

        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta')
        cy.get('#username').type ('aluno_ebac@teste.com')
        cy.get('#password').type ('teste@teste')
        cy.get('.woocommerce-form > .button').click ()

        //validação do teste
        cy.get('.woocommerce-error > li').should('contain' , 'Perdeu a senha?')
        
    });
    
});