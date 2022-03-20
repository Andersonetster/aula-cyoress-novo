/// <reference types="cypress"/>

describe('Funcionalidade página de produtos', () => {

    beforeEach(() => {

        //modo simples de acessar o site
        //cy.visit('http://lojaebac.ebaconline.art.br/produtos/')
        
        //utilizando boa praticas configuração feita no arquivo cypress.json
        cy.visit('/produtos')
        
    });

    it('Deve selecionar um produto da lista', () => {

        cy.get('[class="product-block grid"]')
            //Primeiro item da lista de produtos
            //.first()

            //selecionando um item da lista o primeiro sempre começa com zero (0)
            //.eq(3)

            //Pesquisando pelo nome do produto se o nome for clicavel
            .contains('Ariel Roll Sleeve Sweatshirt')

            .click()

    });

    it('Deve adicionar um produto ao carrinho', () => {

        cy.get('[class="product-block grid"]')
            .contains('Ariel Roll Sleeve Sweatshirt')
            .click()
        cy.get('.button-variable-item-S').click()
        cy.get('.button-variable-item-Green').click()
        cy.get('.input-text').clear().type(1)
        cy.get('.single_add_to_cart_button').click()

        cy.get('.woocommerce-message').should('contain', ' foi adicionado no seu carrinho.')


    });

    it('Deve adicionar um produto ao carrinho', () => {
        //usando variavel de quantidade no cariinho
        var quantidade = 1

        cy.get('[class="product-block grid"]')
            .contains('Ariel Roll Sleeve Sweatshirt')
            .click()
        cy.get('.button-variable-item-S').click()
        cy.get('.button-variable-item-Green').click()
        cy.get('.input-text').clear().type(1)
        cy.get('.single_add_to_cart_button').click()

        //cy.get('.woocommerce-message').should('contain', ' foi adicionado no seu carrinho.')
        //cy.get('.dropdown-toggle > .mini-cart-items').should('contain', '1')

        cy.get('.dropdown-toggle > .mini-cart-items').should('contain' , quantidade)


    });

    //puxando infomação do arquivo commands.js linha 48
    it.only('Deve adicionar produtos ao carrinho usando comando customizados', () => {

        cy.addProdutos('Ariel Roll Sleeve Sweatshirt' , 'L', 'Green', 3)
        //cy.get('.woocommerce-message').should('contain', ' foi adicionado no seu carrinho.')
        cy.get('.woocommerce-message').should('contain', 'foram adicionados no seu carrinho.')


        
    });


});