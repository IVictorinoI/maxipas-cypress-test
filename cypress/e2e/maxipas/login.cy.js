context('Login', () => {
    beforeEach(() => {
        cy.visit('https://app.dev.softwaresst.com.br/#/login');
    });

    it('Efetuar login', () => {
        cy.get('#input')
            .type('desenvolvimento2.criciuma@maxipas.com.br')
            .should('have.value', 'desenvolvimento2.criciuma@maxipas.com.br');

        cy.get('.password-container > .login-input > .p-inputtext')
            .type('123456')
            .should('have.value', '123456');

        cy.get('.p-button').click();

        cy.get('.layout-profile-role').should('have.text', 'Administrador');
    });
});
