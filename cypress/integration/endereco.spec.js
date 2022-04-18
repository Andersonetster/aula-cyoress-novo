/// <reference types="cypress"/>

//impprtando arquivo da pasta page-objects arquivo endereco-page.js
import EnderecoPage from '../support/page-objects/endereco.page'

const dadosEndereco = require('../fixtures/endereco.json')


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
        it('deve fazer cadastro de Faturamento com sucesso', () => {
            EnderecoPage.editarEnderecoFaturamento('silva','santos','alliance','Brasil','ione do bem','318','serrana','São Paulo','14150000','11965650796','silva@hotmail.com')
            cy.get('.woocommerce-message').should('contain','Endereço alterado com sucesso.')
            
        });

        //teste que puxa do arquivo da pasta fixtures/arquivo.jason. configuração de arquivo na linha 6
    

        it.only('deve fazer cadastro de Faturamento com sucesso usando arquivo de dados', () => {
            EnderecoPage.editarEnderecoFaturamento(
                dadosEndereco[2].nome,
                dadosEndereco[2].sobrenome,
                dadosEndereco[2].empresa,
                dadosEndereco[2].pais,
                dadosEndereco[2].endereco,
                dadosEndereco[2].numero,
                dadosEndereco[2].cidade,
                dadosEndereco[2].estado,
                dadosEndereco[2].cep,
                dadosEndereco[2].telefone,
                dadosEndereco[2].email 
                )

            cy.get('.woocommerce-message').should('contain','Endereço alterado com sucesso.')
            
        });
    });