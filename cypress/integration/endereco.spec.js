/// <reference types="cypress"/>

//impprtando arquivo da pasta page-objects arquivo endereco-page.js
import EnderecoPage from '../support/page-objects/endereco.page'


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

        //teste que puxa do arquivo da pasta support/page-object/endereco.page.js
        it.only('deve fazer cadastro de Faturamento com sucesso', () => {
            EnderecoPage.editarEnderecoFaturamento('silva','santos','alliance','Brasil','ione do bem','318','serrana','São Paulo','14150000','11965650796','silva@hotmail.com')
            cy.get('.woocommerce-message').should('contain','Endereço alterado com sucesso.')
            
        });
    });