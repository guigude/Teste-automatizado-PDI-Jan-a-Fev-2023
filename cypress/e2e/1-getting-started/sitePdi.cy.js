describe('Automatização do site PDI Jan a Fev', () => {
    beforeEach(() => {

      cy.visit('https://site-pdi.vercel.app/')


    })

    it('Verificar funcionalidade dos radio button', () => {
        
        cy.get('input[type="radio"]').its('length').then((length) => {
            const randomIndex = Math.floor(Math.random() * length);
            cy.get('input[type="radio"]').eq(randomIndex).click();

            cy.get('input[type="radio"]').eq(randomIndex).check().should('be.checked')
        
          });

    })

    it('Verificar funcionalidade do campo de inserção de nome', () => {
        
        cy.get('#username').type('Teste')
        cy.get('#username').should('have.value', 'Teste')

    })

    it('Verificar funcionalidade da combobox', () => {
        
        cy.get('#cbPais').select('Ceilandia')
        cy.get('#cbPais').should('have.value', 'Ceilandia')

    })

    it('Verificar funcionalidade do campo de inserção de nickname', () => {
        
        cy.get('#nickname').type('Teste')
        cy.get('#nickname').should('have.value', 'Teste')

    })

    it('Verificar funcionalidade do botão save e do alerta de quando os dados são salvos apos preencher todos os campos obrigatorios', () => {

        cy.get('input[type="radio"]').its('length').then((length) => {
            const randomIndex = Math.floor(Math.random() * length);
            cy.get('input[type="radio"]').eq(randomIndex).click();

            cy.get('input[type="radio"]').eq(randomIndex).check().should('be.checked')
        
          });

        cy.get('#username').type('Teste')
        cy.get('#username').should('have.value', 'Teste')

        cy.get('#nickname').type('Teste')
        cy.get('#nickname').should('have.value', 'Teste')
        
        let alertText = '';
        cy.on('window:alert', (str) => {
        alertText = str
        });
        
        cy.get('#save-button').click()
        cy.wait(1000)
        cy.get('div[id="validation-message"]').should('contain', 'Dados salvos com sucesso!')
    });

    
    it('Verificar funcionalidade do botão save e do alerta de obrigatoriedade ao não preencher o campo de apelido', () => {

        cy.get('input[type="radio"]').its('length').then((length) => {
            const randomIndex = Math.floor(Math.random() * length);
            cy.get('input[type="radio"]').eq(randomIndex).click();

            cy.get('input[type="radio"]').eq(randomIndex).check().should('be.checked')
        
          });

        cy.get('#username').type('Teste')
        cy.get('#username').should('have.value', 'Teste')

        
        let alertText = '';
        cy.on('window:alert', (str) => {
        alertText = str
        });

        cy.get('#save-button').click()
        cy.wait(1000)
        cy.get('div[id="validation-message"]').should('contain', 'Por favor, preencha todos os campos obrigatórios.')
    });

 

    it('Verificar funcionalidade do botão save e do alerta de obrigatoriedade ao não preencher o campo de nome', () => {

        cy.get('input[type="radio"]').its('length').then((length) => {
            const randomIndex = Math.floor(Math.random() * length);
            cy.get('input[type="radio"]').eq(randomIndex).click();

            cy.get('input[type="radio"]').eq(randomIndex).check().should('be.checked')
        
          });

        cy.get('#nickname').type('Teste')
        cy.get('#nickname').should('have.value', 'Teste')

        
        let alertText = '';
        cy.on('window:alert', (str) => {
        alertText = str
        });

        cy.get('#save-button').click()
        cy.wait(1000)
        cy.get('div[id="validation-message"]').should('contain', 'Por favor, preencha todos os campos obrigatórios.')
    });

    
    it('Verificar funcionalidade do botão save e do alerta de obrigatoriedade ao não selecionar uma opção no radiobutton', () => {

        cy.get('#username').type('Teste')
        cy.get('#username').should('have.value', 'Teste')

        cy.get('#nickname').type('Teste')
        cy.get('#nickname').should('have.value', 'Teste')

        
        let alertText = '';
        cy.on('window:alert', (str) => {
        alertText = str
        });

        cy.get('#save-button').click()
        cy.wait(1000)
        cy.get('div[id="validation-message"]').should('contain', 'Por favor, preencha todos os campos obrigatórios.')
    });

        

})