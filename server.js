const express  = require('express');
const { buildSchema } = require('graphql');
const { graphqlHTTP } = require('express-graphql');

const schema = buildSchema(`
    type Query {
        description: String
        price: Float
    }
`);

const root = {
    description: 'RedShoe',
    price: 42.12,
}

const app = express()

// A continuacion el endpoint de graphql
app.use('/graphql', graphqlHTTP({
    schema: schema, //se indica el schema a express.
    rootValue: root, //se indica a express, como se va a responder a los querys.
}))

app.listen(3000, () => {
    console.log('Running GraphQL server...')
})