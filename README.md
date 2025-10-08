# cypress-axe-project

## 👨‍💻 Author & Contact

**Alves Gonzalez**  
**QA Engineer | Accessibility & Automation Testing**  
📧 Email: [alvesdgonzalez3@gmail.com](mailto:alvesdgonzalez3@gmail.com)  
🔗 LinkedIn: [https://www.linkedin.com/in/alves-gonzalez](https://www.linkedin.com/in/alves-gonzalez)

# ✅ Todo Application Accessibility Test

In this project I perform automated accessibility testing on the **TodoMVC React Application** using **Cypress** integrated with **axe-core**.  
It demonstrates how accessibility testing can be included in end-to-end (E2E) workflows to identify and manage WCAG 2.1 AA compliance issues.

---

## 🧩 Overview

- **Framework:** Cypress  
- **Accessibility Library:** axe-core (via `cypress-axe`)  
- **Tested URL:** [https://todomvc.com/examples/react/dist/](https://todomvc.com/examples/react/dist/)  
- **Testing Standard:** WCAG 2.1 AA  
- **Author:** Alves Gonzalez  

---

## 🧪 What This Test Does

This test suite:
- Visits the TodoMVC React app and injects the axe-core accessibility engine.  
- Scans the page for accessibility violations such as missing labels, color contrast issues, or heading structure problems.  
- Demonstrates **targeted testing** by including or excluding specific page elements.  
- Filters results to focus on issues with **moderate** and **low** impact levels.  
- Shows how to disable or customize specific accessibility rules during testing.  

---

## ⚙️ How to Run

1. Install Cypress and axe dependencies:
   ```bash
   npm install cypress cypress-axe axe-core --save-dev
Open the Cypress Test Runner:

npx cypress open


Run the test file:

Navigate to E2E Testing

Select your browser

Choose Todo_App_Accessibility.cy.js

View results directly in the Cypress Test Runner or terminal.

🧠 Key Highlights

✅ Full-page and targeted accessibility audits

🚫 Exclusion of specific page sections (e.g., .learn, footers, or banners)

🎯 Focused element checks using cy.checkA11y(selector)

⚖️ Rule-level control with includedImpacts and rules options

🔍 Demonstrates real-world QA automation and accessibility testing practices

🧾 License

This project is for educational and portfolio purposes only.
All trademarks and external resources belong to their respective owners.
