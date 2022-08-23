import BasePage from "./basePage";

class CheckboxPage extends BasePage {
    static get url() {
        return "/checkbox";
      }

      static get expand() {
        return cy.get(`[title="Expand all"]`);
      }

      static get notes() {
        return cy.get(`[for="tree-node-notes"]>span[class="rct-checkbox"]>svg`);
      }
      
      static get react() {
        return cy.get(`[for="tree-node-react"]>span[class="rct-checkbox"]>svg`);
      }

      static get angular() {
        return cy.get(`[for="tree-node-angular"]>span[class="rct-checkbox"]>svg`);
      }

      static get general() {
        return cy.get(`[for="tree-node-general"]>span[class="rct-checkbox"]>svg`);
      }

      static get excelFileDoc() {
        return cy.get(`[for="tree-node-excelFile"]>span[class="rct-checkbox"]>svg`);
      }

      static get office() {
        return cy.get(`[for="tree-node-office"]>span[class="rct-checkbox"]>svg`)
      }

      static get public() {
        return cy.get(`[for="tree-node-public"]>span[class="rct-checkbox"]>svg`)
      }

      static get private() {
        return cy.get(`[for="tree-node-private"]>span[class="rct-checkbox"]>svg`)
      }

      static get classified() {
        return cy.get(`[for="tree-node-classified"]>span[class="rct-checkbox"]>svg`)
      }
}

export default CheckboxPage;