describe("Ticket Online Page", () => {
  it("loads the ticket page successfully", () => {
    cy.visit("/tiket-online");
    cy.contains("Kolam Renang Nyaman").should("be.visible");
  });

  it("validates the form", () => {
    cy.get("button[type='submit']").click();
    cy.contains("Nama Lengkap wajib diisi").should("be.visible");
    cy.contains("Email wajib diisi").should("be.visible");
  });

  it("submits the form with valid data", () => {
    cy.get("input[name='fullName']").type("John Doe");
    cy.get("input[name='email']").type("john@example.com");
    cy.get("input[name='phone']").type("081234567890");
    cy.get("select[name='ticket_type']").select("reguler");
    cy.get(".react-calendar")
      .click()
      .then(() => {
        cy.get(".react-calendar__tile--now").click();
      });
    cy.get("button[type='submit']").click();
    cy.contains("Pesanan Anda telah diterima").should("be.visible");
  });
});
