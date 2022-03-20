/// <reference types="cypress"/>
const perfil = require('../fixtures/perfil.json')
context('Funcionalidade login', () => {

    //Cenário Positivo

    //Otimizando acesso a página
    beforeEach(() => {
        
        //modo simples de acessar o site
        //cy.visit('http://lojaebac.ebaconline.art.br/minha-conta')
        
        
        //utilizando boa praticas configuração feita no arquivo cypress.json
        cy.visit('/minha-conta/')
        
    });

    //Salvando evidencias dos teste por imagem

    afterEach(() => {

        cy.screenshot()
        
    });

    it.only('Deve fazer login com sucesso', () => {
        //forma inicial de visitar a página com cy.visit
        //cy.visit('http://lojaebac.ebaconline.art.br/minha-conta')
        cy.get('#username').type ('aluno_ebac@teste.com')
        cy.get('#password').type ('teste@teste.com')
        cy.get('.woocommerce-form > .button').click ()

        //validação do teste
        cy.get('.page-title').should('contain','Minha conta')

     
    });


    it('Deve fazer login com sucesso - usando arquivo de dados', () => {
        //ambiente configurado na pasta fixtures/perfil.json para usuario e senha
        //nesse mesmo arquivo na linha 2 comando para puxar o arquivo perfil.json
        cy.get('#username').type (perfil.usuario)
        cy.get('#password').type (perfil.senha)//{log:false} para ocultar a senha
        cy.get('.woocommerce-form > .button').click ()

        //validação do teste
        cy.get('.page-title').should('contain','Minha conta')

    });

    it('Deve fazer login com sucesso - usando fixture', () => {
        //mais uma forma de boa praticas de configuração de login

        cy.fixture('perfil').then(dados => {
            cy.get('#username').type (dados.usuario)
            cy.get('#password').type (dados.senha, {log:false})
                                                    //{log:false} para ocultar a senha
            cy.get('.woocommerce-form > .button').click ()
            
            //validação do teste
            cy.get('.page-title').should('contain','Minha conta')
        })

        
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

    it('Deve exibir uma mensagem de erro ao inserir senha inválida', () => {
        //forma inicial de visitar a página com cy.visit
        //cy.visit('http://lojaebac.ebaconline.art.br/minha-conta')
        cy.get('#username').type ('aluno_ebac@teste.com')
        cy.get('#password').type ('teste@teste')
        cy.get('.woocommerce-form > .button').click ()

        //validação do teste
        cy.get('.woocommerce-error > li').should('contain' , 'Perdeu a senha?')
        
    });
    
});