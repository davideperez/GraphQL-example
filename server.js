////////////
// IMPORTS
////////////


const express  = require('express');
const { createYoga } = require('graphql-yoga');
const { loadFilesSync } = require('@graphql-tools/load-files')
const { makeExecutableSchema } = require('@graphql-tools/schema')


///////////////
// VARs SETUPS
///////////////


const typesArray = loadFilesSync('**/*',{
    extensions: ['graphql'],
});

const resolversArray = loadFilesSync('**/*', {
    extensions: ['resolvers.js'],
})

const schema = makeExecutableSchema({
    typeDefs: typesArray,
    resolvers: resolversArray,
})


//////////////////////////////////
// SERVER CREATION & MIDDLEWARES
//////////////////////////////////


const app = express()

const yoga = createYoga({
    schema,
    context: (req) => ({ // Context factory gets called for every request
        //myToken: req.headers.get('authorization') // I've commented this line because it was causing problems and it seems to work :)
    }),
    graphiql: true,
})


//////////////
// ENDPOINTS
//////////////


app.use('/graphql', yoga)


/////////////////
// SERVER START!
/////////////////


app.listen(3000, () => {
    console.log('Running GraphQL server...')
})