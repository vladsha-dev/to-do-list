describe("Welcome page", () => {
    it("should forward to lists page on Continue button click", () => {
        cy.visit("/");
        cy.get("button").should("have.text", "Continue");
        cy.get("button").click();
        cy.contains("LISTS PAGE");
    });
});
