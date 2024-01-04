
Cypress.on('uncaught:exception', (err, runnable) => {
    // Handle the uncaught exception, e.g., log it without failing the test
    console.error('Uncaught exception:', err.message);
    // Prevent Cypress from failing the test
    return false;
  });
describe ('Drag and Drop', ()=>{
   
    it('DragDrop',()=>
    {
        cy.visit('https://formy-project.herokuapp.com/dragdrop');
        //cy.get('#image').drag('#box')
        cy.get('#image').trigger('mousedown',{which:0})
        cy.get('#box').trigger('mousemove').trigger('mouseleave', {force:true})

    })
    it('DragDrop2', ()=>{
        let Counter = [2,3,4,5]
        cy.visit('https://demo.seleniumeasy.com/drag-and-drop-demo.html')
        cy.get('#todrag > span:nth-child(' + Counter[0]+')').trigger('mousedown', {button:0}).trigger('mousemove', { clientX: 500, clientY: 1000 })
        cy.wait(10000)
        
        
        //..trigger('mouseup', {force: true})
        cy.get('#mydropzone').trigger('mousemove')


        

        //img[alt="The peaks of High Tatras"]

    })
})