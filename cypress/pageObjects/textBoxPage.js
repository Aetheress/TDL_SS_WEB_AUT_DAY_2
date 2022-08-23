import BasePage from "./basePage";

class TextBoxPage extends BasePage {
  static get url() {
    return "/text-box";
  }

  static get fullName() {
    return cy.get(`[id="userName"]`);
  }

  static get email() {
    return cy.get(`[id="userEmail"]`);
  }

  static get currentAddress() {
    return cy.get(`[id="currentAddress"]`);
  }

  static get permanentAddress() {
    return cy.get(`[id="permanentAddress"]`);
  }

  static get submit() {
    return cy.get(`[id="submit"]`);
  }

  static get pName() {
    return cy.get(`p[id="name"]`);
  }

  static get pEmail() {
    return cy.get(`p[id="email"]`);
  }

  static get pCurrentAddress() {
    return cy.get(`p[id="currentAddress"]`);
  }
  
  static get pPermanentAddress() {
    return cy.get(`p[id="permanentAddress"]`);
  }
}

export default TextBoxPage;
