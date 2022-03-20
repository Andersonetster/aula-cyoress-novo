/// <reference types="cypress"/>

    describe('Funcionalidade endereços - Entrega', () => {
    
        beforeEach(() => {
            
            //modo simples de acessar o site
        //cy.visit('http://lojaebac.ebaconline.art.br/minha-conta')

        //utilizando boa praticas configuração feita no arquivo cypress.json
            cy.visit ('minha-conta')

            //campo de login customizados configuração support/commands.js
            //cy.login('aluno_ebac@teste.com','teste@teste.com')

            //fazendo login e senha puxando de fixtures/perfil.json
            cy.fixture('perfil').then(dados =>{
                cy.login(dados.usuario,dados.senha)

            })

        });

        it('deve fazer cadastro de entrega com sucesso', () => {
            
            
        });
    });