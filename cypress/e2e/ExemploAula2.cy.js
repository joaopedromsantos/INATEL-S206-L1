describe("Testes do registro e login de um novo usuário", () => {
    it.skip("Teste que deve registrar com sucesso", () => {
        cy.visit("https://globalsqa.com/angularJs-protractor/registration-login-example/#/login");
        cy.get('.btn-link').click();
        cy.get('#firstName').type("João Pedro");
        cy.get('#Text1').type("Santos")
        cy.get('#username').type("joaopedrosantos123");
        cy.get('#password').type("12345678");
        cy.get('.btn-primary').click();
        cy.get('.ng-binding').should("contain.text", "Registration successful");
    })

    it.skip("Teste com falha de registro", () => {
        cy.visit("https://globalsqa.com/angularJs-protractor/registration-login-example/#/login");
        cy.get('.btn-link').click();
        cy.get('#firstName').type("João Pedro");
        cy.get('#Text1').type("Santos")
        cy.get('#username').type("joaopedrosantos123");
        cy.get('.btn-primary').should("be.disabled");
    })

    it("Teste que deve logar com sucesso", () => {
        let infos = criarUser();
        cy.visit("https://globalsqa.com/angularJs-protractor/registration-login-example/#/login");
        cy.get('#username').type(infos.ID);
        cy.get('#password').type(infos.senha);
        cy.get('.btn-primary').click();
        cy.get('.ng-binding').should("contain.text", "Registration successful");
        cy.get('.ng-binding').should("contain.text", infos.ID);
    })
})

function criarUser() {
    let hora = new Date().getHours().toString();
    let minutos = new Date().getMinutes().toString();
    let segundos = new Date().getSeconds().toString();
    let ID = hora + minutos + segundos + "ID";
    let senha = hora + minutos + segundos + "SENHA";
    let infos = {
        ID: ID,
        senha: senha
    }

    cy.visit("https://globalsqa.com/angularJs-protractor/registration-login-example/#/login");
    cy.get('.btn-link').click();
    cy.get('#firstName').type(ID);
    cy.get('#Text1').type(ID)
    cy.get('#username').type(ID);
    cy.get('#password').type(senha);
    cy.get('.btn-primary').click();
    cy.get('.ng-binding').should("contain.text", "Registration successful");

    return infos;
}