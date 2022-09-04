export function login(cy, usuario, senha) {
    cy.get('#input')
        .type(usuario)
        .should('have.value', usuario);

    cy.get('.password-container > .login-input > .p-inputtext')
        .type(senha)
        .should('have.value', senha);

    cy.get('.p-button').click();
}
