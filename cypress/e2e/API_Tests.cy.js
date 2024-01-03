
describe ('API TESTS', ()=>{

    it ('POST TEST', ()=>{
        cy.request ({
            method : 'POST',
            url : 'https://reqres.in/api/users?page=2',
            
        }).then((Response)=>{
           expect(Response.status).eq(201)
        })


    })

    it('POST TEST', ()=>{
        
    const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
    let randomString = '';
    for (let i = 0; i < 10; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        randomString += characters.charAt(randomIndex);
    }
    const email = `${randomString})@example.com`;
    cy.log(email)

        cy.request(
            {
                method : 'POST',
                url : 'https://reqres.in/api/register',
           
            }
        ).then((Res)=>{
            cy.log(JSON.stringify(Res.body));
         }).then((GetResponse)=>{})





    })
})