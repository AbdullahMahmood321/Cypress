

describe ('Test Suit', ()=>{ 

    beforeEach('Visit URL',()=>{
        cy.visit('https://formy-project.herokuapp.com/form');
    })
   
    it.skip('Dropdpwn_1',()=>
    {
        cy.get('[role="button"]')
            .should('be.visible')
            .then((Text)=>{
                expect (Text.text()).to.equal('Submit')
            })
        cy.get('#select-menu').find('option').should('have.length', 5)
       
        // cy.fixture('DATA.txt').then((Parser)=>{

        //     cy.log(Parser)
        // })


        const OptionArray = ["Select an option", "0-1" , '2-4' ,'5-9', '10+'];
        cy.get('#select-menu>option').then((Cheker)=>{
            for (let ElementCounter = 0; ElementCounter < Cheker.length; ElementCounter++) {
                expect(Cheker[ElementCounter].innerText).to.equal(OptionArray[ElementCounter]);
            }
        })

    
    })

    it('Calander', ()=>
    {
        cy.get('input[data-provide="datepicker"]').should('be.visible');
        cy.get('input[data-provide="datepicker"]').then((Cheker)=>{
            expect(Cheker).to.have.attr('data-date-today-highlight','true')
        })
        
        cy.get('input[data-provide="datepicker"]').type('01/22/2000')
        cy.get('.datepicker-days').find('td.active.day').then((Highligter)=>
        {
            expect(Highligter).to.have.prop('textContent','22')

        })

        cy.get('.datepicker-months').find('span.month.focused.active').then((Check)=>{
            expect(Check).to.have.prop('textContent', 'Jan')
        })

        cy.get('.datepicker-years').find('span.year.active.focused').then((Check)=>{
            expect(Check).to.have.prop('textContent', '2000')
        })

        
    })
})