const model = require('./model')

module.exports = {
    Query: {
        countries: async() => {
            return await model.countries()
        },
        regions: async(_, { countryID }) => {
            return await model.regions(countryID)
        }
    },
    Mutation: {
        newRegion: async(_, { name, countryID , price}) => {
            return await model.newRegion(name, countryID, price)
        },
        delRegion: async(_, { id }) => {
            return await model.delRegion(id)
        }
    },
    Countries: {
        id: global => global.country_id,
        name: global => global.country_name
    },
    Regions: {
        id: global => global.region_id,
        name: global => global.region_name,
        price: global => global.region_price
        
    }
}