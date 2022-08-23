import TextBoxPage from "../../pageObjects/textBoxPage";
import CheckboxPage from "../../pageObjects/checkboxPage";
import RadioButtonsPage from "../../pageObjects/radioButtonsPage";
import WebTablesPage from "../../pageObjects/webTablesPage";
import ButtonsPage from "../../pageObjects/buttonsPage";

context("Elements Page", () => {
  context("Text box scenarios", () => {
    beforeEach(() => {
      TextBoxPage.visit();
    });
    
    it("Filling in Text Boxes", () => {
      TextBoxPage.fullName.type("Ulvis Blathens")
      TextBoxPage.email.type("ulvis.blathens@gmail.com");
      TextBoxPage.currentAddress.type("middle of nowhere");
      TextBoxPage.permanentAddress.type("the void");
      TextBoxPage.submit.click();
      TextBoxPage.pName.should("have.text", "Name:Ulvis Blathens");
      TextBoxPage.pEmail.should("have.text", "Email:ulvis.blathens@gmail.com");
      TextBoxPage.pCurrentAddress.should("have.text", "Current Address :middle of nowhere ");
      TextBoxPage.pPermanentAddress.should("have.text", "Permananet Address :the void");
    });
  });

  context("Check box scenarios", () => {
    beforeEach(()=> {
      CheckboxPage.visit();
      CheckboxPage.expand.click();
    });
    it("Validate clicked checkboxes", () => {
      CheckboxPage.notes.click();
      CheckboxPage.react.click();
      CheckboxPage.angular.click();
      CheckboxPage.general.click();
      CheckboxPage.excelFileDoc.click();
      CheckboxPage.notes.should("have.class", "rct-icon-check");
      CheckboxPage.react.should("have.class", "rct-icon-check");
      CheckboxPage.angular.should("have.class", "rct-icon-check");
      CheckboxPage.general.should("have.class", "rct-icon-check");
      CheckboxPage.excelFileDoc.should("have.class", "rct-icon-check");
    })
    it("Validate clicked category", () => {
      CheckboxPage.office.click();
      CheckboxPage.office.should("have.class", "rct-icon-check");
      CheckboxPage.public.should("have.class", "rct-icon-check");
      CheckboxPage.private.should("have.class", "rct-icon-check");
      CheckboxPage.classified.should("have.class", "rct-icon-check");
      CheckboxPage.general.should("have.class", "rct-icon-check");
    })
  });

  context("Radio button scenarios", () => {
    beforeEach(() => {
      RadioButtonsPage.visit();
    })
    it ("Radio button test", () => {
      RadioButtonsPage.yes.click({force: true});
      RadioButtonsPage.message.should("contain.text", "Yes");
      RadioButtonsPage.impressive.click({force: true});
      RadioButtonsPage.message.should("contain.text", "Impressive");
      RadioButtonsPage.no.should("have.disabled", "true");
    })
  });

  context("Web tables scenarios", () => {
    beforeEach(() => {
      WebTablesPage.visit();
    })
    it("Add record test", () => {
      WebTablesPage.add.click();
      WebTablesPage.firstName.type("Ulvis");
      WebTablesPage.lastName.type("Blathens");
      WebTablesPage.email.type("ulvis.blathens@gmail.com");
      WebTablesPage.age.type("24");
      WebTablesPage.salary.type("0");
      WebTablesPage.department.type("LDK");
      WebTablesPage.submit.click();
      WebTablesPage.searchInput.type("Ulvis");
      WebTablesPage.firstRow.should("have.text", "Ulvis");
    })
    it("Delete records test", () => {
      ['Cierra', 'Alden', 'Kierra'].forEach((name) => {
        WebTablesPage.deleteUser(name);
      });
      WebTablesPage.rows.should("have.length", 0);
    })
  });

  context("Buttons scenarios", () => {
    beforeEach(()=> {
      ButtonsPage.visit();
    });
    it("Buttons test", () => {
      ButtonsPage.doubleClickButton.dblclick();
      ButtonsPage.doubleClickMessage.should("contain.text", "double click");
      ButtonsPage.rightClickButton.rightclick();
      ButtonsPage.rightClickMessage.should("contain.text", "right click");
      ButtonsPage.dynamicButton.click();
      ButtonsPage.dynamicClickMessage.should("contain.text", "dynamic click");
    });
    // Create buttons clicking scenario
    // Create Buttons page
    // Check documentation https://docs.cypress.io/api/commands/and for how to perform different types of clicking
    // Click Double click button
    // Validate the double click message
    // Click rightclick button
    // Validate the right click message
    // Do dynamic click
    // Validate dynamic click message
  });
});
