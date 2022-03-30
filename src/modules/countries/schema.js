const { gql } = require('apollo-server-express')

module.exports = gql`
    type Countries {
        id: ID!
        name: String!
    }

    type Regions {
        id: ID!
        name: String!
        price: String!
    }

    type Query {
        countries: [Countries!]!
        regions(countryID: ID!): [Regions!]!
    }

    type Mutation {
        newRegion(name: String!  countryID: ID! price: String!): [Regions]
    }
`