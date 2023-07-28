const userInfo = {
  firstName: "ilian",
  lastName: "Burgos",
  email: "ilian@globant.com",
  phone: "3176848677",
  address: "Street 1 av 2",
  city: "Cali",
  postCode: "76000",
  country: "Colombia",
  department: "Valle del Cauca",
  successMessage: "Your order has been placed!"
}  // defino la información necesaria para realizar una compra

describe('Prueba Banco Pichincha', () => {

  before(() => {
    cy.visit('/')
  });

  it('buy two items', () => { // test para comprar 2 elementos

    cy.contains(/^Cameras$/).click(); // uso una expresión regular como selector con "contains"
    cy.get('[alt="Canon EOS 5D"]').click() // uso la variable "alt" como selector con"get"
    cy.get('#input-option226').select("Red") // uso id como selector con "get"
    cy.get('#button-cart').click()
    cy.get('.breadcrumb > :nth-child(2) > a').click() // uso una clase como selector "get"
    cy.get('[title="Nikon D300"]').click()
    cy.get('#button-cart').click()
    cy.get('#cart-total').click()
    cy.contains(/^ View Cart$/).click()
    cy.contains("Checkout").click()

    // ejecuto "origin()" para manejar plugins externos de seguridad
    // a la vez que paso el objeto "userInfo" como argumento
    cy.origin("https://opencart.abstracta.us",{ args: {userInfo} }, ({userInfo})=>{

    cy.visit("index.php?route=checkout/checkout")
      cy.get('[value="guest"]').click()
      cy.get('#button-account').click();
      cy.get('[name="firstname"]').type(userInfo.firstName) // escribiendo en un input
      cy.get('[name="lastname"]').type(userInfo.lastName)
      cy.get('#input-payment-email').type(userInfo.email)
      cy.get('[name="telephone"]').type(userInfo.phone)
      cy.get('[name="address_1"]').type(userInfo.address)
      cy.get('[name="city"]').type(userInfo.city)
      cy.get('[name="postcode"]').type(userInfo.postCode)
      cy.get('[name="country_id"]').select(userInfo.country)
      cy.get('[name="zone_id"]').select(userInfo.department) // seleccionando un dropdown con input
      cy.get('#button-guest').click()

      cy.get('.panel-body > :nth-child(5) > .form-control').type("Test Comment")
      cy.get('#button-shipping-method').click()

      cy.get('[name="agree"]').click()
      cy.get('#button-payment-method').click()
      cy.get("#button-confirm").click()

    })

    cy.get('#content > h1').should('contain', userInfo.successMessage); // valido el mensaje de compra

    cy.on('uncaught:exception', (err, runnable, promise) => { // manejo el 'uncaught:exception'
      expect(err.message).to.include('pagespeed is not defined')
      return false;
    })
    
  })
})

