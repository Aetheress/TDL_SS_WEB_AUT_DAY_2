import TextBoxPage from "../../pageObjects/textBoxPage";
import CheckboxPage from "../../pageObjects/checkboxPage";

context("Elements Page", () => {
  context("Text box scenarios", () => {
    beforeEach(() => {
      TextBoxPage.visit();
    });
    
    // Create texbox scenario
    // fill in textboxes with necessary information
    // validate the paragraphs
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

  context.only("Check box scenarios", () => {
    beforeEach(()=> {
      CheckboxPage.visit();
      CheckboxPage.expand.click();
    });
    it("Validate clicked checkboxes", () => {
      CheckboxPage.expand.click();
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
    // Create CheckBoxPage page object
    // Create checkbox scenario 1:
    // Click the "+"/expand button
    // Click Notes, React, Angular, General, Excel File.doc
    // Validate the clicked checkboxes

    // Create checkbox scenario 2:
    // Click expand button
    // Click Office
    // Validate the checked checkboxes
  });

  context("Radio button scenarios", () => {
    // Create RadioButtons page object
    // Scenario 1:
    // Click yesButton
    // validate the message
    // click impressiveButton
    // validate the message
    // noButton - validate that the button exists but is disabled
  });

  context("Web tables scenarios", () => {
    // Create WebTables page object
    // Create scenario 1:
    // Click add record button
    // fill in the necessary information
    // click submit button
    // search for the user based on previously added information
    // validate tha the user is visible

    // Create Scenario 2:
    // Delete all table rows
    // Validate that we see text - No rows found
  });

  context("Buttons scenarios", () => {
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
