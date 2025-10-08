describe('Todo Application', () => {
  beforeEach(() => {
    cy.visit('https://todomvc.com/examples/react/dist/')
    cy.injectAxe();

  });

  it('Should log any accessibilty failures', () => {
    cy.checkA11y();
  });

  it.only('Should exclude specific elements on the page', () => {
    cy.checkA11y({exclude: ['.learn']});
  });

  it('Should only test specific elements on the page', () => {
    cy.checkA11y('.learn');
  });

  it.only('Should only include rules with moderate and low impacts', () => {
    cy.checkA11y(null, {includedImpacts: ['moderate', 'low']});
  });

  it('Should exclude specific accessibility rules', () => {
    cy.checkA11y(null, {rules: {
      'heading-order': {enabled: false}
    }});
  });

});
