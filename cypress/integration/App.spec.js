const { cyan } = require("@mui/material/colors")

describe("Roman Converter", () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  })
  it("frontpage can be opened", () => {
    cy.contains(/roman converter/i);
    cy.contains(/esperando un número/i);
  });

  it("given the input '4999' it should return 'MMMMCMXCIX'", () => {
    cy.get('input').type(4999);
    cy.contains(/convertir/i).click();
    cy.contains('MMMMCMXCIX');
  });

  it("given the input 'a' it should return 'Sólo se aceptan números entre el 1 y el 4999 :('", () => {
    cy.get('input').type('a');
    cy.contains(/convertir/i).click();
    cy.contains(/sólo se aceptan números entre el 1 y el 4999 /i);
  });

  it("given the input '5000' it should return 'El número máximo es 4999 !", () => {
    cy.get('input').type(5000);
    cy.contains(/convertir/i).click();
    cy.contains(/el número máximo es 4999/i);
  });  
})