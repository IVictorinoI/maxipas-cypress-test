import { login } from '../../util/auth';

context('Login', () => {
    beforeEach(() => {
        cy.visit('https://app.dev.softwaresst.com.br/#/position/list');

        login(cy, 'desenvolvimento2.criciuma@maxipas.com.br', '123456');
    });

    it('Listar e cadastrar grupos', () => {
        const descricao = 'Teste CYPRESS '+new Date().toLocaleString();
        //const descricao = 'Teste CYPRESS';

        cadastrar(descricao);

        pesquisar(descricao);
        
        //excluir(descricao);
    });
});

function cadastrar(descricao) {
    cy.get('.ml-auto > .p-button').click();

    cy.get('#descricao').type(descricao).should('have.value', descricao);

    cy.get('.p-button-primary > .p-button-label').click();
}

function pesquisar(texto) {
    aguardarListagemCarregar();
    cy.get('.p-chips-input-token > input').type(texto+'{enter}');
    cy.get('.p-selectable-row > :nth-child(2)').should('contain', texto)
}

function excluir(texto) {
    cy.get('.p-selectable-row > :nth-child(2)').should('contain', texto)
    cy.wait(2000)
    cy.get('.text-right > .p-button-text').type('{enter}');
}

function aguardarListagemCarregar() {
    cy.get('.p-selectable-row > :nth-child(1)', { timeout: 10000 }).should('be.visible');
}
