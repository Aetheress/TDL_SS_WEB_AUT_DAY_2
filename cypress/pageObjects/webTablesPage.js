import BasePage from "./basePage";

class WebTablesPage extends BasePage {
    static get url() {
        return "/webtables";
    }

    static get add() {
        return cy.get(`#addNewRecordButton`);
    }

    static get firstName() {
        return cy.get(`#firstName`);
    }

    static get lastName() {
        return cy.get(`#lastName`);
    }

    static get email() {
        return cy.get(`#userEmail`);
    }

    static get age() {
        return cy.get(`#age`);
    }

    static get salary() {
        return cy.get(`#salary`);
    }

    static get department() {
        return cy.get(`#department`);
    }

    static get submit() {
        return cy.get(`#submit`);
    }

    static get firstRow() {
        return cy.get(`[role="row"]:not(.-padRow)>.rt-td:nth-child(1)`);
    }

    static get searchInput() {
        return cy.get(`#searchBox`);
    }

    static get rows() {
        return cy.get(`.rt-tbody [role="row"]:not(.-padRow)`);
    }

    static deleteUser(name) {
        return this.rows.contains(`${name}`).parent().find(`div > div > [id^="delete-record"] > svg`).click();;
    }
}

export default WebTablesPage;