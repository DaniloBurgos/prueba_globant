// / <reference types="cypress" />
const URL = Cypress.env('swagger'); //uso una variable de entorno para el endpoint base

describe('API test para creación de usuario, Banco Pichincha', () => {
  it('Ejemplos', () => {
      // obtengo la info del usuario
      cy.fixture('apiUser.json').then((user) => { //uso un fixture para el payload
        // hago el usuario único
        user.id = new Date().getTime()
        user.username = 'Ilian' + (new Date()).getTime()
        user.email = 'ilian_burgos_' + (new Date()).getTime() + '@gmail.com'

        cy.request('POST', `${URL}/user`, user)
          .then((res) => {
            expect(res.status).to.equal(200); // verifico código de respuesta correcto
            expect(res.body.message).to.equal(user.id.toString()); // comparo el id del fixture con "message"
            cy.wrap(user) //devuelvo la respuesta
          })
      }).then((user) => {
        cy.request('GET', `${URL}/user/${user.username}`) // busco al usuario creado por su username
          .then((res) => {
            expect(res.status).to.equal(200);
            expect(res.body).to.deep.equal(user); //el cuerpo de la respuestadebe ser igual a mi fixture
            cy.wrap(res.body);
          });
      }).then((newUser) => {
        newUser.firstName = 'Other'; //modifico parámetros del usuario encontrado
        newUser.lastName = new Date().getTime().toString();

        cy.request('PUT', `${URL}/user/${newUser.username}`, newUser) // hago el request con el usuario modificado
          .then((res) => {
            expect(res.status).to.equal(200); // evalúo el código de respuesta
            cy.wrap(newUser) // devuelvo la respuesta
          });
      }).then((updatedUser) => { // obtengo la respuesta
        cy.request('GET', `${URL}/user/${updatedUser.username}`) // busco por el nombre del nuevo usuario modificado
          .then((res) => {
            expect(res.status).to.equal(200);
            expect(res.body).to.deep.equal(updatedUser); // el cuerpo de la respuestadebe ser igual al usuario modificado
          });
      });
  });
});
