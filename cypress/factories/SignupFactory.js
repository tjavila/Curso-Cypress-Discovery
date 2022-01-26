var faker = require('faker')
var cpf = require('gerador-validador-cpf')

export default{
    deliver: function(){

        var firstName = faker.name.firstName()
        var lastName = faker.name.lastName()
        var data = {
            name: `${firstName} ${lastName}`,
            cpf: cpf.generate(),
            email: faker.internet.email(firstName),
            whatsapp: '53991234568',
            address:{
                postalcode: '96215420',
                street:'Rua das Galeras',
                number: '45',
                details: 'casa da diana',
                district: 'Parque Marinha',
                city_state: 'Rio Grande/RS'
            },
            'delivery_method': 'Moto',
            'cnh': 'foto.jpg'
        }

        return data
    }
}