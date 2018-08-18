import ApolloClient from "apollo-boost";


const client = new ApolloClient({
    //GraphQl API playground url setting
    uri: "http://localhost:4000/"
})

export default client;