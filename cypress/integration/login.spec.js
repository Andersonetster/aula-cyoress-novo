/// <reference types="cypress"/>

context('Funcionalidade login', () => {

    //Cenário Positivo

    //Otimizando acesso a página
    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta')
        
    });

    //Salvando evidencias dos teste por imagem

    afterEach(() => {

        cy.screenshot()
        
    });

    it('Deve fazer login com sucesso', () => {
        //forma inicial de visitar a página com cy.visit
        //cy.visit('http://lojaebac.ebaconline.art.br/minha-conta')
        cy.get('#username').type ('aluno_ebac@teste.com')
        cy.get('#password').type ('teste@teste.com')
        cy.get('.woocommerce-form > .button').click ()

        //validação do teste
        cy.get('.page-title').should('contain','Minha conta')

     
    });

    //Cenário Negativo

    it('Deve exibir uma mensagem de erro ao inserir usuário inválido', () => {
        //forma inicial de visitar a página com cy.visit
        //cy.visit('http://lojaebac.ebaconline.art.br/minha-conta')
        cy.get('#username').type ('aluno_ebac@teste')
        cy.get('#password').type ('teste@teste.com')
        cy.get('.woocommerce-form > .button').click ()
        //validação do teste
        cy.get('.woocommerce-error > li').should('contain','Erro: O usuário aluno_ebac@teste não está registrado neste site')
    });

    it.only('Deve exibir uma mensagem de erro ao inserir senha inválida', () => {
        //forma inicial de visitar a página com cy.visit
        //cy.visit('http://lojaebac.ebaconline.art.br/minha-conta')
        cy.get('#username').type ('aluno_ebac@teste.com')
        cy.get('#password').type ('teste@teste')
        cy.get('.woocommerce-form > .button').click ()

        //validação do teste
        cy.get('.woocommerce-error > li').should('contain' , 'Perdeu a senha?')
        
    });
    
});