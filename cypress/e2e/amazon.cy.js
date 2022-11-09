// passo 1 - abra o navegador
// passo 2 - acesse o endereço http://www.amazon.com.br
// passo 3 - esperar a pagina carregar
// passo 4 - clicar em mais vendios
// passo 5 - escolher um produto e clicar nele
// passo 6 - adicione o produto ao carrinho
// passo 7 - acesse o carinho
describe("Testando a amazon", () => {
    it("passo a passo", () => {
        cy.visit("http://amazon.com.br");
        cy.wait(2);
        cy.contains("Mais Vendidos");
        cy.get('[data-csa-c-content-id ="nav_cs_bestsellers"]').click();
        cy.on('uncaught:exception', () => false);
        cy.wait(2);
        cy.get('.p13n-sc-uncoverable-faceout').click({multiple: true})
        cy.on('uncaught:exception', () => false);
        cy.wait(2);
        cy.get('[name="submit.add-to-cart"]').click();
    });
});