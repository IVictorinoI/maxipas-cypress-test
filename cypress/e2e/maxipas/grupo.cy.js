import { login } from '../../util/auth';

context('Login', () => {
    beforeEach(() => {
        cy.visit('https://app.dev.softwaresst.com.br/#/grupos/list');

        login(cy, 'desenvolvimento2.criciuma@maxipas.com.br', '123456');
    });

    it('Listar e cadastrar grupos', () => {
        const descricao = 'Teste CYPRESS';

        //cadastrar(descricao);
        cy.wait(5000)
        pesquisar(descricao);
    });
});

function pesquisar(texto) {
    cy.get('.p-chips-input-token > input').type(texto+'{enter}');
    cy.get('.p-selectable-row > :nth-child(2)').should('have.text', 'Descrição'+texto)
}

function cadastrar(descricao) {
    cy.get('.ml-auto > .p-button').click();

    cy.get('#descricao').type('Teste CYPRESS').should('have.value', 'Teste CYPRESS');

    cy.get('.p-button-primary > .p-button-label').click();
}
