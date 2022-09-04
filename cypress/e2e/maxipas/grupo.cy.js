context('Login', () => {
    beforeEach(() => {
        cy.visit('https://app.dev.softwaresst.com.br/#/grupos/list');
    });

    it('Listar e cadastrar grupos', () => {
        cy.get('#input')
            .type('desenvolvimento2.criciuma@maxipas.com.br')
            .should('have.value', 'desenvolvimento2.criciuma@maxipas.com.br');

        cy.get('.password-container > .login-input > .p-inputtext')
            .type('123456')
            .should('have.value', '123456');

        cy.get('.p-button').click();

        cy.get('.ml-auto > .p-button').click();

        cy.get('#descricao').type('Teste CYPRESS').should('have.value', 'Teste CYPRESS');

        cy.get('.p-button-primary > .p-button-label').click();
    });
});
