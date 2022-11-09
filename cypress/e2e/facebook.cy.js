// passo 1 - abra o navegador
// passo 2 - acesse o endereço http://facebook.com
// passo 3 - esperar a pagina carregar
// passo 4 - confira se o texto "O Facebook ajuda você a se conectar e compartilhar com as pessoas que fazem parte da sua vida." aparece na tela.
// passo 5 - encontre os campos de login que contem "email ou telefone" e "senha"
// passo 5.5 - preencha esses campos
// passo 6 - encontrar o botão de entrar
// passo 7 - clicar nele
describe("Testando o facebook", () => {
    it("passo a passo", () => {
        cy.visit("http://facebook.com");
        cy.wait(2);
        cy.contains("O Facebook ajuda você a se conectar e compartilhar com as pessoas que fazem parte da sua vida.");
        cy.get('[name ="email"]').type("miranha@email.com");
        cy.get('#pass').type("miranhasenha1234");
        cy.get('[name = "login"]').click()
    });
});
