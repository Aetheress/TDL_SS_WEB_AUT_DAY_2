import BasePage from "./basePage";

class RadioButtonsPage extends BasePage {
    static get url() {
        return "/radio-button";
    }

    static get yes() {
        return cy.get(`[id="yesRadio"]`);
    }

    static get message() {
        return cy.get(`.mt-3`);
    }

    static get impressive() {
        return cy.get(`[id="impressiveRadio"]`);
    }

    static get no() {
        return cy.get(`[id="noRadio"]`);
    }
}

export default RadioButtonsPage;