import ApolloClient, { createNetworkInterface } from 'apollo-client';
import productService from './ProductService';
import gql from 'graphql-tag';
import { API_URL } from './Config'

export default function storeService(latitude, longitude) {

  // get date/time and convert to ISO
  let dateTime = new Date();
  dateTime = dateTime.toISOString();

  // init apollo
  const client = new ApolloClient({
    networkInterface: createNetworkInterface({
      uri: API_URL,
    }),
  });

  // query to get poc id
  client.query({
    query: gql`
      query pocSearchMethod($now: DateTime!, $algorithm: String!, $lat: String!, $long: String!) {
        pocSearch(now: $now, algorithm: $algorithm, lat: $lat, long: $long) {
          id
        }
      }
    `,
    variables: { 'now': dateTime, 'algorithm': 'NEAREST', 'lat': latitude, 'long': longitude }
  })
    .then(function (data) {
      let storeId = data.data.pocSearch[0].id;
      // call productService function
      productService(storeId);
    })
    .catch(error => console.error('TODO: tratar erro ', error));
}
