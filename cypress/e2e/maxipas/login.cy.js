import { login } from '../../util/auth';

context('Login', () => {
    beforeEach(() => {
        cy.visit('https://app.dev.softwaresst.com.br/#/login');
    });

    it('Efetuar login', () => {
        login(cy, 'desenvolvimento2.criciuma@maxipas.com.br', '123456');

        cy.get('.layout-profile-role').should('have.text', 'Administrador');
    });
});
