// import ApolloClient , { createNetworkInterface }  from 'apollo-client';
// import gql from 'graphql-tag';
import { graphql } from 'graphql'

const endpoint = 'https://803votn6w7.execute-api.us-west-2.amazonaws.com/dev/public/graphql'
const toJSON = res => res.json()
const post = (root, { id }) => fetch(`${endpoint}/posts/${id}`).then(toJSON)
const posts = () => fetch(`${endpoint}/posts`).then(toJSON)
const user = (root, { id }) => fetch(`${endpoint}/users/${id}`).then(toJSON)
const users = () => fetch(`${endpoint}/users`).then(toJSON)
const resolvers = {
  Query: {
    post,
    posts,
    user,
    users,
  },
}




// const client = new ApolloClient();

// const client = new apollo.ApolloClient({
//   networkInterface: apollo.createNetworkInterface({
//     uri: "https://803votn6w7.execute-api.us-west-2.amazonaws.com/dev/public/graphql",
//   }),
// });

// const opts = {uri: 'https://803votn6w7.execute-api.us-west-2.amazonaws.com/dev/public/graphql'}
// const networkInterface = createNetworkInterface(opts)
// const client = new ApolloClient({
//   networkInterface,
// });


// let mutation = gql`
// mutation ($now: [FooInput] $bar: String!) {
//   addFoo(
//     foo: $foo
//     bar: $bar
//   ){
//     foo
//     bar
//   }
// }
// `

// client.mutate({mutation, variables: {foo: [1,2,3], bar: "baz"}}).then((results) => {
// //do something with result
//  return results;
// })




// client.query({
//   query: gql("{ hello }"),
// })
//   .catch(function (err) {
//     console.error(err);
//   })
//   .then(function (data) {
//     console.log(data);
//   })
//   ;


//   const query = gql`query {
//     posts {
//       name
//       title
//       content
//     }
//   }`;

//   "algorithm": "NEAREST",
//   "lat": "-23.6466615",
//   "long": "-46.7143678",
//   "now": "2017-10-16T22:00:00.000Z"
