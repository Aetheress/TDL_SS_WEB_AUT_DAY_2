import BasePage from "./basePage";

class ButtonsPage extends BasePage {
    static get url() {
        return "/buttons";
    }

    static get doubleClickButton() {
        return cy.get(`#doubleClickBtn`);
    }

    static get rightClickButton() {
        return cy.get(`#rightClickBtn`);
    }

    static get dynamicButton() {
        return cy.get(`.mt-4:nth-child(3)>button`);
    }

    static get doubleClickMessage() {
        return cy.get(`#doubleClickMessage`);
    }

    static get rightClickMessage() {
        return cy.get(`#rightClickMessage`);
    }

    static get dynamicClickMessage() {
        return cy.get(`#dynamicClickMessage`);
    }
}

export default ButtonsPage;